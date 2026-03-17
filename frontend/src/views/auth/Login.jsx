import { login } from "../../utils/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";
import AuthCTA from "../../components/auth/AuthCTA";
import { useAlert } from "../../utils/AlertContext";

export default function Login() {
  const navigate = useNavigate();
  //get showAlert from Context
  const { showAlert } = useAlert();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = async (submittedValues) => {
    const { email, password } = submittedValues;
    const { error } = await login(email, password);

    if (error) {
      showAlert("error", {
        text: "Login failed, please try again!",
      });
    } else {
      showAlert("success", {
        title: "You are logged in!",
        text: "Your account is ready to use!",
      });
      navigate("/dashboard/");
    }
  };

  return (
    <>
      <BaseHeader />
      <section className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-16">
        <div className="w-full max-w-md">
          <div className="bg-surface rounded-xl shadow-md">
            <div className="p-8">
              <AuthCTA />
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-body mb-1">
                    Email Address
                  </label>
                  <input
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message:
                          "Invalid email format (e.g. name@domain.com)",
                      },
                      minLength: {
                        value: 6,
                        message: "Email is too short",
                      },
                      maxLength: {
                        value: 30,
                        message: "Maximum 30 charachters",
                      },
                    })}
                    id="email"
                    type="email"
                    placeholder="johndoe@gmail.com"
                    className="form-input"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                {/* Password */}
                <div className="mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-body mb-1">
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: "Please, enter a valid password.",
                      minLength: {
                        value: 8,
                        message: "Minimum 8 charachters.",
                      },
                      maxLength: {
                        value: 30,
                        message: "Maximum 30 charachters.",
                      },
                    })}
                    id="password"
                    type="password"
                    placeholder="**************"
                    className="form-input"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1" role="alert">{errors.password.message} </p>
                  )}
                  <Link
                    to="/forgot-password"
                    className="block text-right text-sm text-accent-2 hover:underline mt-1"
                  >
                    Forgot password?
                  </Link>
                </div>
                {/* Remember me */}
                <div className="flex items-center mt-4 mb-6">
                  <input
                    {...register("remember")}
                    id="remember"
                    type="checkbox"
                    className="mr-2 accent-bt-strong"
                  />
                  <label htmlFor="remember" className="text-sm text-body">
                    Remember me
                  </label>
                </div>
                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-bt-strong hover:bg-bt-strong-hover text-hover font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm disabled:opacity-50"
                >
                  {isSubmitting ? "Loading..." : "Sign in →"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <BaseFooter />
    </>
  );
}
