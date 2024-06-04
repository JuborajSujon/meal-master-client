import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMemberShip = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: membership = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["membership"],
    queryFn: async () => {
      const res = await axiosPublic.get("/membership");
      return res.data[0];
    },
  });

  return [membership, loading, refetch];
};

export default useMemberShip;
