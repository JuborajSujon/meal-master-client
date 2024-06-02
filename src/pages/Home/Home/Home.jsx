import { Helmet } from "react-helmet-async";
import Carousel from "../../../components/Carousel/Carousel";
import Membership from "../Membership/Membership";
import MealsCategory from "../MealsCategory/MealsCategory";

export default function Home() {
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
