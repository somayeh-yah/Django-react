import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useAxios from "../../utils/useAxios";
import Header from "./Partials/Header";

export default function Courses() {
  const axiosInstance = useAxios();
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axiosInstance.get("/enrollments/").then((res) => {
      setEnrollments(res.data);
      setLoading(false);
    });
  }, []);

  const filtered = enrollments.filter((e) =>
    e.course.title.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading)
    return (
      <div className="flex items-center justify-center h-48 text-muted">
        Loading...
      </div>
    );

  return (
    <section className="py-8 px-4">
      <Header />
      <div className="max-w-7xl mx-auto">
        {/* <h4 className="text-lg font-semibold mb-4 text-body font-heading">
          🎓 My Courses
        </h4> */}

        <div className="card overflow-hidden">
          {/* header */}
          <div className="p-5 border-b border-br">
            <p className="text-sm text-muted">
              Start watching courses now from your dashboard page.
            </p>
          </div>

          {/* tabell */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-surface text-muted border-b border-br">
                <tr>
                  <th className="px-4 py-3 font-medium tracking-xs">Course</th>
                  <th className="px-4 py-3 font-medium tracking-xs">
                    Date Enrolled
                  </th>
                  <th className="px-4 py-3 font-medium tracking-xs">
                    Lectures
                  </th>
                  <th className="px-4 py-3 font-medium tracking-xs">Action</th>
                </tr>
              </thead>
              <tbody className="border border-b-2 border-br">
                {filtered.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-10 text-center text-muted text-sm"
                    >
                      No courses found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((enrollment) => (
                    <tr
                      key={enrollment.id}
                      className="hover:bg-hover/10 transition-colors"
                    >
                      {/* kursbild + info */}
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={enrollment.course.image}
                            alt="course"
                            className="w-20 h-14 object-cover rounded-xl shadow-sm"
                          />
                          <div>
                            <h4 className="font-medium text-body">
                              {enrollment.course.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-muted">
                                <i className="bi bi-reception-4 mr-1" />
                                {enrollment.course.level}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* datum */}
                      <td className="px-4 py-3 text-muted">
                        {new Date(enrollment.enrolled_at).toLocaleDateString()}
                      </td>

                      {/* antal lektioner */}
                      <td className="px-4 py-3 text-muted">
                        {enrollment.course.lesson_count}
                      </td>

                      {/* knapp */}
                      <td className="px-4 py-3">
                        <Link
                          to={`/student/courses/${enrollment.course.slug}/`}
                          className="btn-primary"
                        >
                          Continue <i className="fas fa-arrow-right" />
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
