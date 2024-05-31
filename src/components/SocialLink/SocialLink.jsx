import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { LuPhone, LuFacebook } from "react-icons/lu";

export default function SocialLink() {
  return (
    <div className="flex  mt-2">
      <div className="hover:bg-orange-100 p-2 rounded-md cursor-pointer">
        <LuPhone size={24} />
      </div>

      <div className="hover:bg-orange-100 p-2 rounded-md cursor-pointer">
        <LuFacebook size={24} />
      </div>

      <div className="hover:bg-orange-100 p-2 rounded-md cursor-pointer">
        <FaInstagram size={24} />
      </div>

      <div className="hover:bg-orange-100 p-2 rounded-md cursor-pointer">
        <FaXTwitter size={24} />
      </div>
    </div>
  );
}
