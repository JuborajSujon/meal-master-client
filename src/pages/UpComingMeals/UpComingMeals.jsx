import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import UpComingMealCard from "../../components/UpComingMealCard/UpComingMealCard";
import useScrollToTop from "./../../hooks/useScrollToTop";
import useUpcomingMeal from "../../hooks/useUpcomingMeal";
import Loading from "../../components/Loading/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import { useCallback, useState } from "react";
import useUser from "../../hooks/useUser";

export default function UpComingMeals() {
  //  ensure that the new page starts at the top when navigating
  useScrollToTop();

  const [items, setItems] = useState(Array.from({ length: 6 }));
  const [hasMore, setHasMore] = useState(true);

  // current user data get from db
  const [userData] = useUser();

  // data fetching from db
  const [upcomingMeals, loading] = useUpcomingMeal();
  const renderUpcomingMealCard = useCallback(
    (upcomingMeals) => {
      return (
        <UpComingMealCard
          key={upcomingMeals._id}
          upcomingMeal={upcomingMeals}
          userData={userData}
        />
      );
    },
    [userData]
  );

  // handle infinite scroll
  const fetchMoreData = () => {
    if (items.length >= upcomingMeals.length) {
      setHasMore(false);
      return;
    }
    const time = setTimeout(() => {
      setItems((prevItems) => prevItems.concat(Array.from({ length: 6 })));
      clearTimeout(time);
    }, 1000);
  };

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

      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="flex justify-center py-5">
            <span className="loading loading-bars w-20"></span>
          </div>
        }
        endMessage={
          <p
            style={{
              textAlign: "center",
              marginTop: "40px",
              color: "blue",
              fontSize: "20px",
            }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingMeals?.map(renderUpcomingMealCard)}
        </div>
      </InfiniteScroll>
    </div>
  );
}
