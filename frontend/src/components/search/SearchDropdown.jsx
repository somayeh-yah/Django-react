import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  useResults,
  useSearchLoading,
  useSearchIsOpen,
  useQuery,
  useSearchActions,
} from "../../store/search";

// Ikoner per typ
const TYPE_CONFIG = {
  courses: {
    label: "Courses",
    icon: "fas fa-graduation-cap",
    path: "/student/courses",
  },
  tasks: { label: "Tasks", icon: "fas fa-check-square", path: "/tasks" },
  teams: { label: "Teams", icon: "fas fa-users", path: "/teams" },
  users: { label: "Members", icon: "fas fa-user", path: "/members" },
};

function SearchDropdown() {
  const results = useResults();
  const loading = useSearchLoading();
  const isOpen = useSearchIsOpen();
  const query = useQuery();
  const { clearSearch, setIsOpen } = useSearchActions();
  const navigate = useNavigate();
  const ref = useRef(null);

  // Stäng dropdown vid klick utanför
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isOpen) return null;

  // Samla alla resultat blandat med typ-info
  const allResults = Object.entries(results).flatMap(([type, items]) =>
    items.slice(0, 3).map((item) => ({ ...item, _type: type })),
  );

  const totalCount = Object.values(results).reduce(
    (sum, arr) => sum + arr.length,
    0,
  );

  const handleSelect = (item) => {
    const config = TYPE_CONFIG[item._type];
    clearSearch();
    navigate(`${config.path}/${item.id}`);
  };

  return (
    <div
      ref={ref}
      className="absolute top-full left-0 right-0 mt-2 z-50 card overflow-hidden shadow-md"
    >
      {/* Loading */}
      {loading && (
        <div className="flex items-center gap-2 px-4 py-3 text-sm text-muted">
          <i className="fas fa-spinner fa-spin" />
          Searching...
        </div>
      )}

      {/* Inga resultat */}
      {!loading && query && allResults.length === 0 && (
        <div className="px-4 py-6 text-center text-sm text-muted">
          <i className="fas fa-search mb-2 text-lg block" />
          No results for <strong className="text-body">"{query}"</strong>
        </div>
      )}

      {/* Resultat */}
      {!loading && allResults.length > 0 && (
        <>
          <ul className="divide-y divide-br max-h-80 overflow-y-auto no-scrollbar">
            {allResults.map((item, i) => {
              const config = TYPE_CONFIG[item._type];
              return (
                <li key={`${item._type}-${item.id ?? i}`}>
                  <button
                    onClick={() => handleSelect(item)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface transition-colors text-left"
                  >
                    {/* Typ-ikon */}
                    <span className="w-7 h-7 rounded-lg bg-primary-soft flex items-center justify-center flex-shrink-0">
                      <i className={`${config.icon} text-xs text-primary`} />
                    </span>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-body truncate">
                        {item.title ??
                          item.name ??
                          item.full_name ??
                          "Untitled"}
                      </p>
                      <p className="text-xs text-muted">{config.label}</p>
                    </div>

                    <i className="fas fa-arrow-right text-xs text-muted" />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Footer — visa alla */}
          {totalCount > allResults.length && (
            <div className="border-t border-br px-4 py-2.5">
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate(`/search?q=${query}`);
                }}
                className="text-xs text-primary hover:text-primary-hover transition-colors font-medium"
              >
                See all {totalCount} results for "{query}" →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default SearchDropdown;
