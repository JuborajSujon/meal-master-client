import ReviewCard from "./ReviewCard";

export default function StudentReview() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-300 mb-6">
        Student Review
      </h3>

      <div className="space-y-2 bg-slate-300 p-2 rounded">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
