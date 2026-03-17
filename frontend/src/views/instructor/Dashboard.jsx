import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";

const btnSm = "px-3 py-1.5 text-xs rounded-lg transition-colors font-medium";
const btnPrimSm = `${btnSm} bg-bt-strong hover:bg-bt-strong-hover text-hover`;
const btnDangerSm = `${btnSm} bg-red-500 hover:bg-red-600 text-white`;
const btnSecSm = `${btnSm} bg-gray-500 hover:bg-gray-600 text-white`;

function Dashboard() {
  return (
    <>
      <BaseHeader />

      <section className="pt-5 pb-5">
        <div className="mx-auto max-w-7xl px-4">
          <Header />
          <div className="grid grid-cols-12 gap-6 mt-0 md:mt-4">
            <Sidebar />
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <h4 className="col-span-full text-lg font-semibold text-body mb-0">
                  <i className="bi bi-grid-fill mr-2" /> Dashboard
                </h4>
                {/* Counter: Courses */}
                <div className="flex justify-center items-center p-4 bg-yellow-50 dark:bg-yellow-500/10 rounded-xl">
                  <span className="text-4xl leading-none text-yellow-500">
                    <i className="fas fa-tv fa-fw" />
                  </span>
                  <div className="ml-4">
                    <h5 className="font-bold text-body mb-0">0</h5>
                    <p className="mb-0 text-sm text-muted font-light">Total Courses</p>
                  </div>
                </div>
                {/* Counter: Students */}
                <div className="flex justify-center items-center p-4 bg-red-50 dark:bg-red-500/10 rounded-xl">
                  <span className="text-4xl leading-none text-red-500">
                    <i className="fas fa-graduation-cap fa-fw" />
                  </span>
                  <div className="ml-4">
                    <h5 className="font-bold text-body mb-0">0</h5>
                    <p className="mb-0 text-sm text-muted font-light">Total Students</p>
                  </div>
                </div>
                {/* Counter: Revenue */}
                <div className="flex justify-center items-center p-4 bg-green-50 dark:bg-green-500/10 rounded-xl">
                  <span className="text-4xl leading-none text-green-500">
                    <i className="fas fa-dollar-sign fa-fw" />
                  </span>
                  <div className="ml-4">
                    <h5 className="font-bold text-body mb-0">$0.00</h5>
                    <p className="mb-0 text-sm text-muted font-light">Total Revenue</p>
                  </div>
                </div>
              </div>

              {/* Courses table */}
              <div className="bg-surface rounded-xl shadow mb-4">
                <div className="px-6 py-4 border-b border-br">
                  <h3 className="text-lg font-bold text-body mb-1">Courses</h3>
                  <span className="text-sm text-muted">
                    Manage your courses from here, search, view, edit or delete courses.
                  </span>
                </div>
                <div className="p-6 border-b border-br">
                  <input
                    type="search"
                    className="w-full border border-br rounded-lg px-3 py-2.5 bg-background text-body placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors"
                    placeholder="Search Your Courses"
                  />
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm whitespace-nowrap">
                    <thead className="bg-gray-50 dark:bg-background text-left">
                      <tr>
                        <th className="px-4 py-3 font-medium text-muted">Courses</th>
                        <th className="px-4 py-3 font-medium text-muted">Enrolled</th>
                        <th className="px-4 py-3 font-medium text-muted">Level</th>
                        <th className="px-4 py-3 font-medium text-muted">Status</th>
                        <th className="px-4 py-3 font-medium text-muted">Date Created</th>
                        <th className="px-4 py-3 font-medium text-muted">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-br">
                      {[
                        {
                          img: "https://geeksui.codescandy.com/geeks/assets/images/course/course-python.jpg",
                          title: "Create a Website with WordPress",
                        },
                        {
                          img: "https://geeksui.codescandy.com/geeks/assets/images/course/course-react.jpg",
                          title: "Create a Website with WordPress",
                        },
                      ].map((course, i) => (
                        <tr key={i} className="hover:bg-background/50">
                          <td className="px-4 py-3">
                            <div className="flex items-center">
                              <a href="#">
                                <img
                                  src={course.img}
                                  alt="course"
                                  className="rounded object-cover"
                                  style={{ width: "100px", height: "70px", objectFit: "cover" }}
                                />
                              </a>
                              <div className="ml-3">
                                <a href="#" className="font-medium text-body hover:underline text-sm block mb-1">
                                  {course.title}
                                </a>
                                <div className="flex gap-3 text-xs text-muted">
                                  <span><i className="bi bi-clock-history mr-1" />1hr 30 Mins</span>
                                  <span><i className="bi bi-reception-4 mr-1" />Beginner</span>
                                  <span><i className="fas fa-dollar-sign mr-0.5" />30.99</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 text-body">71</td>
                          <td className="px-4 py-3">
                            <span className="text-xs font-medium px-2 py-0.5 rounded bg-green-100 text-green-800">Intermediate</span>
                          </td>
                          <td className="px-4 py-3">
                            <span className="text-xs font-medium px-2 py-0.5 rounded bg-yellow-100 text-yellow-800">Intermediate</span>
                          </td>
                          <td className="px-4 py-3 text-muted">07 Aug, 2025</td>
                          <td className="px-4 py-3">
                            <div className="flex gap-1">
                              <button className={btnPrimSm}><i className="fas fa-edit" /></button>
                              <button className={btnDangerSm}><i className="fas fa-trash" /></button>
                              <button className={btnSecSm}><i className="fas fa-eye" /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

export default Dashboard;
