import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

export default function useUser() {
  const axiosPublic = useAxiosPublic();
  const { user, loading } = useAuth();

  const {
    data: useData = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["useData"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/user/${user?.email}`);
      return data;
    },
  });

  return [useData, loading, refetch];
}
