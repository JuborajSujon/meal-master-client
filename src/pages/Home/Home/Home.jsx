import { Helmet } from "react-helmet-async";
import Carousel from "../../../components/Carousel/Carousel";
import Membership from "../Membership/Membership";
import MealsCategory from "../MealsCategory/MealsCategory";
import { useEffect } from "react";

export default function Home() {
  //  ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-4">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Carousel />
      <MealsCategory />
      <Membership />
    </div>
  );
}
