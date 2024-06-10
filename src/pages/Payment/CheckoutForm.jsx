import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const CheckoutForm = ({ payment }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { total_price, service_name, _id, benefits, duration } = payment;

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: total_price })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, payment, total_price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      setError("");
    }

    // confirm card payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      toast.error(confirmError.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        toast.success("Payment Successful");

        // update payment status
        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price: total_price,
          service_name: service_name,
          serviceId: _id,
          benefits: benefits,
          duration: duration,
          status: "pending",
          date: new Date(),
        };

        axiosSecure
          .post("/payments", payment)
          .then((res) => {
            if (res.data.insertedId) {
              toast.success("Send Payment info to server Successfull");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="px-6 py-2 mt-6 text-lg font-semibold rounded sm:mt-12 bg-amber-600 hover:bg-orange-400 text-gray-50"
          type="submit"
          disabled={!stripe || !clientSecret}>
          Pay
        </button>
      </form>
      <div className="mt-5">
        {error && <p className="text-red-500">{error}</p>}
        {transactionId && (
          <p className="text-red-500"> Your transaction Id: {transactionId}</p>
        )}
      </div>
    </div>
  );
};

CheckoutForm.propTypes = {
  payment: PropTypes.object,
};

export default CheckoutForm;
