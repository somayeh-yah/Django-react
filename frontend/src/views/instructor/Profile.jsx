import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";

const inputCls =
  "w-full border border-br rounded-lg px-3 py-2.5 bg-background text-body placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors";
const labelCls = "block text-sm font-medium text-body mb-1";

function Profile() {
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
                  <h3 className="text-lg font-bold text-body mb-0">Profile Details</h3>
                  <p className="text-sm text-muted mb-0">
                    You have full control to manage your own account setting.
                  </p>
                </div>
                <form className="p-6">
                  {/* Avatar */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex items-center mb-4 lg:mb-0">
                      <img
                        src="https://eduport.webestica.com/assets/images/avatar/09.jpg"
                        id="img-uploaded"
                        className="rounded-full object-cover"
                        alt="avatar"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <div className="ml-3">
                        <h4 className="font-semibold text-body mb-0">Your avatar</h4>
                        <p className="text-sm text-muted mb-2">
                          PNG or JPG no bigger than 800px wide and tall.
                        </p>
                        <input type="file" className={inputCls} />
                      </div>
                    </div>
                  </div>

                  <hr className="border-br my-6" />

                  <div>
                    <h4 className="font-semibold text-body mb-1">Personal Details</h4>
                    <p className="text-sm text-muted mb-4">
                      Edit your personal information and address.
                    </p>

                    <div className="grid gap-4">
                      <div>
                        <label htmlFor="fname" className={labelCls}>Full Name</label>
                        <input type="text" id="fname" className={inputCls} placeholder="First Name" />
                      </div>
                      <div>
                        <label htmlFor="about" className={labelCls}>About Me</label>
                        <textarea id="about" rows={5} className={inputCls} />
                      </div>
                      <div>
                        <label htmlFor="country" className={labelCls}>Country</label>
                        <input type="text" id="country" className={inputCls} placeholder="Country" />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="px-4 py-2.5 bg-bt-strong hover:bg-bt-strong-hover text-hover rounded-lg transition-colors text-sm font-medium"
                        >
                          Update Profile <i className="fas fa-check-circle ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BaseFooter />
    </>
  );
}

export default Profile;
