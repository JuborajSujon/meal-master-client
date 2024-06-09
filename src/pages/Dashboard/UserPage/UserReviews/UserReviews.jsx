import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaEdit } from "react-icons/fa";
import { BiSolidDetail } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import useReviews from "../../../../hooks/useReviews";
import { Link } from "react-router-dom";

function UserReviews() {
  const [reviews, isLoading, refetch] = useReviews();

  // handle edit
  const handleUpdateReview = (createdAt, refetch) => {
    console.log(createdAt);
  };

  // handle delete
  const handleDeleteReview = (createdAt, refetch) => {
    console.log(createdAt);
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
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col />
              </colgroup>
              <thead className="bg-gray-300">
                <tr className="text-left">
                  <th className="p-3">Meal Name</th>
                  <th className="p-3 ">
                    <p>Likes</p>
                  </th>
                  <th className="p-3">
                    <p>Reviews</p>
                  </th>
                  <th className="p-3 ">Action</th>
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
                        <button
                          data-tip="Meal View"
                          className="px-3 py-1 tooltip rounded-md bg-amber-600 text-gray-50">
                          <BiSolidDetail size={16} />
                        </button>
                      </Link>
                      <button
                        onClick={() =>
                          handleUpdateReview(
                            review?.reviews?.created_time,
                            refetch
                          )
                        }
                        data-tip="Update Review"
                        className="px-3 py-1 tooltip rounded-md bg-green-600 text-gray-50">
                        <FaEdit size={16} />
                      </button>
                      <button
                        onClick={() =>
                          handleDeleteReview(
                            review?.reviews?.created_time,
                            refetch
                          )
                        }
                        data-tip="Delete"
                        className="px-3 py-1 tooltip rounded-md bg-red-600 text-gray-50">
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

export default UserReviews;
