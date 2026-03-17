import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";

const inputCls =
  "w-full border border-br rounded-lg px-3 py-2.5 bg-background text-body placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors";
const labelCls = "block text-sm font-medium text-body mb-1";

function ChangePassword() {
  return (
    <>
      <BaseHeader />

      <section className="pt-5 pb-5">
        <div className="mx-auto max-w-7xl px-4">
          <Header />
          <div className="grid grid-cols-12 gap-6 mt-0 md:mt-4">
            <Sidebar />
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              <div className="bg-surface rounded-xl shadow">
                <div className="px-6 py-4 border-b border-br">
                  <h3 className="text-lg font-bold text-body mb-0">Change Password</h3>
                </div>
                <div className="p-6">
                  <form className="grid gap-4" noValidate>
                    <div>
                      <label htmlFor="old-password" className={labelCls}>Old Password</label>
                      <input type="password" id="old-password" className={inputCls} placeholder="**************" />
                    </div>
                    <div>
                      <label htmlFor="new-password" className={labelCls}>New Password</label>
                      <input type="password" id="new-password" className={inputCls} placeholder="**************" />
                    </div>
                    <div>
                      <label htmlFor="confirm-password" className={labelCls}>Confirm New Password</label>
                      <input type="password" id="confirm-password" className={inputCls} placeholder="**************" />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="px-4 py-2.5 bg-bt-strong hover:bg-bt-strong-hover text-hover rounded-lg transition-colors text-sm font-medium"
                      >
                        Save New Password <i className="fas fa-check-circle ml-1" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BaseFooter />
    </>
  );
}

export default ChangePassword;
