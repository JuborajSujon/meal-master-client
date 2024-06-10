import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { BiSolidDetail } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAllReviews from "../../../../hooks/useAllReviews";
import Loading from "../../../../components/Loading/Loading";
import Swal from "sweetalert2";

function AllReviews() {
  const [AllReviews, isLoading, refetch] = useAllReviews();
  const axiosSecure = useAxiosSecure();

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

  if (isLoading) {
    return <Loading />;
  }

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
                  <th className="p-3">Reviews</th>
                  <th className="p-3">Meal Name</th>
                  <th className="p-3">Likes</th>
                  <th className="p-3">Review count</th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {AllReviews?.map((review, index) => (
                  <tr
                    key={index}
                    className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                    <td className="p-3">
                      <p>{review?.reviews?.review}</p>
                    </td>
                    <td className="p-3">
                      <p>{review?.meal_title}</p>
                    </td>
                    <td className="p-3">
                      <p>{review?.likes_count}</p>
                    </td>
                    <td className="p-3">
                      <p>{review?.rating?.reviewCount}</p>
                    </td>
                    <td className="p-3 flex justify-center items-center gap-2">
                      <Link to={`/meal-details/${review?._id}`}>
                        <button className="px-3 py-1 rounded-md bg-amber-600 text-gray-50">
                          <BiSolidDetail size={16} />
                        </button>
                      </Link>

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
    </div>
  );
}

export default AllReviews;
