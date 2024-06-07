import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";
import { toast } from "react-toastify";
import { imageUpload } from "../../../../api";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
const AddMeal = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const {
      meal_title,
      price,
      serve_amount,
      distributor_name,
      prep_time,
      cooking_time,
      total_time,
      meal_subcategory,
      photo,
      meal_category,
      post_status,
      meal_ing_item1,
      meal_ing_item2,
      meal_ing_item3,
      meal_ing_item4,
      meal_ing_item5,
      meal_ing_item6,
      meal_ing_item7,
      meal_ing_item8,
      meal_ing_item9,
      nutrition_calories,
      nutrition_fats,
      nutrition_carbs,
      nutrition_proteins,
      short_description,
    } = data;
    try {
      // upload image and get url
      let image;
      const imageData = photo[0];
      const image_data = await imageUpload(imageData);

      if (image_data.success) {
        image = image_data.data.display_url;
        // remove empty values from array
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

        const nutrition_facts = [
          { name: "calories", amount: nutrition_calories },
          { name: "fats", amount: nutrition_fats },
          { name: "carbs", amount: nutrition_carbs },
          { name: "protein", amount: nutrition_proteins },
        ];
        const menuItem = {
          meal_title,
          meal_category,
          meal_subcategory,
          image,
          price: parseFloat(price),
          serve_amount,
          distributor_name,
          prep_time,
          cooking_time,
          total_time,
          short_description,
          meal_ingredients,
          nutrition_facts,
          post_status,
          post_createdAt: new Date().toISOString(),
          post_updatedAt: new Date().toISOString(),
          admin: {
            name: user.displayName,
            email: user.email,
          },
          likes: [],
          reviews: [],
        };

        const menuRes = await axiosSecure.post("/menu", menuItem);

        if (menuRes.data.insertedId) {
          toast.success("Meal added successfully");
          reset();
        } else {
          toast.error("Failed to add meal");
        }
      } else {
        toast.error("Image upload failed, please try again", {
          autoClose: 2000,
        });
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Add Meal | Dashboard</title>
      </Helmet>
      <div className="py-2">
        <Breadcrumbs />
      </div>
      <div>
        <SectionTitle title="Add New Meal" />
      </div>
      <section className="p-6 bg-slate-200 dark:bg-slate-800">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 grid-y-3">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-slate-600 text-sm dark:text-slate-300 font-bold mb-2"
                htmlFor="grid-password">
                Meal Title
              </label>
              <input
                {...register("meal_title", { required: true })}
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500  text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Meal Name"
              />
              {errors.meal_title && (
                <p className="text-red-500 text-sm">Meal Title is required</p>
              )}
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                htmlFor="grid-password">
                Price
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Price"
              />
              {errors.price && (
                <p className="text-red-500 text-sm">Price is required</p>
              )}
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                htmlFor="grid-password">
                Serve Amount
              </label>
              <input
                {...register("serve_amount", { required: true })}
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="6 pcs"
              />
              {errors.serve_amount && (
                <p className="text-red-500 text-sm">Serve Amount is required</p>
              )}
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                htmlFor="grid-password">
                Distributor Name
              </label>
              <input
                {...register("distributor_name", { required: true })}
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Meal Master"
              />
              {errors.distributor_name && (
                <p className="text-red-500 text-sm">
                  Distributor Name is required
                </p>
              )}
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                htmlFor="grid-password">
                Preparation Time
              </label>
              <input
                {...register("prep_time", { required: true })}
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="10 min"
              />
              {errors.prep_time && (
                <p className="text-red-500 text-sm">
                  Preparation Time is required
                </p>
              )}
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                htmlFor="grid-password">
                Cooking Time
              </label>
              <input
                {...register("cooking_time", { required: true })}
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="10 min"
              />
              {errors.cooking_time && (
                <p className="text-red-500 text-sm">Cooking Time is required</p>
              )}
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                htmlFor="grid-password">
                Total Time
              </label>
              <input
                {...register("total_time", { required: true })}
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="20 min"
              />
              {errors.total_time && (
                <p className="text-red-500 text-sm">Total Time is required</p>
              )}
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                htmlFor="grid-password">
                Sub-category
              </label>
              <input
                {...register("meal_subcategory", { required: true })}
                type="text"
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
                {...register("photo", { required: true })}
                type="file"
                className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Cooking Time"
              />
              {errors.photo && (
                <p className="text-red-500 text-sm">Photo is required</p>
              )}
            </div>
            <div className="relative w-full mb-3">
              <label
                className="block uppercase dark:text-slate-300 text-slate-600 text-sm font-bold mb-2"
                htmlFor="grid-password">
                Category
              </label>

              <select
                {...register("meal_category", { required: true })}
                defaultValue="Breakfast"
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
                {...register("post_status", { required: true })}
                defaultValue="Published"
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
                {...register("meal_ing_item1")}
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Item 1"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                {...register("meal_ing_item2")}
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Item 2"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                {...register("meal_ing_item3")}
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Item 3"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                {...register("meal_ing_item4")}
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Item 4"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                {...register("meal_ing_item5")}
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Item 5"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                {...register("meal_ing_item6")}
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Item 6"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                {...register("meal_ing_item7")}
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Item 7"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                {...register("meal_ing_item8")}
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Item 8"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                {...register("meal_ing_item9")}
                type="text"
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
                {...register("nutrition_calories", { required: true })}
                type="text"
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
                {...register("nutrition_fats", { required: true })}
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
                {...register("nutrition_carbs", { required: true })}
                type="text"
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
                {...register("nutrition_proteins", { required: true })}
                type="text"
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
              {...register("short_description", { required: true })}
              type="text"
              rows="3"
              className="border-0 px-3 py-1.5 placeholder-slate-300 dark:placeholder:text-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Short Description"></textarea>
          </div>

          {/* submit button */}
          <div className="text-center mt-6">
            <input
              value={"Add Meal"}
              type="submit"
              className="bg-slate-800 text-white  hover:bg-slate-700 text-sm font-bold uppercase px-6 py-2 rounded shadow hover:shadow-lg outline-none border-2 border-transparent dark:bg-slate-500 hover:border-2 hover:border-yellow-400 focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddMeal;
