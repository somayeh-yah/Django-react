import { Link } from "react-router-dom";

function QA() {
  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex-1">
          <h4 className="text-lg font-semibold mb-4 text-body">
            <i className="fas fa-envelope mr-2" /> Question and Answer
          </h4>

          <div className="card overflow-hidden">
            <div className="p-5 border-b border-br">
              <span className="text-sm text-muted">
                All Questions and Answers are listed here
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-surface text-muted border-b border-br">
                  <tr>
                    <th className="px-4 py-3 font-medium">Courses</th>
                    <th className="px-4 py-3 font-medium">Questions</th>
                    <th className="px-4 py-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-br">
                  {[
                    {
                      img: "https://geeksui.codescandy.com/geeks/assets/images/course/course-angular.jpg",
                      title: "Angular Masterclass Course",
                      questions: 5,
                    },
                    {
                      img: "https://geeksui.codescandy.com/geeks/assets/images/course/course-react.jpg",
                      title: "Learn React for Beginners",
                      questions: 5,
                    },
                  ].map((course) => (
                    <tr
                      key={course.title}
                      className="hover:bg-surface transition-colors"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={course.img}
                            alt="course"
                            className="w-20 h-14 object-cover rounded-lg"
                          />
                          <h4 className="font-medium text-body">
                            {course.title}
                          </h4>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-muted">
                        {course.questions}
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          to="/student/question-answer/course_id/"
                          className="btn-primary"
                        >
                          Join Conversation <i className="fas fa-arrow-right" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QA;
