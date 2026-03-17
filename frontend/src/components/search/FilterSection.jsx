import FilterBtn from "../../components/search/FilterBtn";

function FilterSection({ config, activeValue, onSelect }) {
  return (
    <div>
      <p className="text-xs font-semibold text-muted uppercase tracking-sm mb-2">
        <i className={`${config.icon} mr-1.5`} />
        {config.label}
      </p>
      <div className="flex flex-wrap gap-2">
        {config.options.map((option) => (
          <FilterBtn
            key={option.value}
            label={option.label}
            active={activeValue === option.value}
            onClick={() =>
              onSelect(
                config.key,
                activeValue === option.value ? null : option.value,
              )
            }
          />
        ))}
      </div>
    </div>
  );
}

export default FilterSection;
