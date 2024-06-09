import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAllReviews = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: AllReviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["AllReviews"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-reviews");
      return res.data;
    },
  });
  return [AllReviews, isLoading, refetch];
};

export default useAllReviews;
