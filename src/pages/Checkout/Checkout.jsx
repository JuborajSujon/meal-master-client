import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const Checkout = () => {
  useScrollToTop();
  const axiosSecure = useAxiosSecure();
  const parma = useParams();
  const { id } = parma;
  const { data: checkout = [], isLoading } = useQuery({
    queryKey: ["checkout"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/membership/${id}`);
      return res.data;
    },
  });

  return (
    <div className="py-20">
      <Helmet>
        <title> Checkout</title>
      </Helmet>

      <div>
        <SectionTitle title="Checkout" />
      </div>
      <div className="bg-orange-50 dark:bg-slate-800 p-4 rounded-md">
        <div className="p-2 sm:p-4 text-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <colgroup>
                <col />
                <col className="min-w-96" />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">Package Name</th>
                  <th className="p-3">Description</th>
                  <th className="p-3">Duration</th>
                  <th className="p-3 ">Price</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3 ">Sub-Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                  <td className="p-3">{checkout.service_name}</td>
                  <td className="p-3">
                    {checkout?.benefits?.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </td>
                  <td className="p-3">{checkout.duration}</td>
                  <td className="p-3">{checkout.total_price}</td>
                  <td className="p-3">{checkout.service_name && 1}</td>
                  <td className="">${checkout.total_price}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <button className="px-6 py-2 mt-6 text-lg font-semibold rounded sm:mt-12 bg-amber-600 hover:bg-orange-400 text-gray-50">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
