import MakeReview from "../MakeReview/MakeReview";
import ReviewCard from "./ReviewCard";

export default function StudentReview() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-300 mb-6">
        Student Review (1000)
      </h3>

      <div className="space-y-2 bg-slate-300 dark:bg-slate-800 p-2 rounded">
        <MakeReview />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
