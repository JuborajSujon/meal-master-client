import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
const MakeReview = () => {
  const [rating, setRating] = useState(4);
  return (
    <div>
      <form>
        <fieldset className="flex gap-4 items-start p-4 rounded-md shadow-sm bg-gray-50 dark:bg-slate-800 dark:border space-y-2">
          <div className="mt-2">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt=""
              className="object-cover w-12 h-12 rounded-full bg-gray-500"
            />
          </div>

          <div className="w-full flex-1 space-y-2">
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold">Leroy Jenkins</h4>
              </div>
              <div>
                <Rating
                  style={{ maxWidth: 130 }}
                  value={rating}
                  onChange={setRating}
                />
              </div>
            </div>

            <div>
              <textarea
                id="review"
                placeholder="Your Review"
                rows="2"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 pl-4 focus:ring-amber-600 border-gray-300"></textarea>
            </div>
            <div className="col-span-full">
              <button
                type="button"
                className="px-4 py-2 border rounded-md border-gray-800 dark:border-slate-300 dark:text-orange-400">
                Make An Review
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default MakeReview;
