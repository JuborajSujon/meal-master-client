import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
const AddMeal = () => {
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
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 grid-y-3">
            <div className="relative w-full mb-3">
              <label
                className="block uppercase text-slate-600 text-sm dark:text-slate-300 font-bold mb-2"
                htmlFor="grid-password">
                Meal Title
              </label>
              <input
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Meal Title"
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
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Serve Amount"
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
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Distributor Name"
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
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Preparation Time"
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
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Cooking Time"
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
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Total Time"
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
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Sub-category"
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
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                defaultValue="Breakfast"
                className="select h-9 min-h-2 select-bordered border-0  placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
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
                defaultValue="Published"
                className="select h-9 min-h-2 select-bordered border-0 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                <option value="Published">Published</option>
                <option value="Upcoming">Upcoming</option>
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
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Item 1"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Item 2"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Item 3"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Item 4"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Item 5"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Item 6"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Item 7"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Item 8"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
            <div className="relative w-full mb-3">
              <input
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Calories"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Fats"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Carbs"
              />
            </div>
            <div className="relative w-full mb-3">
              <input
                type="text"
                className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                placeholder="Proteins"
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
              type="text"
              rows="3"
              className="border-0 px-3 py-1.5 placeholder-slate-500 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              placeholder="Short Description"></textarea>
          </div>

          {/* submit button */}
          <div className="text-center mt-6">
            <button
              className="bg-slate-800 text-white  hover:bg-slate-700 text-sm font-bold uppercase px-6 py-2 rounded shadow hover:shadow-lg outline-none border-2 border-transparent dark:bg-slate-500 hover:border-2 hover:border-yellow-400 focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
              type="submit">
              Add Meal
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddMeal;
