function FilterBtn({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
        active
          ? "bg-primary text-inverted shadow-sm"
          : "bg-surface border border-br text-muted hover:border-primary hover:text-primary"
      }`}
    >
      {label}
    </button>
  );
}

export default FilterBtn;
