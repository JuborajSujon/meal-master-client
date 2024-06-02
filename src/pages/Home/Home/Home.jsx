import { Helmet } from "react-helmet-async";
import Carousel from "../../../components/Carousel/Carousel";
import MealsCategory from "../../../components/MealsCategory/MealsCategory";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Carousel />
      <MealsCategory />
    </div>
  );
}
