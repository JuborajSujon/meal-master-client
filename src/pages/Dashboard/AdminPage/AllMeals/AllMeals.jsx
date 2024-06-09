import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaEdit } from "react-icons/fa";
import { BiSolidDetail } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import useMenu from "../../../../hooks/useMenu";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { imageUpload } from "../../../../api";
import Loading from "../../../../components/Loading/Loading";

const AllMeals = () => {
  const [menu, loading, refetch] = useMenu();
  const [spinning, setSpinning] = useState(false);

  const axiosSecure = useAxiosSecure();

  const [selectedMeal, setSelectedMeal] = useState(null); // State to hold selected review
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleSubmit = (mealId) => async (e) => {
    e.preventDefault();
    if (!mealId) return;
    const from = e.target;
    const meal_title = from.meal_title.value;
    const price = from.price.value;
    const serve_amount = from.serve_amount.value;
    const distributor_name = from.distributor_name.value;
    const prep_time = from.prep_time.value;
    const cooking_time = from.cooking_time.value;
    const total_time = from.total_time.value;
    const meal_subcategory = from.meal_subcategory.value;
    const photo = from.photo.files[0];
    const meal_category = from.meal_category.value;
    const post_status = from.post_status.value;
    const meal_ing_item1 = from.meal_ing_item1.value;
    const meal_ing_item2 = from.meal_ing_item2.value;
    const meal_ing_item3 = from.meal_ing_item3.value;
    const meal_ing_item4 = from.meal_ing_item4.value;
    const meal_ing_item5 = from.meal_ing_item5.value;
    const meal_ing_item6 = from.meal_ing_item6.value;
    const meal_ing_item7 = from.meal_ing_item7.value;
    const meal_ing_item8 = from.meal_ing_item8.value;
    const meal_ing_item9 = from.meal_ing_item9.value;
    const nutrition_calories = from.nutrition_calories.value;
    const nutrition_fats = from.nutrition_fats.value;
    const nutrition_carbs = from.nutrition_carbs.value;
    const nutrition_proteins = from.nutrition_proteins.value;
    const short_description = from.short_description.value;

    try {
      setSpinning(true);

      // upload image and get url
      let image;

      const imageData = photo;
      const image_data = await imageUpload(imageData);

      if (image_data.success) {
        image = image_data.data.display_url;

        const meal_ingredients = [
          meal_ing_item1,
          meal_ing_item2,
          meal_ing_item3,
          meal_ing_item4,
          meal_ing_item5,
          meal_ing_item6,
          meal_ing_item7,
          meal_ing_item8,
          meal_ing_item9,
        ].filter(Boolean);

        const nutrition_facts = {
          calories: nutrition_calories,
          fats: nutrition_fats,
          carbs: nutrition_carbs,
          protein: nutrition_proteins,
        };

        const updatedMeal = {
          meal_title,
          price,
          serve_amount,
          distributor_name,
          prep_time,
          cooking_time,
          total_time,
          meal_subcategory,
          image,
          meal_category,
          post_status,
          meal_ingredients,
          nutrition_facts,
          short_description,
          post_updatedAt: new Date().toISOString(),
        };

        await axiosSecure.put(`/menu/${mealId}`, updatedMeal);
        refetch();
      } else {
        console.log(image_data);
        toast.error("Image upload failed");
        return;
      }
      setSelectedMeal(null); // Close the modal
      setIsModalOpen(false);

      toast.success("Meal updated successfully", {
        autoClose: 1500,
      });
      setSpinning(false);
      from.reset();
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleDeleteMeal = async (mealId) => {
    try {
      await axiosSecure.delete(`/menu/${mealId}`);
      refetch();

      toast.success("Meal deleted successfully", {
        autoClose: 1500,
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  if (loading) {
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
                  <th className="p-3">Meal Name</th>
                  <th className="p-3">
                    <p>Likes</p>
                  </th>
                  <th className="p-3">
                    <p>Reviews</p>
                  </th>
                  <th className="p-3">
                    <p>Distibutor Name</p>
                  </th>
                  <th className="p-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {menu?.map((meal, index) => (
                  <tr
                    key={index}
                    className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                    <td className="p-3">
                      <p>{meal?.meal_title}</p>
                    </td>
                    <td className="p-3">
                      <p>{meal?.likes_count}</p>
                    </td>
                    <td className="p-3">
                      <p>{meal?.rating?.reviewCount}</p>
                    </td>
                    <td className="p-3 flex items-center gap-2">
                      <Link to={`/meal-details/${meal?._id}`}>
                        <button className="px-3 py-1 rounded-md bg-amber-600 text-gray-50">
                          <BiSolidDetail size={16} />
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          setSelectedMeal(meal);
                          setIsModalOpen(true);
                        }}
                        className="px-3 py-1 rounded-md bg-green-600 text-gray-50">
                        <FaEdit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteMeal(meal._id)}
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
      {isModalOpen && selectedMeal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className="modal-box rounded-md w-full md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
            <div className="p-4 rounded-md shadow-sm bg-gray-50 dark:bg-slate-800 dark:border w-full">
              <div className="z-30 sticky top-0 flex justify-end">
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setSelectedMeal(null);
                  }}
                  className=" px-3 py-1.5 rounded-full border bg-black border-gray-800 text-white dark:border-slate-300 dark:text-orange-400">
                  X
                </button>
              </div>
              <h1 className="text-2xl font-bold mb-4">Update Meal</h1>

              <form onSubmit={handleSubmit(selectedMeal._id)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 grid-y-3">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-slate-600 text-sm dark:text-slate-300 font-bold mb-2"
                      htmlFor="grid-password">
                      Meal Title
                    </label>
                    <input
                      defaultValue={selectedMeal?.meal_title}
                      name="meal_title"
                      type="text"
                      required
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500  text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Meal Name"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                      htmlFor="grid-password">
                      Price
                    </label>
                    <input
                      type="number"
                      step="any"
                      defaultValue={selectedMeal?.price}
                      name="price"
                      required
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Price"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                      htmlFor="grid-password">
                      Serve Amount
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedMeal?.serve_amount}
                      name="serve_amount"
                      required
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="6 pcs"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                      htmlFor="grid-password">
                      Distributor Name
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedMeal?.distributor_name}
                      name="distributor_name"
                      required
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Meal Master"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                      htmlFor="grid-password">
                      Preparation Time
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedMeal?.prep_time}
                      name="prep_time"
                      required
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="10 min"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                      htmlFor="grid-password">
                      Cooking Time
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedMeal?.cooking_time}
                      name="cooking_time"
                      required
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="10 min"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                      htmlFor="grid-password">
                      Total Time
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedMeal?.total_time}
                      name="total_time"
                      required
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="20 min"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                      htmlFor="grid-password">
                      Sub-category
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedMeal?.meal_subcategory}
                      name="meal_subcategory"
                      required
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Dessert"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                      htmlFor="grid-password">
                      Photo
                    </label>
                    <input
                      type="file"
                      defaultValue={selectedMeal?.photo}
                      name="photo"
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Cooking Time"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                      htmlFor="grid-password">
                      Category
                    </label>

                    <select
                      defaultValue={selectedMeal?.meal_category}
                      name="meal_category"
                      required
                      className="select h-9 min-h-2 select-bordered border-0  placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                      <option value="Breakfast">Breakfast</option>
                      <option value="Lunch">Lunch</option>
                      <option value="Dinner">Dinner</option>
                    </select>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                      htmlFor="grid-password">
                      Meal Status
                    </label>

                    <select
                      defaultValue={selectedMeal?.post_status}
                      name="post_status"
                      required
                      className="select h-9 min-h-2 select-bordered border-0 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                      <option value="Published">Published</option>
                    </select>
                  </div>
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                    htmlFor="grid-password">
                    Meal Ingredients
                  </label>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-2">
                  <div className="relative w-full mb-3">
                    <input
                      type="text"
                      defaultValue={selectedMeal?.meal_ingredients[0]}
                      name="meal_ing_item1"
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Item 1"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <input
                      type="text"
                      defaultValue={selectedMeal?.meal_ingredients[1]}
                      name="meal_ing_item2"
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Item 2"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <input
                      type="text"
                      defaultValue={selectedMeal?.meal_ingredients[2]}
                      name="meal_ing_item3"
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Item 3"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <input
                      type="text"
                      defaultValue={selectedMeal?.meal_ingredients[3]}
                      name="meal_ing_item4"
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Item 4"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <input
                      type="text"
                      defaultValue={selectedMeal?.meal_ingredients[4]}
                      name="meal_ing_item5"
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Item 5"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <input
                      type="text"
                      defaultValue={selectedMeal?.meal_ingredients[5]}
                      name="meal_ing_item6"
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Item 6"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <input
                      type="text"
                      defaultValue={selectedMeal?.meal_ingredients[6]}
                      name="meal_ing_item7"
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Item 7"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <input
                      type="text"
                      defaultValue={selectedMeal?.meal_ingredients[7]}
                      name="meal_ing_item8"
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Item 8"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <input
                      type="text"
                      defaultValue={selectedMeal?.meal_ingredients[8]}
                      name="meal_ing_item9"
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Item 9"
                    />
                  </div>
                </div>
                {/* Nutrition Facts */}
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                    htmlFor="grid-password">
                    Nutrition Facts
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                  <div className="relative w-full mb-2">
                    <label
                      className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-semibold mb-2"
                      htmlFor="grid-password">
                      Calories
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedMeal?.nutrition_facts.calories}
                      required
                      name="nutrition_calories"
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="100"
                    />
                  </div>
                  <div className="relative w-full mb-2">
                    <label
                      className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-semibold mb-2"
                      htmlFor="grid-password">
                      Fats
                    </label>
                    <input
                      name="nutrition_fats"
                      defaultValue={selectedMeal?.nutrition_facts.fats}
                      required
                      type="text"
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="10gm"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-semibold mb-2"
                      htmlFor="grid-password">
                      Carbs
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedMeal?.nutrition_facts.carbs}
                      required
                      name="nutrition_carbs"
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="10gm"
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-semibold mb-2"
                      htmlFor="grid-password">
                      Proteins
                    </label>
                    <input
                      type="text"
                      defaultValue={selectedMeal?.nutrition_facts.protein}
                      required
                      name="nutrition_proteins"
                      className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="10gm"
                    />
                  </div>
                </div>

                {/* short description */}
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                    htmlFor="grid-password">
                    Short Description
                  </label>
                  <textarea
                    defaultValue={selectedMeal?.short_description}
                    name="short_description"
                    required
                    type="text"
                    rows="3"
                    className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Short Description"></textarea>
                </div>

                {/* submit button */}
                <div className="text-center mt-6">
                  {spinning ? (
                    <button
                      disabled
                      className="bg-slate-800 text-white  hover:bg-slate-700 text-sm font-bold uppercase px-6 rounded shadow hover:shadow-lg outline-none border-2 border-transparent dark:bg-slate-500 hover:border-2 hover:border-yellow-400 focus:outline-none mr-1 py-1 mb-1 w-full ease-linear transition-all duration-150">
                      <span className="loading loading-dots loading-md"></span>
                    </button>
                  ) : (
                    <input
                      value={"Update Meal"}
                      type="submit"
                      className="bg-slate-800 text-white  hover:bg-slate-700 text-sm font-bold uppercase px-6 py-2 rounded shadow hover:shadow-lg outline-none border-2 border-transparent dark:bg-slate-500 hover:border-2 hover:border-yellow-400 focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    />
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllMeals;
