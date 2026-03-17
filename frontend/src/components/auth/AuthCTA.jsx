import { Link, useLocation } from "react-router-dom";

export default function AuthCTA() {
  const { pathname } = useLocation();
  const isLogin = pathname.includes("login");

  return (
    <div className="pb-7">
      <h1 className="sm:mb-4 mt-0 text-h1 font-sans font-extrabold">
        {isLogin ? "Sign in" : "Sign up"}
      </h1>
      <span className="mb-4">
        {isLogin ? (
          <>
            <p className="truncate text-sm text-gray-500 dark:text-sub">
              Don’t have an account?
           
            <Link
              to="/register/"
              className="text-accent-2 dark:text-body font-semibold"
            >
              Sign up
            </Link>
             </p>
          </>
        ) : (
          <>
            <p className="truncate text-sm text-gray-500 dark:text-sub">
              Already have an account?
              <Link
                to="/login/"
                className="text-accent-2 dark:text-body font-semibold"
              >
                Sign in
              </Link>
            </p>
          </>
        )}
      </span>
    </div>
  );
}
