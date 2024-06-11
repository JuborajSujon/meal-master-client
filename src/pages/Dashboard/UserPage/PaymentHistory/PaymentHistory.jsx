import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { BiTrash } from "react-icons/bi";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function PaymentHistory() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: paymentHistory = [], refetch } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    if (!id) return;

    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/payments/${id}`);
          if (res.data.deletedCount > 0) {
            const userbadge = {
              badge: "bronze",
            };

            const res = await axiosSecure.patch(
              `/user/${user?.email}`,
              userbadge
            );
            if (res.data.modifiedCount > 0) {
              toast.success("Payment deleted successfully", {
                autoClose: 1500,
              });
              refetch();
            }
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Payment History | Dashboard</title>
      </Helmet>
      <div className="py-2">
        <Breadcrumbs />
      </div>
      <div>
        <SectionTitle title="Payment History" />
      </div>
      <div className="bg-orange-50 dark:bg-slate-800 p-4 rounded-md">
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">Service Name</th>
                  <th className="p-3 ">Price</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3 ">Email</th>
                  <th className="p-3 ">Transiction Id</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {paymentHistory.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center p-3">
                      No data found
                    </td>
                  </tr>
                )}

                {paymentHistory.map((payment) => (
                  <tr
                    key={payment._id}
                    className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                    <td className="p-3">
                      <p>{payment.service_name}</p>
                    </td>
                    <td className="p-3">
                      {payment.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </td>
                    <td className="p-3">
                      <p>{payment.duration}</p>
                    </td>
                    <td className="p-3">
                      <p>{payment.email}</p>
                    </td>
                    <td className="p-3">
                      <p>{payment.transactionId}</p>
                    </td>
                    <td className="p-3">
                      <button
                        onClick={() => handleDelete(payment._id)}
                        className="text-blue-500 bg-red-500 p-1 rounded">
                        <BiTrash className="w-5 h-5 text-white" size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
