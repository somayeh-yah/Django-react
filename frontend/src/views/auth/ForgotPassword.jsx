import BaseHeader from '../base-components/BaseHeader'
import BaseFooter from '../base-components/BaseFooter'

function ForgotPassword() {
  return (
    <>
      <BaseHeader />

      <section className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-16">
        <div className="w-full max-w-md">
          <div className="bg-surface rounded-xl shadow-md">
            <div className="p-8">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-body mb-1">Forgot Password</h1>
                <p className="text-sm text-muted">Let&apos;s help you get back into your account</p>
              </div>
              <form noValidate>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-body mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="johndoe@gmail.com"
                    required
                    className="w-full border border-br rounded-lg px-3 py-2.5 bg-background text-body placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-bt-strong hover:bg-bt-strong-hover text-hover font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm"
                >
                  Reset Password →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <BaseFooter />
    </>
  )
}

export default ForgotPassword