import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { icons } from "../../utils/icons";
import { userAuthInformationStore } from "../../store/auth";
import { logout } from "../../utils/auth";
import ThemeToggle from "../../components/ThemeToggle";

const NAV_LINKS = [
  { to: "/pages/contact-us", label: "Contact Us", icon: icons.phone },
  { to: "/pages/about-us", label: "About Us", icon: icons.users },
  { to: "/pages/case-studies", label: "Case Studies", icon: icons.award },
  { to: "/pages/pricing", label: "Pricing", icon: icons.pricing },
];

function BaseHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  // Subscribe directly to userData so auth state changes trigger re-renders
  const userData = userAuthInformationStore((state) => state.userData);
  const isLoggedIn = userData !== null;

  const closeMobile = () => setMobileOpen(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleLogout = () => {
    logout();
    closeMobile();
    navigate("/");
  };

  return (
    <header className="sticky top-4 z-40 w-full px-4">
      <div className="mx-auto max-w-7xl">
        {/* ── NAV BAR ── */}
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between gap-4 rounded-xl border border-accent-1/20 bg-header px-4 py-3 shadow-sm backdrop-blur-sm lg:px-6"
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="Go to homepage"
            className="flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <img src={logo} alt="Grow" className="h-20 w-auto" />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden items-center gap-1 lg:flex" role="list">
            {NAV_LINKS.map(({ to, label, icon }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-hover/80 transition-colors hover:bg-white/10 hover:text-hover focus-visible:outline-2 focus-visible:outline-white"
                >
                  {icon}
                  <span className="text-nowrap">{label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop auth area */}
          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-hover/80 transition-colors hover:bg-white/10 hover:text-hover focus-visible:outline-2 focus-visible:outline-white"
                >
                  {icons.dashboard}
                  <span>Dashboard</span>
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-bt-strong px-4 py-2 text-sm font-semibold text-hover shadow-sm transition-colors hover:bg-bt-strong-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="button text-sm text-hover">
                  {icons.login}
                  <span>Login</span>
                </Link>
                <Link to="/register" className="button text-sm text-hover">
                  {icons.register}
                  <span>Sign up</span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-hover/80 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white lg:hidden"
          >
            <div aria-hidden="true" className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </nav>

        {/* ── MOBILE MENU — in-flow, no fixed positioning ── */}
        <div
          id="mobile-menu"
          aria-hidden={!mobileOpen}
          className={`mt-2 overflow-hidden rounded-xl border border-accent-1/20 bg-surface shadow-md backdrop-blur-sm transition-all duration-300 lg:hidden ${
            mobileOpen
              ? "max-h-[600px] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col gap-1 p-4">
            {/* Nav links */}
            {NAV_LINKS.map(({ to, label, icon }) => (
              <Link
                key={to}
                to={to}
                onClick={closeMobile}
                className="inline-flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-body transition-colors hover:bg-accent-1/10 focus-visible:outline-2 focus-visible:outline-primary"
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}

            <div className="my-2 border-t border-br" />
            <ThemeToggle />

            {/* Auth area */}
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={closeMobile}
                  className="inline-flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-body transition-colors hover:bg-accent-1/10"
                >
                  {icons.dashboardIcon}
                  <span>Dashboard</span>
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg border border-br px-4 py-3 text-sm font-medium text-body transition-colors hover:bg-red-50 dark:hover:bg-red-950/20"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={closeMobile}
                  className="flex items-center justify-center gap-2 rounded-lg border border-br px-4 py-3 text-sm font-medium text-body transition-colors hover:bg-accent-1/5"
                >
                  {icons.login}
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  onClick={closeMobile}
                  className="flex items-center justify-center gap-2 rounded-lg bg-bt-strong px-4 py-3 text-sm font-semibold text-hover shadow-sm transition-colors hover:bg-bt-strong-hover"
                >
                  {icons.register}
                  <span>Sign up</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default BaseHeader;
