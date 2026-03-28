import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { icons } from "../../utils/icons";
import Search from "../search/Search";
import SingleProfile from "../profileAvatar/SingleProfile";
import Button from "../Button";
import ThemeToggle from "../ThemeToggle";
import SearchDropdown from "../search/Search";
import { useQuery, useSearchActions } from "../../store/search";

export default function MainHeader({ sideBarCollapsed, onToggleSidbar }) {
  const navigate = useNavigate();
  const [filterOpen, setFilterOpen] = useState(false);

  const query = useQuery();
  const { setQuery, search } = useSearchActions();

  const handleNavigate = () => navigate("/kpi/new");

  return (
    <header className="bg-surface/90 dark:bg-surface backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 px-2 py-1.5 h-17">
      <div className="flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center space-x-6">
          <button
            className="mb-2 p-2 me-1 rounded text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={onToggleSidbar}
          >
            {icons.secondaryMenu}
          </button>
        </div>

        {/* CENTER — Search and dropdown */}
        <div className="flex-1 max-w-md mx-8 relative">
          <Search
            placeholder="Search courses, tasks, teams..."
            icon1={icons.search}
            icon2={icons.filter}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onSearch={search}
            onFilterClick={() => setFilterOpen(!filterOpen)}
          />
          {filterOpen && <SearchDropdown />}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <div className="mt-3 flex items-center justify-end gap-2">
            <Button
              type="button"
              className="button"
              text="Add new"
              onClick={handleNavigate}
            />
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button className="relative p-2.5 rounded text-slate-600 cursor-pointer hover:text-slate-300 transition-colors">
              {icons.bell}
              <span className="absolute top-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-sans">
                3
              </span>
            </button>
            <button className="relative p-2.5 rounded text-slate-600 cursor-pointer hover:text-slate-300 transition-colors">
              {icons.settings}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
