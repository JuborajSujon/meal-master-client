import Lottie from "lottie-react";
import AboutUs from "../../../assets/about-us.json";
import { useRef } from "react";
export default function HomeAboutUs() {
  const animation = useRef(null);
  const style = {
    width: "100%",
    height: "auto",
    maxWidth: "500px",
  };
  return (
    <div>
      <div>
        <div>
          <Lottie
            animationData={AboutUs}
            style={style}
            lottieRef={animation}
            onLoopComplete={() => {
              animation.current.setDirection(1);
            }}
          />
        </div>
      </div>
    </div>
  );
}
