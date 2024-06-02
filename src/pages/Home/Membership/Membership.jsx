import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { LuBadgeCheck } from "react-icons/lu";

export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [membership, setMembership] = useState({});

  // Data fetching from api
  useEffect(() => {
    fetch("membership.json")
      .then((res) => res.json())
      .then((data) => {
        setMembership(data);
      });
  }, []);

  return (
    <div className="py-10">
      <div className="flex justify-between items-center p-4">
        <SectionTitle title="Membership" subTitle="Become a Member" />
      </div>

      <section className=" bg-gray-100 dark:bg-slate-800 rounded text-gray-800">
        <div className="container p-4 mx-auto sm:p-10">
          <div className="mb-12 space-y-4 text-center">
            <div>
              <button
                onClick={() => setSelectedPlan("monthly")}
                className="px-4 py-1 font-semibold border rounded-l-lg bg-amber-600 border-amber-600 text-gray-50">
                Monthly
              </button>
              <button
                onClick={() => setSelectedPlan("yearly")}
                className="px-4 py-1 border rounded-r-lg border-amber-600 dark:text-slate-300">
                Annually
              </button>
            </div>
          </div>
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
            {membership[selectedPlan]?.map((plan) => {
              return (
                <div
                  key={plan.service_name}
                  className="flex flex-col overflow-hidden border-2 rounded-md border-gray-300 hover:border-amber-600">
                  <div
                    className={`flex flex-col items-center justify-center px-2 py-8 space-y-4 ${plan?.bg_color} dark:${plan?.bg_color}`}>
                    <p className="text-2xl  font-medium">
                      {plan.service_name} Plan
                    </p>
                    <p className="text-5xl font-bold">
                      {plan.total_price}$
                      <span className="text-xl text-gray-600 ">
                        /
                        {plan.duration.toLowerCase() === "monthly"
                          ? "mo"
                          : "yr"}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-center justify-center px-2 py-8 bg-gray-50">
                    <ul className="self-stretch flex-1 space-y-2 flex flex-col items-start pl-4">
                      {plan.benefits.map((benefit, index) => (
                        <li
                          key={index}
                          className="flex justify-center space-x-2">
                          <LuBadgeCheck size={22} className="text-amber-900" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="px-8 py-3 mt-6 text-lg font-semibold rounded sm:mt-12 bg-amber-600 hover:bg-orange-400 text-gray-50">
                      Subscribe
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
