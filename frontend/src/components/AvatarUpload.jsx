import { forwardRef, useRef, useState, useId } from "react";

/**
 * AvatarUpload
 *
 * Återanvändbar, tillgänglig filuppladdning för profilbilder.
 * Byggd med semantiska HTML-element.
 *
 * Props:
 * @param {string}   currentImage  - Befintlig bild-URL (valfri)
 * @param {string}   initials      - Fallback-text om ingen bild finns, t.ex. "JD"
 * @param {string}   size          - "sm" | "md" | "lg" (default: "md")
 * @param {function} onChange      - Callback med File-objektet när användaren väljer bild
 * @param {string}   error         - Felmeddelande utifrån (t.ex. från RHF)
 * @param {string}   accept        - Tillåtna filtyper
 * @param {number}   maxSizeMB     - Max filstorlek i MB (default: 2)
 * @param {boolean}  disabled      - Inaktivera uppladdning
 * @param {string}   label         - Synlig label
 * @param {string}   hint          - Hjälptext
 *

 */

const sizeMap = {
  sm: { avatar: "w-14 h-14", text: "text-lg",  icon: 16 },
  md: { avatar: "w-20 h-20", text: "text-2xl", icon: 20 },
  lg: { avatar: "w-28 h-28", text: "text-3xl", icon: 24 },
};

const CameraIcon = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

const TrashIcon = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4h6v2" />
  </svg>
);

const AvatarUpload = forwardRef(function AvatarUpload(
  {
    currentImage,
    initials = "",
    size = "md",
    onChange,
    error,
    accept = "image/png, image/jpeg, image/webp",
    maxSizeMB = 2,
    disabled = false,
    label = "Profile picture",
    hint,
    name,
    onBlur,
    ...rest
  },
  forwardedRef,
) {
  const uid = useId();
  const inputId = `avatar-upload-${uid}`;
  const internalRef = useRef(null);

  // Merge forwarded ref + internal ref
  const setRefs = (el) => {
    internalRef.current = el;
    if (typeof forwardedRef === "function") forwardedRef(el);
    else if (forwardedRef) forwardedRef.current = el;
  };

  const [preview, setPreview] = useState(currentImage || null);
  const [internalError, setInternalError] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const displayError = error || internalError;
  const s = sizeMap[size] ?? sizeMap.md;
  const errorId = `${inputId}-error`;
  const hintId = `${inputId}-hint`;

  // ── Process file ──────────────────────────────────────────────
  const processFile = (file) => {
     if (!file || typeof file !== "object") return;

    if (!file.type.startsWith("image/")) {
      setInternalError("Only image files are allowed.");
      return;
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      setInternalError(`Max file size is ${maxSizeMB} MB.`);
      return;
    }

    setInternalError("");
    setPreview(URL.createObjectURL(file));
    onChange?.(file);
  };

  const handleInputChange = (e) => {
    const file = e?.target?.files?.[0]
    if(!file)return;
    processFile(file);
  };

  const handleRemove = () => {
    setPreview(null);
    setInternalError("");
    if (internalRef.current) internalRef.current.value = "";
    onChange?.(null);
  };

  // ── Drag & drop ───────────────────────────────────────────────
  const handleDragOver = (e) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (disabled) return;
    processFile(e.dataTransfer.files?.[0]);
  };

  return (
    // ── fieldset grupperar label + kontroller semantiskt ──
    <fieldset
      disabled={disabled}
      className="border-none p-0 m-0 w-fit"
    >
      {/* legend = semantisk rubrik för hela gruppen */}
      <legend className="text-sm font-semibold text-body mb-2">
        {label}
      </legend>

      <div className="flex items-center gap-4 flex-wrap">

        {/* ── label wrapping input = semantisk klickyta ── */}
        <label
          htmlFor={inputId}
          aria-describedby={`${hintId} ${errorId}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={[
            "relative rounded-full overflow-hidden cursor-pointer select-none block",
            "focus-within:outline-2 focus-within:outline-offset-3 focus-within:outline-blue-500",
            "transition-all duration-200 group",
            s.avatar,
            isDragging ? "ring-2 ring-blue-500 ring-offset-2" : "",
            disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
          ].join(" ")}
        >
          {/* Bild eller initialer */}
          {preview ? (
            <img
              src={preview}
              alt="Profile preview"
              className="w-full h-full object-cover block"
            />
          ) : (
            <span
              className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-500 to-violet-600"
              aria-hidden="true"
            >
              <span className={`${s.text} font-bold text-white uppercase tracking-wide`}>
                {initials || "?"}
              </span>
            </span>
          )}

          {/* Hover overlay */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-black/55 flex flex-col items-center justify-center gap-1 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <CameraIcon size={s.icon} />
            <span className="text-[10px] font-semibold tracking-wide">
              {preview ? "Change" : "Upload"}
            </span>
          </span>

          {/* Det faktiska file-inputet — gömt men semantiskt kopplat via htmlFor */}
          <input
            ref={setRefs}
            id={inputId}
            type="file"
            accept={accept}
            disabled={disabled}
            name={name}
            onBlur={onBlur}
            onChange={handleInputChange}
            aria-describedby={`${hintId} ${errorId}`}
            className="sr-only"
            {...rest}
          />
        </label>

        {/* ── Meta ── */}
        <div className="flex flex-col gap-1.5">

          {/* Hint */}
          <p id={hintId} className="text-xs text-muted">
            {hint || `PNG, JPG, WEBP · max ${maxSizeMB} MB`}
          </p>

          {/* Remove — semantisk <button> */}
          {preview && !disabled && (
            <button
              type="button"
              onClick={handleRemove}
              aria-label="Remove profile picture"
              className="inline-flex items-center gap-1.5 text-xs text-red-500 hover:text-red-600 font-medium transition-colors w-fit focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 rounded cursor-pointer"
            >
              <TrashIcon size={13} />
              Remove photo
            </button>
          )}

          {/* Error — role="alert" så skärmläsare meddelar direkt */}
          {displayError && (
            <p
              id={errorId}
              role="alert"
              aria-live="polite"
              className="text-xs text-red-500 flex items-center gap-1"
            >
              <span aria-hidden="true">⚠</span>
              {displayError}
            </p>
          )}
        </div>
      </div>
    </fieldset>
  );
});

export default AvatarUpload;
