import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../utils/auth";
import { icons } from "../../../utils/icons";
import { KeyRound, SquarePen } from "lucide-react";

const navLink =
  "flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-body hover:bg-background transition-colors";

export default function Sidebar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/logout");
  };

  return (
    <div className="card bg-transparent col-span-12 md:col-span-4 lg:col-span-3">
      <nav
        className="bg-surface shadow-sm rounded-xl mb-4 lg:mb-0"
        aria-label="Studentmeny"
      >
        {/* Mobile toggle */}
        <div className="flex items-center justify-between p-3 md:hidden">
          <span className="font-bold text-body text-sm">Menu</span>
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-2 rounded-lg bg-bt-strong "
            aria-label="Toggle navigation"
          ></button>
        </div>

        {/* Nav links */}
        <div className={`p-3 ${open ? "block" : "hidden"} md:block`}>
          <ul className="list-none space-y-1 mb-6">
            <li className="bg-surface border-b border-br font-semibold">
              <Link className={navLink} to="/student/dashboard/">
                {icons.dashboard} Dashboard
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/student/courses/">
                {icons.cart} My Courses
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/student/wishlist/">
                {icons.heart}Wishlist
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/student/question-answer/">
                {icons.qa} Q/A
              </Link>
            </li>
          </ul>

          <p className="text-xs font-semibold text-muted uppercase tracking-wider px-3 mb-2">
            Account Settings
          </p>
          <ul className="list-none space-y-1">
            <li>
              <Link className={navLink} to="/student/profile/">
                <SquarePen size={20} strokeWidth={1.5} />
                Edit Profile
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/student/change-password/">
                <KeyRound size={20} strokeWidth={1.5} /> Change Password
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={handleLogout}
                className={`${navLink}`}
              >
                {icons.logout}Log out
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
