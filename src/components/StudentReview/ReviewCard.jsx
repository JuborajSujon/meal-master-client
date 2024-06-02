import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";
const ReviewCard = () => {
  const [rating, setRating] = useState(4);
  return (
    <div className="flex bg-slate-50 flex-col w-full mx-auto rounded-md  text-gray-800">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="object-cover w-12 h-12 rounded-full bg-gray-500"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold">Leroy Jenkins</h4>
              <span>
                <li className="list-disc"></li>
              </span>
              <span className="text-xs text-gray-600 -ml-4">2 days ago</span>
            </div>
            <div>
              <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                onChange={setRating}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2 text-sm text-gray-600">
        <p>
          Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum
          lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
