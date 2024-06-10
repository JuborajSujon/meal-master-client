import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useSigleUpcomingMeal = (id) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: singleUpcomingMeal = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["singleUpcomingMeal", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/upcoming-meal/${id}`);
      return res.data;
    },
  });
  return [singleUpcomingMeal, isLoading, refetch];
};

export default useSigleUpcomingMeal;
