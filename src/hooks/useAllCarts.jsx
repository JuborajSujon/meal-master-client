import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllCarts = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allCarts = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allCarts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-carts");
      return res.data;
    },
  });
  return [allCarts, isLoading, refetch];
};

export default useAllCarts;
