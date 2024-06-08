import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import UpComingMealCard from "../../components/UpComingMealCard/UpComingMealCard";
import useScrollToTop from "./../../hooks/useScrollToTop";
import useUpcomingMeal from "../../hooks/useUpcomingMeal";
import Loading from "../../components/Loading/Loading";
import useUser from "../../hooks/useUser";

export default function UpComingMeals() {
  //  ensure that the new page starts at the top when navigating
  useScrollToTop();

  // current user data get from db
  const [userData] = useUser();

  // data fetching from db
  const [upcomingMeals, loading, refetch] = useUpcomingMeal();

  if (loading) {
    return <Loading />;
  }

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

      {/* Upcoming Meals Section */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingMeals?.map((upcomingMeal) => (
          <UpComingMealCard
            key={upcomingMeal._id}
            upcomingMeal={upcomingMeal}
            userData={userData}
            refetch={refetch}
          />
        ))}
      </div>
    </div>
  );
}
