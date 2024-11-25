import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { LuBadgeCheck } from "react-icons/lu";
import useMemberShip from "../../../hooks/useMemberShip";
import Loading from "../../../components/Loading/Loading";
import { Link } from "react-router-dom";

export default function Membership() {
  const [membership, loading] = useMemberShip();

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="py-10">
      <div className="flex justify-between items-center p-4">
        <SectionTitle title="Membership" subTitle="Become a Member" />
      </div>

      <section className=" bg-gray-100 dark:bg-slate-800 rounded text-gray-800">
        <div className="container p-4 mx-auto sm:p-10">
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:grid-cols-3 lg:max-w-full">
            {membership?.map((plan) => {
              return (
                <div
                  key={plan._id}
                  className="flex flex-col overflow-hidden border-2 rounded-md border-gray-300 hover:border-amber-600 bg-slate-50">
                  <div
                    className={`${plan.bg_color} flex flex-col items-center justify-center px-2 py-8 space-y-0 sm:space-y-4`}>
                    <p className="text-lg sm:text-2xl font-medium">
                      {plan.service_name} Plan
                    </p>
                    <p className="text-2xl sm:text-5xl font-bold">
                      {plan.total_price}$
                      <span className="text-base sm:text-xl text-gray-600 ">
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
                          <LuBadgeCheck size={22} className="text-amber-900 " />
                          <span className="text-sm sm:text-base">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Link to={`/checkout/${plan._id}`}>
                      <button className="px-6 mt-6 backdrop:mt-6 text-lg h-8 min-h-8 sm:h-10 sm:min-h-10 font-semibold rounded sm:mt-12 bg-amber-600 hover:bg-orange-400 text-gray-50">
                        Subscribe
                      </button>
                    </Link>
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
