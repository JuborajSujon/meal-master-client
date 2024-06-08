import { Helmet } from "react-helmet-async";
import Carousel from "../../../components/Carousel/Carousel";
import Membership from "../Membership/Membership";
import HomeAboutUs from "../HomeAboutUs/HomeAboutUs";
import GiftCard from "../GiftCard/GiftCard";
import TabMealCategory from "../TabMealCategory/TabMealCategory";
import useScrollToTop from "./../../../hooks/useScrollToTop";

export default function Home() {
  //  ensure that the new page starts at the top when navigating
  useScrollToTop();

  return (
    <div className="px-4">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Carousel />
      <TabMealCategory />
      <Membership />
      <HomeAboutUs />
      <GiftCard />
    </div>
  );
}
