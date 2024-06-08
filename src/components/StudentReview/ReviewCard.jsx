import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";
import "@smastrom/react-rating/style.css";
import moment from "moment";
const ReviewCard = ({ review }) => {
  const { name, email, photo, review: comment, rating, created_time } = review;
  return (
    <div className="flex bg-slate-50 dark:bg-slate-800 flex-col w-full mx-auto rounded-md  text-gray-800 dark:border">
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <div>
            <img
              src={photo}
              alt={email}
              className="object-cover w-12 h-12 rounded-full bg-gray-500"
            />
          </div>
          <div className="dark:text-slate-300">
            <div className="flex items-center gap-2">
              <h4 className="font-bold ">{name}</h4>
              <span>
                <li className="list-disc"></li>
              </span>
              <span className="text-xs dark:text-slate-300 text-gray-600 -ml-4">
                {moment(created_time).fromNow()}
              </span>
            </div>
            <div>
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 pb-4 text-sm dark:text-slate-300 text-gray-600">
        <p>{comment}</p>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.object,
};

export default ReviewCard;
