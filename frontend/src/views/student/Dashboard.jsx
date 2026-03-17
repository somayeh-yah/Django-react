import { Link } from "react-router-dom";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";
import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import Search from "../../components/search/Search";
import { icons } from "../../utils/icons";

function Dashboard() {
  return (
    <>
      <BaseHeader />
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <Header />
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <Sidebar />
            <div className="flex-1">
              {/* Stats */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-4 text-body">
                  <i className="bi bi-grid-fill mr-2" /> Dashboard
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Link to="/courses">
                    <div className="card flex items-center gap-4 p-5 bg-orange-100 dark:bg-orange-800/20 hover:-translate-y-0.5 transition-transform">
                      <span className="text-4xl text-orange-500">
                        <i className="fas fa-tv" />
                      </span>
                      <div>
                        <h5 className="text-2xl font-bold text-body">0</h5>
                        <p className="text-sm text-muted">Total Courses</p>
                      </div>
                    </div>
                  </Link>

                  <Link to="#">
                    <div className="card flex items-center gap-4 p-5 bg-red-100 dark:bg-red-800/20 hover:-translate-y-0.5 transition-transform">
                      <span className="text-4xl text-purple-500">
                        <i className="fas fa-clipboard-check" />
                      </span>
                      <div>
                        <h5 className="text-2xl font-bold text-body">0</h5>
                        <p className="text-sm text-muted">Complete Lessons</p>
                      </div>
                    </div>
                  </Link>

                  <Link to="#">
                    <div className="card flex items-center gap-4 p-5 bg-green-100 dark:bg-green-800/20 hover:-translate-y-0.5 transition-transform">
                      <span className="text-4xl text-success">
                        <i className="fas fa-medal" />
                      </span>
                      <div>
                        <h5 className="text-2xl font-bold text-body">0</h5>
                        <p className="text-sm text-muted">
                          Achieved Certificates
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Courses Table */}
              <div className="card overflow-hidden">
                <div className="p-5 border-b border-br">
                  <h3 className="text-lg font-semibold text-body">Courses</h3>
                  <p className="text-sm text-muted">
                    Start watching courses now from your dashboard page.
                  </p>
                </div>
                <div className="p-4 max-w-xl flex items-center justify-center">
                  <Search
                    icon1={icons.search}
                    className="search-input pl-4"
                    placeholder="Search Your Courses"
                  />
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-surface text-muted border-b border-br">
                      <tr>
                        <th className="px-4 py-3 font-medium">Courses</th>
                        <th className="px-4 py-3 font-medium">Date Enrolled</th>
                        <th className="px-4 py-3 font-medium">Lectures</th>
                        <th className="px-4 py-3 font-medium">Completed</th>
                        <th className="px-4 py-3 font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-br">
                      <tr className="hover:bg-surface transition-colors">
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <img
                              src="https://geeksui.codescandy.com/geeks/assets/images/course/course-wordpress.jpg"
                              alt="course"
                              className="w-20 h-14 object-cover rounded-lg"
                            />
                            <div>
                              <h4 className="font-medium text-body">
                                Create a Website with WordPress
                              </h4>
                              <div className="flex items-center gap-3 text-xs text-muted mt-1">
                                <span>
                                  <i className="bi bi-clock-history mr-1" />
                                  1hr 30 Mins
                                </span>
                                <span>
                                  <i className="bi bi-reception-4 mr-1" />
                                  Beginner
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-muted">7/11/2025</td>
                        <td className="px-4 py-3 text-muted">15</td>
                        <td className="px-4 py-3 text-muted">7</td>
                        <td className="px-4 py-3">
                          <button className="btn-primary">
                            Continue Course <i className="fas fa-arrow-right" />
                          </button>
                        </td>
                      </tr>
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
