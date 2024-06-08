import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";

import "@smastrom/react-rating/style.css";
export default function StudentRatings({ mealRating, ratingCount }) {
  const { reviewCount } = mealRating;

  return (
    <div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-300 mb-6">
        Student Ratings
      </h3>

      <div className="flex flex-col lg:flex-row lg:items-center gap-10">
        <div className="bg-orange-200 px-20 py-10 rounded-md flex flex-col gap-2 items-center">
          <h3 className="text-6xl marker:font-bold text-slate-900 ">
            {mealRating.averageRating}
          </h3>
          <Rating
            style={{ maxWidth: 180 }}
            value={mealRating.averageRating || 0}
            readOnly
          />
          <p className="text-slate-900 text-xl">
            Student Ratings
            <span className="text-orange-400 ml-2">
              ({mealRating.reviewCount || 0})
            </span>
          </p>
        </div>

        <div className="flex-1 space-y-4">
          {/* rating 5 */}
          <div className="flex flex-col md:flex-row md:items-center  gap-3">
            <Rating style={{ maxWidth: 120 }} value={5} readOnly />
            <progress
              className="progress progress-warning max-w-lg lg:max-w-sm xl:max-w-lg  w-full"
              value={((ratingCount[5] * 100) / reviewCount).toFixed(0)}
              max="100"></progress>
            <p className="text-slate-900 dark:text-slate-300 text-nowrap">
              {isNaN(((ratingCount[5] * 100) / reviewCount).toFixed(0))
                ? 0
                : ((ratingCount[5] * 100) / reviewCount).toFixed(0)}
              % ({ratingCount[5] || 0})
            </p>
          </div>
          {/* rating 4 */}
          <div className="flex flex-col md:flex-row md:items-center  gap-3">
            <Rating style={{ maxWidth: 120 }} value={4} readOnly />
            <progress
              className="progress progress-warning max-w-lg lg:max-w-sm xl:max-w-lg  w-full"
              value={((ratingCount[4] * 100) / reviewCount).toFixed(0)}
              max="100"></progress>
            <p className="text-slate-900 dark:text-slate-300 text-nowrap">
              {isNaN(((ratingCount[4] * 100) / reviewCount).toFixed(0))
                ? 0
                : ((ratingCount[4] * 100) / reviewCount).toFixed(0)}
              % ({ratingCount[4] || 0})
            </p>
          </div>
          {/* rating 3 */}
          <div className="flex flex-col md:flex-row md:items-center  gap-3">
            <Rating style={{ maxWidth: 120 }} value={3} readOnly />
            <progress
              className="progress progress-warning max-w-lg lg:max-w-sm xl:max-w-lg w-full"
              value={((ratingCount[3] * 100) / reviewCount).toFixed(0)}
              max="100"></progress>
            <p className="text-slate-900 dark:text-slate-300 text-nowrap">
              {isNaN(((ratingCount[3] * 100) / reviewCount).toFixed(0))
                ? 0
                : ((ratingCount[3] * 100) / reviewCount).toFixed(0)}
              % ({ratingCount[3] || 0})
            </p>
          </div>
          {/* rating 2 */}
          <div className="flex flex-col md:flex-row md:items-center  gap-3">
            <Rating style={{ maxWidth: 120 }} value={2} readOnly />
            <progress
              className="progress progress-warning max-w-lg lg:max-w-sm xl:max-w-lg w-full"
              value={((ratingCount[2] * 100) / reviewCount).toFixed(0) || 0}
              max="100"></progress>
            <p className="text-slate-900 dark:text-slate-300 text-nowrap">
              {isNaN(((ratingCount[2] * 100) / reviewCount).toFixed(0))
                ? 0
                : ((ratingCount[2] * 100) / reviewCount).toFixed(0)}
              % ({ratingCount[2] || 0})
            </p>
          </div>
          {/* rating 1 */}
          <div className="flex flex-col md:flex-row md:items-center  gap-3">
            <Rating style={{ maxWidth: 120 }} value={1} readOnly />
            <progress
              className="progress progress-warning max-w-lg lg:max-w-sm xl:max-w-lg w-full"
              value={((ratingCount[2] * 100) / reviewCount).toFixed(0)}
              max="100"></progress>
            <p className="text-slate-900 dark:text-slate-300 text-nowrap">
              {isNaN(((ratingCount[1] * 100) / reviewCount).toFixed(0))
                ? 0
                : ((ratingCount[1] * 100) / reviewCount).toFixed(0)}
              % ({ratingCount[1] || 0})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

StudentRatings.propTypes = {
  mealRating: PropTypes.object,
  ratingCount: PropTypes.object,
};
