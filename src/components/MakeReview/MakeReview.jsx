import { Rating, RoundedStar } from "@smastrom/react-rating";
import { useState } from "react";
import useUser from "../../hooks/useUser";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Loading from "../Loading/Loading";
const MakeReview = ({ id, refetch }) => {
  const [rating, setRating] = useState(0);
  const [userData, isLoading] = useUser();
  const { _id, name, email, photo } = userData;
  const axiosPublic = useAxiosPublic();

  const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const review = {
        user_id: _id,
        name: name,
        email: email,
        photo: photo,
        rating: rating,
        review: data.review,
        created_time: new Date().toISOString(),
      };
      const { data: reviewData } = await axiosPublic.post(
        `/review/${id}`,
        review
      );
      if (reviewData.acknowledged) {
        setRating(0);
        reset();
        refetch();
        toast.success("Review added successfully", {
          autoClose: 1500,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-4 rounded-md shadow-sm bg-gray-50 dark:bg-slate-800 dark:border w-full">
      <div className="flex items-center gap-2">
        <div className="mt-2">
          <img
            src={photo}
            alt={name}
            className="object-cover w-12 h-12 rounded-full bg-gray-500"
          />
        </div>

        <h4 className="font-bold">{name}</h4>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="flex gap-4 items-start  space-y-2">
          <div className="w-full flex-1 space-y-2">
            <div className="mb-3">
              <h4 className="mt-5 mb-3">Your Rating</h4>

              <div>
                <Rating
                  style={{ maxWidth: 160 }}
                  value={rating}
                  onChange={setRating}
                  itemStyles={myStyles}
                />
              </div>
            </div>

            <div>
              <textarea
                {...register("review", { required: true })}
                id="review"
                placeholder="Your Review"
                rows="2"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 pl-4 focus:ring-amber-600 border-gray-300"></textarea>

              {errors.review && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="col-span-full">
              <button
                type="submit"
                className="px-4 py-2 border rounded-md border-gray-800 dark:border-slate-300 dark:text-orange-400">
                Make A Review
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

MakeReview.propTypes = {
  id: PropTypes.string,
};

export default MakeReview;
