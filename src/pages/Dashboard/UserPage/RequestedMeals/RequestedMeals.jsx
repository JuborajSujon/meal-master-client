import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useCart from "../../../../hooks/useCart";
import Loading from "../../../../components/Loading/Loading";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

function RequestedMeals() {
  const [carts, isLoading, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const handleDeleteCart = async (id, refetch) => {
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
          const res = await axiosSecure.delete(`/carts/${id}`);

          if (res.data.deletedCount > 0) {
            toast.success("Meal deleted successfully from cart", {
              autoClose: 1500,
            });
            refetch();
          }
        }
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Requested Meals | Dashboard</title>
      </Helmet>
      <div className="py-2">
        <Breadcrumbs />
      </div>
      <div>
        <SectionTitle title="Requested Meals" />
      </div>

      {isLoading && <Loading />}

      {/* table */}
      <div className="bg-orange-50 dark:bg-slate-800 p-4 rounded-md">
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">Meal Name</th>
                  <th className="p-3">
                    <p>Likes</p>
                  </th>
                  <th className="p-3">
                    <p>Reviews</p>
                  </th>
                  <th className="p-3">Status</th>
                  <th className="p-3 ">Action</th>
                </tr>
              </thead>
              <tbody>
                {carts?.map((cart) => (
                  <tr
                    key={cart._id}
                    className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                    <td className="p-3">
                      <p>{cart?.menu?.meal_title}</p>
                    </td>
                    <td className="p-3">
                      <p>{cart?.menu?.likes_count || 0}</p>
                    </td>
                    <td className="p-3">
                      <p>{cart?.menu?.reviews_count || 0}</p>
                    </td>
                    <td className="p-3">
                      <p>{cart?.req_status}</p>
                    </td>

                    <td className="p-3 flex items-center gap-2">
                      <button
                        onClick={() => handleDeleteCart(cart._id, refetch)}
                        data-tip="Cancel Order"
                        className="px-3 py-1 tooltip rounded-md bg-red-600 text-gray-50">
                        Cancel Order
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

export default RequestedMeals;
