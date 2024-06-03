import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

export default function Register() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //  ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Register Handler for create user , update user profile
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Helmet>
        <title>Textile Art | Register</title>
      </Helmet>
      <section className="relative w-full min-h-screen dark:bg-slate-900 h-full py-40  bg-orange-50">
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-orange-100 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-slate-500 text-sm font-bold">
                      Sign Up
                    </h6>
                  </div>

                  <hr className="mt-6 border-b-1 border-slate-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Name
                      </label>
                      <input
                        {...register("fullName", { required: true })}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Name"
                      />
                      {errors.fullName && (
                        <span className="text-red-500">
                          Please enter a valid name
                        </span>
                      )}
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Email
                      </label>
                      <input
                        {...register("email", { required: true })}
                        type="email"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                      {errors.email && (
                        <span className="text-red-500">
                          Please enter a valid email
                        </span>
                      )}
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Photo URL
                      </label>
                      <input
                        {...register("photoURL")}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Photo URL"
                      />
                      {errors.photoURL && (
                        <span className="text-red-500">
                          Please enter a valid photo URL
                        </span>
                      )}
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-slate-600 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Password
                      </label>
                      <input
                        {...register("password", { required: true })}
                        type={password ? "" : "password"}
                        name="password"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                      />
                      <div className="absolute top-1/2 -translate-y-1/2 right-3 mt-3">
                        {password ? (
                          <BsEyeSlash
                            onClick={() => setPassword(!password)}
                            size={20}
                          />
                        ) : (
                          <BsEye
                            onClick={() => setPassword(!password)}
                            size={20}
                          />
                        )}
                      </div>
                      {errors.password && (
                        <p className="text-red-500">
                          Please enter a valid password
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        />
                        <span className="ml-2 text-sm font-semibold text-slate-600">
                          Remember me
                        </span>
                      </label>
                    </div>

                    <div className="flex items-center mb-4">
                      <input
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <label
                        className="text-slate-400 ml-2 text-sm"
                        htmlFor="RememberMe">
                        I Accept
                        <Link
                          to={"/terms"}
                          className="text-green-500 link ml-2">
                          Terms and Conditions
                        </Link>
                      </label>
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-slate-800 text-white  hover:bg-slate-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none border-2 border-transparent hover:border-2 hover:border-yellow-400 focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit">
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="text-center mt-6 relative">
                <p className="text-slate-900 dark:text-slate-300">
                  <small className="text-base">
                    Already have an account?{" "}
                    <Link
                      to="/Login"
                      className="text-slate-900 underline dark:text-slate-300 hover:font-bold">
                      login
                    </Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
