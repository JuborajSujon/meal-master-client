import Lottie from "lottie-react";
import AboutUs from "../../../assets/aboutus.json";
import FastFood from "../../../assets/fastFood.json";
import FastDelivery from "../../../assets/fastDelivery.json";
import HealthyFood from "../../../assets/healthyFood.json";
import { useRef } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
export default function HomeAboutUs() {
  const animation = useRef(null);
  const fastFoodRef = useRef(null);
  const fastDeliveryRef = useRef(null);
  const healthyFoodRef = useRef(null);
  const style = {
    width: "100%",
    height: "auto",
    maxWidth: "800px",
  };
  const style2 = {
    width: "100%",
    height: "auto",
    maxWidth: "100px",
  };
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div>
          <Lottie
            animationData={AboutUs}
            style={style}
            lottieRef={animation}
            onLoopComplete={() => {
              animation.current.setDirection(1);
            }}
          />
        </div>
        <div className="col-span-2">
          <SectionTitle
            title="About Us"
            subTitle="Where quality food meet satisfaction"
          />

          <p className="text-sm sm:text-lg text-slate-800 dark:text-slate-300 font-semibold px-4 mt-6">
            It’s the perfect dining experience where every dish is crafted with
            fresh, high-quality ingredients and served by friendly staff who go.
          </p>

          <div className="flex flex-wrap justify-around gap-4 py-16">
            <div className="card w-56 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-300 shadow-xl dark:shadow-gray-700">
              <div className="card-body ">
                <Lottie
                  animationData={FastFood}
                  style={style2}
                  lottieRef={fastFoodRef}
                  onLoopComplete={() => {
                    animation.current.setDirection(1);
                  }}
                />
                <h2 className="card-title mt-10">Fast Food</h2>
                <p className="text-sm sm:text-base">
                  Quick, delicious fast food for satisfying meals.
                </p>
              </div>
            </div>
            <div className="card w-56 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-300 shadow-xl dark:shadow-gray-700">
              <div className="card-body">
                <Lottie
                  animationData={HealthyFood}
                  style={style2}
                  lottieRef={healthyFoodRef}
                  onLoopComplete={() => {
                    animation.current.setDirection(1);
                  }}
                />
                <h2 className="card-title">Healthy Food</h2>
                <p className="text-sm sm:text-base">
                  Lightning-fast delivery to your doorstep.
                </p>
              </div>
            </div>
            <div className="card w-56 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-300 shadow-xl dark:shadow-gray-700">
              <div className="card-body">
                <Lottie
                  animationData={FastDelivery}
                  style={style2}
                  lottieRef={fastDeliveryRef}
                  onLoopComplete={() => {
                    animation.current.setDirection(1);
                  }}
                />
                <h2 className="card-title">Fast Delivery</h2>
                <p className="text-sm sm:text-base">
                  Nutritious, tasty meals promoting a healthy lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
