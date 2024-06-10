import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loading />;
  }

  if (!user || !isAdmin) {
    return <Navigate to="/login" state={{ from: location }}></Navigate>;
  }

  return <div>{children}</div>;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
