import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Membership from "../Home/Membership/Membership";
import { useEffect } from "react";

export default function Subscription() {
  //  ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
