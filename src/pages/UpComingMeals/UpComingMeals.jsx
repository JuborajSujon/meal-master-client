import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import UpComingMealCard from "../../components/UpComingMealCard/UpComingMealCard";

export default function UpComingMeals() {
  return (
    <div className="py-20 px-4">
      <Helmet>
        <title>Upcoming Meals</title>
      </Helmet>

      <div className="pb-6">
        <Breadcrumbs />
      </div>

      <div className="pb-10">
        <SectionTitle
          title="Upcoming Meals"
          subTitle="Explore Our Upcoming Specials"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <UpComingMealCard />
        <UpComingMealCard />
        <UpComingMealCard />
        <UpComingMealCard />
        <UpComingMealCard />
      </div>
    </div>
  );
}
