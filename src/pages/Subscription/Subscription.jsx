import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Membership from "../Home/Membership/Membership";

export default function Subscription() {
  return (
    <div className="px-4 py-20">
      <Helmet>
        <title>Subscription</title>
      </Helmet>
      <Breadcrumbs />
      <div>
        <Membership />
      </div>
    </div>
  );
}
