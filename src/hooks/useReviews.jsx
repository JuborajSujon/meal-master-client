import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useReviews = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    data: reviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reviews", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/reviews?email=${user?.email}`);
      return res.data;
    },
  });

  return [reviews, isLoading, refetch];
};

export default useReviews;
