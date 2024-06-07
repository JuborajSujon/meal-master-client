import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

export default function useUser() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: userData = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userData", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/${user?.email}`);
      return data;
    },
  });

  return [userData, isLoading, refetch];
}
