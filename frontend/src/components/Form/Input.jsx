import { forwardRef, useId } from "react";

const Input = forwardRef(
  (
    {
      id,
      label,
      error,
      placeholder,
      type = "text",
      className,
      icon,
      onChange,
      required = false,
      hint,
      ...rest
    },
    ref,
  ) => {
    const uid = useId();
    const fieldId = id || uid;
    const errorId = `${fieldId}-error`;
    const hintId = `${fieldId}-hint`;

    // ── Checkbox ──────────────────────────────────────────────
    if (type === "checkbox") {
      return (
        <div className="flex items-center gap-2">
          <input
            id={fieldId}
            type="checkbox"
            onChange={onChange}
            ref={ref}
            aria-describedby={error ? errorId : undefined}
            aria-invalid={!!error}
            required={required}
            {...rest}
            className="w-4 h-4 border border-default-medium rounded-lg focus:ring-accent-2 cursor-pointer shadow-sm"
          />
          {label && (
            <label
              htmlFor={fieldId}
              className="text-xs font-semibold text-muted cursor-pointer"
            >
              {label}
              {required && (
                <span className="text-red-500 ml-1" aria-hidden="true">
                  *
                </span>
              )}
            </label>
          )}
          {error && (
            <p
              id={errorId}
              className="text-xs text-red-500"
              role="alert"
              aria-live="polite"
            >
              {error}
            </p>
          )}
        </div>
      );
    }

    // ── Text inputs ───────────────────────────────────────────
    return (
      <div className="flex flex-col gap-1.5">
        {/* Label */}
        {label && (
          <label
            htmlFor={fieldId}
            className="inline-flex items-center gap-1 text-xs font-semibold text-muted"
          >
            {label}
            {required && (
              <span className="text-red-500" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        {/* Input wrapper */}
        <div className="relative">
          {icon && (
            <span
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
              aria-hidden="true"
            >
              {icon}
            </span>
          )}
          <input
            id={fieldId}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            ref={ref}
            required={required}
            aria-invalid={!!error}
            aria-describedby={
              [error ? errorId : null, hint ? hintId : null]
                .filter(Boolean)
                .join(" ") || undefined
            }
            {...rest}
            className={`
              bg-neutral-secondary-medium border border-slate-400
              text-heading text-xs rounded-3xl outline-none focus:ring-0
              focus:border-slate-700 block w-full p-3.5 shadow-sm
              placeholder:text-slate-400
              ${icon ? "pl-9" : ""}
              ${error ? "border-red-400" : ""}
              ${className || ""}
            `}
          />
        </div>

        {/* Hint */}
        {hint && (
          <p id={hintId} className="text-xs text-muted">
            {hint}
          </p>
        )}

        {/* Error */}
        {error && (
          <p
            id={errorId}
            className="text-xs text-red-500 flex items-center gap-1"
            role="alert"
            aria-live="polite"
          >
            <span aria-hidden="true">⚠</span>
            {error}
          </p>
        )}
      </div>
    );
  },
);

export default Input;
