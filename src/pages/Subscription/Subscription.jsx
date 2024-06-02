import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Membership from "../Home/Membership/Membership";

export default function Subscription() {
  return (
    <div className="px-4 py-20">
      <Breadcrumbs />
      <div>
        <Membership />
      </div>
    </div>
  );
}
