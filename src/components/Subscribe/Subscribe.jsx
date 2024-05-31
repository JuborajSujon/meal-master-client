export default function Subscribe() {
  return (
    <div className="lg:ml-8">
      <div className="w-full bg-orange-100 rounded">
        <div className="flex flex-col content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-3xl antialiased font-semibold leading-none  dark:text-gray-800 pb-5">
            Subscribe
          </h1>

          <div className="flex flex-row max-w-sm ">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3 border border-gray-300"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3  bg-orange-500 dark:text-gray-50">
              Subscribe
            </button>
          </div>
          <hr className="lg:hidden border-1 w-[98%] mx-auto border-orange-200 mb-3 rounded-2xl" />
          <div>
            <p className="pt-2 text-lg lg:text-base antialiased  dark:text-gray-800">
              Subscribe to meal master's email notifications to get notified for
              all money saving and tummy filling offers. Enter your email
              address to get started
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
