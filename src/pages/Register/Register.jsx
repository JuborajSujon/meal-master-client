import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import useAuth from "./../../hooks/useAuth";
import { imageUpload } from "./../../api/index";
import useSocialLogin from "../../hooks/useSocialLogin";

export default function Register() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const {
    googleLogin,
    githubLogin,
    createUser,
    updateUserProfile,
    setUser,
    setLoading,
  } = useAuth();

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
  const onSubmit = async (data) => {
    const { email, password, name, photo } = data;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters", {
        autoClose: 1500,
      });
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      toast.error("Password must contain at least one uppercase letter", {
        autoClose: 2000,
      });
      return;
    }

    if (!/(?=.*[a-z])/.test(password)) {
      toast.error("Password must contain at least one lowercase letter", {
        autoClose: 2000,
      });
      return;
    }

    try {
      setLoading(true);
      // upload image and get url
      const image = photo[0];
      const image_data = await imageUpload(image);

      if (image_data.success) {
        data.photo = image_data.data.display_url;
      } else {
        data.photo = "https://i.ibb.co/H4fnK5n/avater2.jpg";
        toast.error("Image upload failed, default image will be used", {
          autoClose: 2000,
        });
      }

      // user registration
      const result = await createUser(email, password);

      // save username and photo
      await updateUserProfile(name, data.photo);

      //  Optimistic UI - update state
      setUser({ ...result?.user, displayName: name, photoURL: data.photo });

      // navigate to home page or other page after registration
      navigate(from, { replace: true });

      toast.success("User created successfully", {
        autoClose: 1500,
      });
      setLoading(false);
      reset();
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        autoClose: 1500,
      });
    }
  };

  //  google login
  const handleGoogleLogin = useSocialLogin(googleLogin);

  //  github login
  const handleGithubLogin = useSocialLogin(githubLogin);

  return (
    <>
      <Helmet>
        <title>Register</title>
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

                  <div className="btn-wrapper text-center">
                    <button
                      onClick={handleGithubLogin}
                      className="bg-white active:bg-slate-50 text-slate-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow border-2 border-transparent hover:border-2 hover:border-yellow-400 hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button">
                      <img
                        alt="..."
                        className="w-5 mr-1"
                        src="https://demos.creative-tim.com/notus-nextjs/img/github.svg"
                      />
                      Github
                    </button>
                    <button
                      onClick={handleGoogleLogin}
                      className="bg-white active:bg-slate-50 text-slate-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow border-2 border-transparent hover:shadow-md hover:border-2 hover:border-yellow-400 inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                      type="button">
                      <img
                        alt="..."
                        className="w-5 mr-1"
                        src="https://demos.creative-tim.com/notus-nextjs/img/google.svg"
                      />
                      Google
                    </button>
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
                        {...register("name", { required: true })}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Name"
                      />
                      {errors.name && (
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
                        Photo
                      </label>
                      <input
                        {...register("photo")}
                        type="file"
                        className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                      {errors.photo && (
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
