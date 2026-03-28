import { userAuthInformationStore } from "../../../store/auth";
import { Link } from "react-router-dom";
import SingleProfile from "../../../components/profileAvatar/SingleProfile";

export default function Header() {
  const userData = userAuthInformationStore((state) => state.userData);
  return (
    <div className="hidden md:block card bg-surface px-4 pt-2 pb-4 shadow-sm rounded-xl mb-4 ">
      <div className="flex items-end justify-between">
        <div className="flex items-center ">
          <div className=" bg-surface border-t p-1 border-slate-200/50 dark:border-slate-700/50 overflow-visible w-full items-center">
            <Link to="/profile">
              <SingleProfile
                src={userData?.image || null}
                name={userData?.full_name || "Guest"}
                initials={userData?.initials}
                text={userData?.email || ""}
              />
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <Link
            to="#"
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs bg-bt-strong hover:bg-bt-strong-hover text-hover rounded-lg transition-colors"
          >
            Account Setting <i className="fas fa-gear fa-spin" />
          </Link>
        </div>
      </div>
    </div>
  );
}
