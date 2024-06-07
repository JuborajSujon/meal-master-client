import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUpcomingMeal = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: upcomingMeals = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["upcomingMeals"],
    queryFn: async () => {
      const res = await axiosSecure.get("/upcoming-meals");
      return res.data;
    },
  });
  return [upcomingMeals, loading, refetch];
};

export default useUpcomingMeal;
