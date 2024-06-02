import { useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
export default function StudentRatings() {
  const [rating, setRating] = useState(3);
  const [rating1, setRating1] = useState(1);
  const [rating2, setRating2] = useState(2);
  const [rating3, setRating3] = useState(3);
  const [rating4, setRating4] = useState(4);
  const [rating5, setRating5] = useState(5);
  return (
    <div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-300 mb-6">
        Student Ratings
      </h3>

      <div className="flex flex-col lg:flex-row lg:items-center gap-10">
        <div className="bg-orange-200 px-20 py-10 rounded-md flex flex-col gap-2 items-center">
          <h3 className="text-6xl marker:font-bold text-slate-900 ">4.7</h3>
          <Rating
            style={{ maxWidth: 180 }}
            value={rating}
            onChange={setRating}
          />
          <p className="text-slate-900 text-xl">
            Student Ratings
            <span className="text-orange-400 ml-2">(1,000)</span>
          </p>
        </div>

        <div className="flex-1 space-y-4">
          {/* rating 5 */}
          <div className="flex flex-col md:flex-row md:items-center  gap-3">
            <Rating
              style={{ maxWidth: 120 }}
              value={rating5}
              onChange={setRating}
            />
            <progress
              className="progress progress-warning max-w-lg lg:max-w-sm xl:max-w-lg  w-full"
              value={60}
              max="100"></progress>
            <p className="text-slate-900 dark:text-slate-300 text-nowrap">
              60% (1,200)
            </p>
          </div>
          {/* rating 4 */}
          <div className="flex flex-col md:flex-row md:items-center  gap-3">
            <Rating
              style={{ maxWidth: 120 }}
              value={rating4}
              onChange={setRating}
            />
            <progress
              className="progress progress-warning max-w-lg lg:max-w-sm xl:max-w-lg  w-full"
              value={20}
              max="100"></progress>
            <p className="text-slate-900 dark:text-slate-300 text-nowrap">
              20% (4,00)
            </p>
          </div>
          {/* rating 3 */}
          <div className="flex flex-col md:flex-row md:items-center  gap-3">
            <Rating
              style={{ maxWidth: 120 }}
              value={rating3}
              onChange={setRating}
            />
            <progress
              className="progress progress-warning max-w-lg lg:max-w-sm xl:max-w-lg w-full"
              value={10}
              max="100"></progress>
            <p className="text-slate-900 dark:text-slate-300 text-nowrap">
              10% (200)
            </p>
          </div>
          {/* rating 2 */}
          <div className="flex flex-col md:flex-row md:items-center  gap-3">
            <Rating
              style={{ maxWidth: 120 }}
              value={rating2}
              onChange={setRating}
            />
            <progress
              className="progress progress-warning max-w-lg lg:max-w-sm xl:max-w-lg w-full"
              value={10}
              max="100"></progress>
            <p className="text-slate-900 dark:text-slate-300 text-nowrap">
              10% (300)
            </p>
          </div>
          {/* rating 1 */}
          <div className="flex flex-col md:flex-row md:items-center  gap-3">
            <Rating
              style={{ maxWidth: 120 }}
              value={rating1}
              onChange={setRating}
            />
            <progress
              className="progress progress-warning max-w-lg lg:max-w-sm xl:max-w-lg w-full"
              value={0}
              max="100"></progress>
            <p className="text-slate-900 dark:text-slate-300 text-nowrap">
              0% (0)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
