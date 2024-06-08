import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useSingleMeal = (id) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: singleMeal = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["singleMeal", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/menu/${id}`);
      return res.data;
    },
  });
  return [singleMeal, isLoading, refetch];
};

export default useSingleMeal;
