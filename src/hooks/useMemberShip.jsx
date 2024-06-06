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
      const { data } = await axiosPublic.get("/membership");
      return data;
    },
  });

  return [membership, loading, refetch];
};

export default useMemberShip;
