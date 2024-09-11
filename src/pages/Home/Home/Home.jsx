import { Helmet } from "react-helmet-async";
import Carousel from "../../../components/Carousel/Carousel";
import Membership from "../Membership/Membership";
import HomeAboutUs from "../HomeAboutUs/HomeAboutUs";
import GiftCard from "../GiftCard/GiftCard";
import TabMealCategory from "../TabMealCategory/TabMealCategory";
import useScrollToTop from "./../../../hooks/useScrollToTop";
import MealsCategory from "../MealsCategory/MealsCategory";
import Contact from "../../../components/Contact/Contact";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { messaging } from "../../../firebase/firebase.confi";
import { getToken, onMessage } from "firebase/messaging";

export default function Home() {
  //  ensure that the new page starts at the top when navigating
  useScrollToTop();

  async function requestPermission() {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_VAPID_KEY,
      });
    } else if (permission === "denied") {
      // Handle Notification
      toast.error("You denied for the notification permission", {
        autoClose: 1500,
      });
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
    onMessage(messaging, (payload) => {
      // toast(payload.notification.title);
      toast(payload.notification.body);
    });
  }, []);

  return (
    <div className="px-4">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Carousel />
      <TabMealCategory />
      <Membership />
      <MealsCategory />
      <HomeAboutUs />
      <GiftCard />
      <Contact />
    </div>
  );
}
