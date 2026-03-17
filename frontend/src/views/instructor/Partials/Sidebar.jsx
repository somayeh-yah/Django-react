import { useState } from "react";
import { Link } from "react-router-dom";

const navLink =
  "flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-body hover:bg-background transition-colors";

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-3">
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
            <li>
              <Link className={navLink} to="/instructor/dashboard/">
                <i className="bi bi-grid-fill" /> Dashboard
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/instructor/courses/">
                <i className="fas fa-shopping-cart" /> My Courses
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/instructor/create-course/">
                <i className="fas fa-plus" /> Create Course
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/instructor/reviews/">
                <i className="fas fa-star" /> Review
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/instructor/students/">
                <i className="fas fa-graduation-cap" /> Students
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/instructor/earning/">
                <i className="fas fa-dollar-sign" /> Earning
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/instructor/orders/">
                <i className="fas fa-shopping-cart" /> Orders
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/instructor/question-answer/">
                <i className="fas fa-envelope" /> Q/A
              </Link>
            </li>
          </ul>

          <p className="text-xs font-semibold text-muted uppercase tracking-wider px-3 mb-2">
            Account Settings
          </p>
          <ul className="list-none space-y-1">
            <li>
              <Link className={navLink} to="/instructor/profile/">
                <i className="fas fa-edit" /> Edit Profile
              </Link>
            </li>
            <li>
              <Link className={navLink} to="/instructor/change-password/">
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
