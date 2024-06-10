import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaEdit } from "react-icons/fa";
import { BiSolidDetail } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useUser from "../../../../hooks/useUser";
import useReviews from "./../../../../hooks/useReviews";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

function UserReviews() {
  const [reviews, , refetch] = useReviews();
  const axiosSecure = useAxiosSecure();
  const [userData] = useUser();
  const { name, photo, email } = userData;

  const [selectedReview, setSelectedReview] = useState(null); // State to hold selected review
  const [rating, setRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };

  const { data: sortReviews = [], isLoading } = useQuery({
    queryKey: ["sortReviews", currentPage, itemsPerPage, email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/reviews-sort?page=${currentPage}&size=${itemsPerPage}&email=${email}`
      );
      return res.data;
    },
  });

  const handleSubmit = (reviewId) => async (e) => {
    e.preventDefault();
    if (!reviewId) return;

    try {
      const updatedReview = {
        rating: rating,
        review: e.target.textReview.value,
        created_time: reviewId,
      };

      await axiosSecure.put(`/review/${reviewId}`, updatedReview);
      refetch();

      setRating(0);
      setSelectedReview(null); // Close the modal
      setIsModalOpen(false);

      toast.success("Review updated successfully", {
        autoClose: 1500,
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleDeleteReview = async (createdAt) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosSecure.delete(`/review/${createdAt}`);
          refetch();

          toast.success("Review deleted successfully", {
            autoClose: 1500,
          });
        }
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Helmet>
        <title>User Reviews | Dashboard</title>
      </Helmet>
      <div className="py-2">
        <Breadcrumbs />
      </div>
      <div>
        <SectionTitle title="Reviews all Meals" />
      </div>
      <div className="bg-orange-50 dark:bg-slate-800 p-4 rounded-md">
        <div className="container p-2 mx-auto sm:p-4 text-gray-800">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">Meal Name</th>
                  <th className="p-3">
                    <p>Likes</p>
                  </th>
                  <th className="p-3">
                    <p>Reviews</p>
                  </th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {reviews?.map((review, index) => (
                  <tr
                    key={index}
                    className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                    <td className="p-3">
                      <p>{review?.meal_title}</p>
                    </td>
                    <td className="p-3">
                      <p>{review?.likes_count}</p>
                    </td>
                    <td className="p-3">
                      <p>{review?.reviews?.review}</p>
                    </td>
                    <td className="p-3 flex items-center gap-2">
                      <Link to={`/meal-details/${review?._id}`}>
                        <button className="px-3 py-1 rounded-md bg-amber-600 text-gray-50">
                          <BiSolidDetail size={16} />
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          setSelectedReview(review);
                          setRating(review?.reviews?.rating || 0);
                          setIsModalOpen(true);
                        }}
                        className="px-3 py-1 rounded-md bg-green-600 text-gray-50">
                        <FaEdit size={16} />
                      </button>
                      <button
                        onClick={() =>
                          handleDeleteReview(review?.reviews?.created_time)
                        }
                        className="px-3 py-1  rounded-md bg-red-600 text-gray-50">
                        <MdDeleteForever size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isModalOpen && selectedReview && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="modal-box rounded-md w-full md:max-w-2xl">
            <div className="p-4 rounded-md shadow-sm bg-gray-50 dark:bg-slate-800 dark:border w-full">
              <div className="flex items-center gap-2">
                <div className="mt-2">
                  <img
                    src={photo}
                    alt={name}
                    className="object-cover w-12 h-12 rounded-full bg-gray-500"
                  />
                </div>
                <h4 className="text-base font-bold">{name}</h4>
              </div>
              <form
                onSubmit={handleSubmit(selectedReview.reviews.created_time)}>
                <fieldset className="flex gap-4 items-start space-y-2">
                  <div className="w-full flex-1 space-y-2">
                    <div className="mb-3">
                      <h4 className="mt-5 mb-3">Your Rating</h4>
                      <Rating
                        style={{ maxWidth: 160 }}
                        value={rating}
                        onChange={setRating}
                        itemStyles={myStyles}
                      />
                    </div>
                    <div>
                      <textarea
                        name="textReview"
                        defaultValue={selectedReview?.reviews?.review}
                        id="review"
                        placeholder="Your Review"
                        rows="6"
                        className="w-full rounded-md focus:ring focus:ring-opacity-75 p-2 pl-4 focus:ring-amber-600 border-gray-300"></textarea>
                    </div>
                    <div className="col-span-full">
                      <button
                        type="submit"
                        className="px-4 py-2 border rounded-md border-gray-800 dark:border-slate-300 dark:text-orange-400">
                        Update Review
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setSelectedReview(null);
                }}
                className=" mt-4 px-4 py-2 border rounded-md border-gray-800 dark:border-slate-300 dark:text-orange-400">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserReviews;
