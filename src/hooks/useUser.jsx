import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

export default function useUser() {
  const axiosSecure = useAxiosSecure;
  const { user } = useAuth();
  console.log(user?.email);

  const {
    data: useData = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["useData", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/${user?.email}`);
      console.log(data);
      return data;
    },
  });

  console.log(useData);

  return [useData, isLoading, refetch];
}
