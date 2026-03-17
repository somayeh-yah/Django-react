import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";

function Students() {
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
                <div className="p-4 flex justify-between items-center border-b border-br">
                  <div>
                    <h3 className="text-lg font-bold text-body mb-0">Students</h3>
                    <span className="text-sm text-muted">Meet people taking your course.</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-surface rounded-xl shadow p-4">
                  <div className="text-center">
                    <img
                      src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg"
                      className="rounded-full mx-auto object-cover mb-3"
                      style={{ width: "70px", height: "70px" }}
                      alt="avatar"
                    />
                    <h4 className="font-semibold text-body mb-1">Flourish Franks</h4>
                    <p className="text-sm text-muted mb-0">
                      <i className="fas fa-map-pin mr-1" /> United States
                    </p>
                  </div>
                  <div className="flex justify-between py-2 mt-4 text-sm border-t border-br">
                    <span className="text-muted">Enrolled</span>
                    <span className="text-body">3/12/2020</span>
                  </div>
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

export default Students;
