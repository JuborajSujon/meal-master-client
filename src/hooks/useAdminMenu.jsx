import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdminMenu = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: adminMenu = [] } = useQuery({
    queryKey: ["adminMenu", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/menu/admin/${user?.email}`);
      return res.data;
    },
  });
  return [adminMenu];
};

export default useAdminMenu;
