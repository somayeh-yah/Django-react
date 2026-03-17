import { useFormContext } from "react-hook-form";
import AvatarUpload from "../AvatarUpload";
import Input from "../Form/Input";
import TextFieldSection from "../Form/TextFieldSection";

// ─── ProfileForm ──────────────────────────────────────────────────
/**
 * 
 *
 * 
 *
 *
 * Props:
 * @param {function} onSubmit      - Submit-handler från föräldern
 * @param {string}   currentImage  - Befintlig bild-URL
 * @param {string}   initials      - Fallback-initialer, t.ex. "JD"
 * @param {ReactNode} extraFields  - Användartyp-specifika fält
 * @param {string}   submitLabel   - Text på submit-knappen
 *
 */
export default function ProfileForm({
  onSubmit,
  currentImage,
  initials,
  extraFields,
  submitLabel = "Save changes",
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useFormContext();

  const inputClass = (hasError) =>
    [
      "w-full px-3.5 py-2.5 rounded-xl border text-sm text-body bg-surface font-sans",
      "transition-all duration-150 outline-none",
      "focus:ring-3 focus:ring-blue-500/20 focus:border-blue-500",
      hasError ? "border-red-400" : "border-slate-200 dark:border-slate-700",
    ].join(" ");

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      {/* ── Card ── */}
      <section
        aria-labelledby="profile-form-heading"
        className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-surface overflow-hidden shadow-sm"
      >
        {/* ── Card header ── */}
        <header className="px-6 py-5 border-b border-slate-200 dark:border-slate-700">
          <h2 id="profile-form-heading" className="text-lg font-bold text-body">
            Profile Details
          </h2>
          <p className="text-sm text-muted mt-0.5">
            Update your personal information and profile picture.
          </p>
        </header>

        {/* ── Form ── */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          aria-label="Profile update form"
          className="px-6 py-6 flex flex-col gap-6"
        >
          {/* ── Avatar section ── */}
          <fieldset className="border-none p-0 m-0">
            <legend className="sr-only">Profile picture</legend>
            <AvatarUpload
              {...register("image")}
              currentImage={currentImage}
              initials={initials}
              error={errors.image?.message}
              label="Profile picture"
              hint={`PNG, JPG, WEBP · max 2 MB`}
              size="md"
            />
          </fieldset>

          <hr
            className="border-slate-200 dark:border-slate-700"
            role="separator"
            aria-hidden="true"
          />

          {/* ── Personal details section ── */}
          <fieldset className="border-none p-0 m-0 flex flex-col gap-5">
            <legend className="text-sm font-bold text-body mb-1">
              Personal details
            </legend>

            {/* Full name */}
            <Input
              id="full_name"
              label="Full name *"
              placeholder="John Doe"
              hint="Minimum 2 characters"
              error={errors.full_name?.message}
              {...register("full_name", {
                required: "Full name is required",
                minLength: { value: 2, message: "Minimum 2 characters" },
                maxLength: { value: 80, message: "Maximum 80 characters" },
              })}
            />

            {/* About */}
            <TextFieldSection
              id="about"
              label="About"
              placeholder="Tell us a little about yourself…"
              error={errors.about?.message}
              hint="Max 300 characters"
              {...register("about", {maxLength: { value: 300, message: "Maximum 300 characters" },})}
            />

            {/* Country */}
            <Input
              id="country"
              label="Country"
              placeholder="Sweden"
              error={errors.country?.message}
              hint="Maximum 60 characters"
              {...register("country", {
                maxLength: { value: 60, message: "Maximum 60 characters" },
              })}
            />
          </fieldset>

          {/* ── Extra fields (per user type) ── */}
          {extraFields && (
            <>
              <hr
                className="border-slate-200 dark:border-slate-700"
                role="separator"
                aria-hidden="true"
              />
              <fieldset className="border-none p-0 m-0 flex flex-col gap-5">
                <legend className="text-sm font-bold text-body mb-1">
                  Additional details
                </legend>
                {extraFields}
              </fieldset>
            </>
          )}

          {/* ── Footer ── */}
          <footer className="flex items-center justify-end gap-3 pt-2 flex-wrap">
            {isDirty && (
              <p
                className="text-xs text-muted"
                aria-live="polite"
                role="status"
              >
                Unsaved changes
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting || !isDirty}
              aria-busy={isSubmitting}
              aria-disabled={isSubmitting || !isDirty}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-bt-strong hover:bg-bt-strong-hover text-hover text-sm font-semibold transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-[0.98] cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  </svg>
                  <span aria-live="polite">Saving…</span>
                </>
              ) : (
                submitLabel
              )}
            </button>
          </footer>
        </form>
      </section>
    </div>
  );
}
