import MakeReview from "../MakeReview/MakeReview";
import ReviewCard from "./ReviewCard";
import PropTypes from "prop-types";

export default function StudentReview({ id, reviews, refetch }) {
  if (reviews.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-300 mb-6">
          No Reviews
        </h3>
        <MakeReview id={id} refetch={refetch} />
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-300 mb-6">
        Student Review ({reviews.length})
      </h3>

      <div className="space-y-2 bg-slate-300 dark:bg-slate-800 p-2 rounded">
        <MakeReview id={id} refetch={refetch} />

        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>
    </div>
  );
}

StudentReview.propTypes = {
  id: PropTypes.string,
  reviews: PropTypes.array,
  refetch: PropTypes.func,
};
