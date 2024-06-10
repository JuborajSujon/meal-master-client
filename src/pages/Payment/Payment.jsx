import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const Payment = () => {
  return (
    <div className="py-20">
      <Helmet>
        <title>Checkout</title>
      </Helmet>

      <div>
        <SectionTitle title="Checkout" />
      </div>
      <div className="bg-orange-50 dark:bg-slate-800 p-4 rounded-md">
        <div className="p-2 sm:p-4 text-gray-800">
          <div className="overflow-x-auto"></div>
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

export default Payment;
