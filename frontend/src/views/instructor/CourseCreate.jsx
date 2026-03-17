import { Link } from "react-router-dom";
import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";

const inputCls =
  "w-full border border-br rounded-lg px-3 py-2.5 bg-background text-body placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors";
const labelCls = "block text-sm font-medium text-body mb-1";
const selectCls =
  "w-full border border-br rounded-lg px-3 py-2.5 bg-background text-body text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors";

function CourseCreate() {
  return (
    <>
      <BaseHeader />

      <section className="pt-5 pb-5">
        <div className="mx-auto max-w-7xl px-4">
          <Header />
          <div className="grid grid-cols-12 gap-6 mt-0 md:mt-4">
            <Sidebar />
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              {/* Page header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between bg-bt-strong rounded-xl py-6 px-8 mb-6">
                <div className="mb-4 lg:mb-0">
                  <h1 className="text-white text-2xl font-bold mb-1">Add New Course</h1>
                  <p className="mb-0 text-white/80 text-sm">
                    Just fill the form and create your courses.
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link
                    to="/instructor/courses/"
                    className="px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                  >
                    <i className="fas fa-arrow-left mr-1" /> Back to Course
                  </Link>
                  <a
                    href="#"
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Save <i className="fas fa-check-circle ml-1" />
                  </a>
                </div>
              </div>

              {/* Form card */}
              <div className="bg-surface rounded-xl shadow mb-3">
                {/* Basic Info */}
                <div className="px-6 py-4 border-b border-br">
                  <h4 className="font-semibold text-body mb-0">Basic Information</h4>
                </div>
                <div className="p-6 grid gap-4">
                  <div>
                    <label className={labelCls}>Thumbnail Preview</label>
                    <img
                      src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
                      alt="thumbnail"
                      className="mb-4 w-full rounded-xl object-cover"
                      style={{ height: "330px" }}
                    />
                  </div>
                  <div>
                    <label htmlFor="courseThumbnail" className={labelCls}>Course Thumbnail</label>
                    <input id="courseThumbnail" type="file" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="introVideo" className={labelCls}>Intro Video</label>
                    <input id="introVideo" type="file" className={inputCls} />
                  </div>
                  <div>
                    <label htmlFor="courseTitle" className={labelCls}>Title</label>
                    <input id="courseTitle" type="text" className={inputCls} />
                    <small className="text-xs text-muted mt-1 block">Write a 60 character course title.</small>
                  </div>
                  <div>
                    <label className={labelCls}>Course Category</label>
                    <select className={selectCls}>
                      <option value="">-------------</option>
                      <option value="React">React</option>
                      <option value="Javascript">Javascript</option>
                      <option value="HTML">HTML</option>
                      <option value="Vue">Vue js</option>
                      <option value="Gulp">Gulp js</option>
                    </select>
                    <small className="text-xs text-muted mt-1 block">
                      Help people find your courses by choosing categories that represent your course.
                    </small>
                  </div>
                  <div>
                    <select className={selectCls}>
                      <option value="">Select level</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="Beginners">Beginners</option>
                      <option value="Advance">Advance</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelCls}>Course Description</label>
                    <textarea rows={10} className={inputCls} />
                    <small className="text-xs text-muted mt-1 block">A brief summary of your courses.</small>
                  </div>
                  <div>
                    <label htmlFor="price" className={labelCls}>Price</label>
                    <input id="price" type="number" placeholder="$20.99" className={inputCls} />
                  </div>
                </div>

                {/* Curriculum */}
                <div className="px-6 py-4 border-t border-br">
                  <h4 className="font-semibold text-body mb-0">Curriculum</h4>
                </div>
                <div className="p-6">
                  <div className="border border-br p-4 rounded-xl mb-3 bg-gray-50 dark:bg-background">
                    <div className="flex gap-2 mb-4">
                      <input type="text" placeholder="Section Name" className={`${inputCls} flex-1`} />
                      <button
                        type="button"
                        className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors text-sm"
                      >
                        <i className="fas fa-trash" />
                      </button>
                    </div>

                    <div className="border border-br mb-2 mt-2 shadow p-3 rounded-xl">
                      <input type="text" placeholder="Lesson Title" className={`${inputCls} mt-2`} />
                      <textarea rows={4} placeholder="Lesson Description" className={`${inputCls} mt-2`} />
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mt-2">
                        <div className="lg:col-span-8">
                          <input type="file" className={inputCls} />
                        </div>
                        <div className="lg:col-span-4 flex items-center gap-2">
                          <label htmlFor="preview1" className="text-sm text-body">Preview</label>
                          <input
                            type="checkbox"
                            id="preview1"
                            className="accent-bt-strong"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="mt-2 px-3 py-1.5 border border-red-400 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-xs"
                      >
                        Delete Lesson <i className="fas fa-trash ml-1" />
                      </button>
                    </div>

                    <button
                      type="button"
                      className="mt-2 px-3 py-1.5 bg-bt-strong hover:bg-bt-strong-hover text-hover rounded-lg transition-colors text-xs font-medium"
                    >
                      + Add Lesson
                    </button>
                  </div>

                  <button
                    type="button"
                    className="w-full mt-2 px-3 py-1.5 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors text-xs font-medium"
                  >
                    + New Section
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="w-full mt-2 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl transition-colors font-semibold"
              >
                Create Course <i className="fas fa-check-circle ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <BaseFooter />
    </>
  );
}

export default CourseCreate;
