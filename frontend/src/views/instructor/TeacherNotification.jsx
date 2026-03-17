import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";

function TeacherNotification() {
  return (
    <>
      <BaseHeader />

      <section className="pt-5 pb-5">
        <div className="mx-auto max-w-7xl px-4">
          <Header />
          <div className="grid grid-cols-12 gap-6 mt-0 md:mt-4">
            <Sidebar />
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              <div className="bg-surface rounded-xl shadow mb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 py-4 border-b border-br">
                  <div>
                    <h3 className="text-lg font-bold text-body mb-0">Notifications</h3>
                    <span className="text-sm text-muted">Manage all your notifications from here</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="shadow rounded-xl p-4">
                      <div className="flex">
                        <div className="ml-3 mt-2">
                          <h4 className="font-semibold text-body mb-0">New Enrollment</h4>
                          <p className="text-sm text-muted mt-1">
                            <span className="font-semibold">Date: </span>
                            <span className="font-normal">30/11/24</span>
                          </p>
                          <button
                            type="button"
                            className="px-3 py-1.5 border border-gray-400 text-body hover:bg-background rounded-lg transition-colors text-sm"
                          >
                            Mark as Seen <i className="fas fa-check ml-1" />
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
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

export default TeacherNotification;
