import { forwardRef, useId } from "react";

const TextFieldSection = forwardRef(
  (
    {
      id,
      label,
      error,
      rows = 3,
      className,
      required = false,
      hint,
      resize = "vertical",
      ...rest
    },
    ref,
  ) => {
    const uid = useId();
    const fieldId = id || uid;
    const errorId = `${fieldId}-error`;
    const hintId = `${fieldId}-hint`;

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

        {/* Textarea */}
        <textarea
          id={fieldId}
          rows={rows}
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
            text-heading text-xs rounded-3xl outline-none
            focus:ring-0 focus:border-slate-700
            block w-full p-3.5 shadow-sm
            placeholder:text-slate-400
            ${resize === "none" ? "resize-none" : resize === "horizontal" ? "resize-x" : "resize-y"}
            ${error ? "border-red-400" : ""}
            ${className || ""}
          `}
        />

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

export default TextFieldSection;
