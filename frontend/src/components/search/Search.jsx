import { useId, useState } from "react";

function Search({
  placeholder = "Search...",
  icon1,
  icon2,
  label,
  onSearch,
  onChange,
  value,
  onFilterClick,
  disabled = false,
  className = "",
}) {
  const id = useId();
  const [internalValue, setInternalValue] = useState("");

  // Använd externt värde om det skickas in, annars internt
  const inputValue = value !== undefined ? value : internalValue;

  const handleChange = (e) => {
    if (value === undefined) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  const handleSearch = () => {
    onSearch?.(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <label
        htmlFor={id}
        className={
          label
            ? "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
            : "sr-only"
        }
      >
        {label || placeholder}
      </label>

      <div className="relative flex items-center">
        {icon1 && (
          <span
            className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none "
            aria-hidden="true"
          >
            {icon1}
          </span>
        )}

        <input
          id={id}
          type="search"
          role="searchbox"
          aria-label={label || placeholder}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={disabled}
          className={`
            w-full
            ${icon1 ? "pl-10" : "pl-4"}
            ${icon2 ? "pr-10" : "pr-4"}
            py-2.5 text-sm
            text-slate-800 dark:text-white
            bg-white dark:bg-slate-800
            border border-slate-300 dark:border-slate-600
            rounded-full shadow-sm outline-none
            placeholder:text-slate-400
            focus:ring-2 focus:ring-slate-300 focus:border-transparent
            disabled:opacity-50 disabled:cursor-not-allowed
            transition-all duration-200
          `}
        />

        {icon2 && (
          <button
            type="button"
            onClick={onFilterClick}
            aria-label="Filter results"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
          >
            {icon2}
          </button>
        )}
      </div>
    </div>
  );
}

export default Search;
