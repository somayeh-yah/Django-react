import { userAuthInformationStore } from "../../../store/auth";
import { Link } from "react-router-dom";
import { icons } from "../../../utils/icons";
import SingleProfile from "../../../components/profileAvatar/SingleProfile";

export default function Header() {
  const userData = userAuthInformationStore((state) => state.userData);
  return (
    <header
      aria-label="User account header"
      className="hidden md:block card px-4 pt-2 pb-4 mb-4"
    >
      <div className="flex items-center justify-between gap-4">
        {/* Profile link */}
        <Link to="/profile">
          <SingleProfile
            src={userData?.image ?? null}
            name={userData?.full_name ?? "Guest"}
            initials={userData?.initials}
            text={userData?.email ?? ""}
          />
        </Link>

        {/* Account settings link */}
        <Link
          to="/settings"
          aria-label="Account settings"
          className="inline-flex items-center gap-3  text-xs text-body  transition-colors"
        >
          Account Setting <span aria-hidden="true">{icons.settings}</span>
        </Link>
      </div>
    </header>
  );
}
