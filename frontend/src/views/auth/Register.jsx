import { useForm } from "react-hook-form";
import { register as registerUser } from "../../utils/auth";
import { useAlert } from "../../utils/AlertContext";
import { useNavigate } from "react-router-dom";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";
import AuthCTA from "../../components/auth/AuthCTA";
import { icons } from "../../utils/icons";

function Register() {
  const navigate = useNavigate();
  const { showAlert } = useAlert();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      password2: "",
      remember: false,
    },
  });

  const onSubmit = async (submittedValues) => {
    const { fullName, email, password, password2 } = submittedValues;
    try {
      const res = await registerUser(fullName, email, password, password2);
      if (res?.error) {
        showAlert("error", { text: res.error });
        return;
      }
      showAlert("success", {
        title: "Registration successful!",
        text: "Your account has been set up!",
      });
      navigate("/dashboard/");
    } catch (err) {
      showAlert("error", {
        text: err?.error || "Something went wrong. Please try again.",
      });
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

                {/* Full name */}
                <div className="mb-4">
                  <label htmlFor="fullName" className="block text-sm font-medium text-body mb-1">
                    Full name
                  </label>
                  <input
                    {...register("fullName", {
                      required: "Full name is required",
                      pattern: {
                        value: /^[a-zA-ZåäöÅÄÖ\s'-]+$/,
                        message: "Use only letters and spaces",
                      },
                      minLength: { value: 3,  message: "Minimum 3 characters"  },
                      maxLength: { value: 50, message: "Maximum 50 characters" },
                    })}
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    className="form-input"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-body mb-1">
                    Email address
                  </label>
                  <input
                    {...register("email", {
                      required: "Email address is required",
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email format (e.g. name@domain.com)",
                      },
                      minLength: { value: 6,  message: "Email is too short"    },
                      maxLength: { value: 30, message: "Maximum 30 characters" },
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
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-body mb-1">
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: "Please enter a valid password.",
                      minLength: { value: 8,  message: "Minimum 8 characters."  },
                      maxLength: { value: 30, message: "Maximum 30 characters." },
                    })}
                    id="password"
                    type="password"
                    placeholder="**************"
                    className="form-input"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm password */}
                <div className="mb-2">
                  <label htmlFor="password2" className="block text-sm font-medium text-body mb-1">
                    Confirm password
                  </label>
                  <input
                    {...register("password2", {
                      required: "Please confirm your password.",
                      minLength: { value: 8,  message: "Too short."      },
                      maxLength: { value: 30, message: "Value too long." },
                      validate: (value) =>
                        value === getValues("password") || "The passwords do not match.",
                    })}
                    id="password2"
                    type="password"
                    placeholder="**************"
                    className="form-input"
                  />
                  {errors.password2 && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {errors.password2.message}
                    </p>
                  )}
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
                  {isSubmitting ? (
                    <span className="inline-flex animate-spin [animation-duration:2s]">
                      {icons.loading}
                    </span>
                  ) : (
                    "Sign up →"
                  )}
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

export default Register;