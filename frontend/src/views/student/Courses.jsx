import { Link } from "react-router-dom";

function Courses() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-4 text-body">
            <i className="fas fa-shopping-cart mr-2" /> My Courses
          </h4>

          <div className="card overflow-hidden">
            <div className="p-5 border-b border-br">
              <p className="text-sm text-muted">
                Start watching courses now from your dashboard page.
              </p>
            </div>
            <div className="p-4">
              <input
                type="search"
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
                    <th className="px-4 py-3 font-medium">Completed Lecture</th>
                    <th className="px-4 py-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-br">
                  <tr className="hover:bg-surface transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <img
                          src="https://geeksui.codescandy.com/geeks/assets/images/course/course-react.jpg"
                          alt="course"
                          className="w-20 h-14 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-medium text-body">Learn React</h4>
                          <div className="flex items-center gap-3 text-xs text-muted mt-1">
                            <span>
                              <i className="bi bi-reception-4 mr-1" />
                              Beginner
                            </span>
                            <span>
                              <i className="bi bi-mic mr-1" />
                              English
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-muted">7/11/2025</td>
                    <td className="px-4 py-3 text-muted">15</td>
                    <td className="px-4 py-3 text-muted">7</td>
                    <td className="px-4 py-3">
                      <Link
                        to="/student/courses/course_id/"
                        className="btn-primary"
                      >
                        Continue Course <i className="fas fa-arrow-right" />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
