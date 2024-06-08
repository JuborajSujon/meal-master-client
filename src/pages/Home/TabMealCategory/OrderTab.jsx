import PropTypes from "prop-types";
import MealCard from "./../../../components/MealCard/MealCard";

export default function OrderTab({ menuItems }) {
  // handle infinite scroll

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-screen-xl justify-center mx-auto">
        {menuItems?.map((item) => (
          <MealCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

OrderTab.propTypes = {
  menuItems: PropTypes.array,
};
