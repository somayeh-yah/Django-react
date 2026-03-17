import { useState } from "react";
import { Link } from "react-router-dom";

const navLink =
  "flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-body hover:bg-background transition-colors";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="card bg-transparent col-span-12 md:col-span-4 lg:col-span-3">
      <nav className="bg-surface shadow-sm rounded-xl mb-4 lg:mb-0">
        {/* Mobile toggle */}
        <div className="flex items-center justify-between p-3 md:hidden">
          <span className="font-bold text-body text-sm">Menu</span>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg bg-bt-strong text-hover"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-grid" />
          </button>
        </div>

        {/* Nav links */}
        <div className={`p-3 ${open ? "block" : "hidden"} md:block`}>
          <ul className="list-none space-y-1 mb-6">
            <li className="bg-surface border-b border-br font-semibold">
              <Link className={navLink} to="/student/dashboard/">
                <i className="bi bi-grid-fill" /> Dashboard
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/student/courses/">
                <i className="fas fa-shopping-cart" /> My Courses
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/student/wishlist/">
                <i className="fas fa-heart" /> Wishlist
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/student/question-answer/">
                <i className="fas fa-envelope" /> Q/A
              </Link>
            </li>
          </ul>

          <p className="text-xs font-semibold text-muted uppercase tracking-wider px-3 mb-2">
            Account Settings
          </p>
          <ul className="list-none space-y-1">
            <li>
              <Link className={navLink} to="/student/profile/">
                <i className="fas fa-edit" /> Edit Profile
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/student/change-password/">
                <i className="fas fa-lock" /> Change Password
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/login/">
                <i className="fas fa-sign-out-alt" /> Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
