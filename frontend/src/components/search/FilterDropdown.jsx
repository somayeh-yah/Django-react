import { useEffect, useRef } from "react";
import { useFilters, useSearchActions } from "../../store/search";
import { FILTER_OPTIONS } from "./filterOptions";
import FilterSection from "./FilterSection";

function FilterDropdown({ onClose }) {
  const filters = useFilters();
  const { setFilter, clearFilters, search } = useSearchActions();
  const ref = useRef(null);

  // Stäng vid klick utanför
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const activeCount = Object.values(filters).filter(Boolean).length;

  const handleSelect = (key, value) => {
    setFilter(key, value);
    search();
  };

  const handleClear = () => {
    clearFilters();
    search();
  };

  return (
    <div
      ref={ref}
      className="absolute top-full left-0 right-0 mt-2 z-50 card p-4 shadow-md space-y-4"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-body">
          Filters
          {activeCount > 0 && (
            <span className="ml-2 px-1.5 py-0.5 bg-primary text-inverted text-xs rounded-full">
              {activeCount}
            </span>
          )}
        </p>
        <button
          onClick={onClose}
          className="text-muted hover:text-body transition-colors"
          aria-label="Close filters"
        >
          <i className="fas fa-times" />
        </button>
      </div>

      {/* Sektioner */}
      {FILTER_OPTIONS.map((config) => (
        <FilterSection
          key={config.key}
          config={config}
          activeValue={filters[config.key]}
          onSelect={handleSelect}
        />
      ))}

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-br">
        <button
          onClick={handleClear}
          disabled={activeCount === 0}
          className="text-xs text-muted hover:text-error transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <i className="fas fa-times-circle mr-1" />
          Clear all
        </button>
        <button onClick={onClose} className="btn-primary text-xs py-1.5 px-4">
          Done
        </button>
      </div>
    </div>
  );
}

export default FilterDropdown;
