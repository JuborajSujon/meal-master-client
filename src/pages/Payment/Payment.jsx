import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK);

const Payment = () => {
  const param = useParams();
  const { id } = param;
  const { data: payment = {} } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/membership/${id}`);
      return res.data;
    },
  });

  return (
    <div className="py-20">
      <Helmet>
        <title>Checkout</title>
      </Helmet>

      <div>
        <SectionTitle title="Payment" />
      </div>
      <div className="bg-orange-50 dark:bg-slate-800 p-4 rounded-md">
        <div className="p-2 sm:p-4 text-gray-800">
          <div className="overflow-x-auto">
            <div>
              <Elements stripe={stripePromise}>
                <CheckoutForm payment={payment} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
