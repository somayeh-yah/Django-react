import { Link } from "react-router-dom";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";

const starPath =
  "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z";

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="currentColor"
    className="inline text-yellow-400"
    viewBox="0 0 16 16"
  >
    <path d={starPath} />
  </svg>
);

const Stars = ({ count = 5 }) => (
  <span className="inline-flex gap-0.5 align-top">
    {Array.from({ length: count }, (_, i) => (
      <StarIcon key={i} />
    ))}
  </span>
);



const CourseCard = ({ image, title }) => (
  <div className="bg-surface rounded-xl shadow overflow-hidden hover:shadow-lg transition-shadow">
    <Link to="/course-detail/slug/">
      <img src={image} alt="course" className="w-full h-48 object-cover" />
    </Link>
    <div className="p-4">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-medium px-2 py-0.5 rounded bg-cyan-100 text-cyan-800">
          Intermediate
        </span>
        <button type="button" className="text-base">
          <i className="fas fa-heart text-red-500 align-middle" />
        </button>
      </div>
      <h4 className="mb-2 line-clamp-2 text-base font-semibold">
        <Link to="/course-detail/slug/" className="text-body hover:underline">
          {title}
        </Link>
      </h4>
      <small className="block text-muted">By: Claire Evans</small>
      <small className="block text-muted">16k Students</small>
      <div className="leading-none mt-3 flex items-center gap-1">
        <Stars />
        <span className="text-yellow-400 text-sm">4.5</span>
        <span className="text-sm text-muted ml-1">(9,300)</span>
      </div>
    </div>
    <div className="border-t border-br px-4 py-3">
      <div className="flex justify-between items-center">
        <h5 className="font-semibold text-body">$39.00</h5>
        <div className="flex gap-2">
          <button type="button" className="btn-primary">
            <i className="fas fa-shopping-cart" />
          </button>
          <Link to="" className="btn-primary ">
            Enroll Now <i className="fas fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialCard = () => (
  <div className="bg-surface rounded-xl shadow p-6 text-center">
    <img
      src="../../assets/images/avatar/avatar-1.jpg"
      alt="avatar"
      className="w-16 h-16 rounded-full mx-auto object-cover"
    />
    <p className="mt-3 mb-0 text-muted text-sm">
      &ldquo;The generated lorem Ipsum is therefore always free from repetition,
      injected humour, or words etc generate lorem Ipsum which looks racteristic
      reasonable.&rdquo;
    </p>
    <div className="leading-none mb-3 mt-4 flex justify-center items-center gap-1">
      <Stars count={5} />
      <span className="text-yellow-400 text-sm ml-1">5</span>
    </div>
    <h3 className="text-lg font-bold text-body mb-0">Gladys Colbert</h3>
    <span className="text-sm text-muted">Software Engineer at Palantir</span>
  </div>
);

function Index() {
  return (
    <>
      <BaseHeader />

      {/* Hero */}
      <section className="py-5 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 my-8 lg:my-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div>
              <h5 className="text-gray-800 dark:text-body mb-4 font-semibold">
                <i className="fe fe-check mr-2 text-green-500" />
                Most trusted education platform
              </h5>
              <h1 className="text-5xl font-bold mb-3 text-body">
                Grow your skills and advance career
              </h1>
              <p className="lg:pr-10 mb-5 text-muted">
                Start, switch, or advance your career with more than 5,000
                courses, Professional Certificates, and degrees from
                world-class universities and companies.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="btn-primary">
                  Join Free Now <i className="fas fa-plus" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=Nfzi7034Kbg"
                  className="inline-flex items-center gap-2 border border-green-500 text-green-600 hover:bg-green-500 hover:text-white font-semibold py-2.5 px-4 rounded-lg transition-colors text-sm"
                >
                  Watch Demo <i className="fas fa-video" />
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img
                  src="https://geeksui.codescandy.com/geeks/assets/images/background/acedamy-img/girl-image.png"
                  alt="girl"
                  className="object-contain max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-8">
        <div className="mx-auto max-w-7xl px-4 lg:mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 mb-5 divide-x divide-y divide-br">
            <div className="py-7 text-center">
              <div className="mb-3">
                <i className="fe fe-award text-3xl text-cyan-500" />
              </div>
              <div className="leading-none">
                <h2 className="mb-1 text-2xl font-bold text-body">316,000+</h2>
                <span className="text-muted text-sm">Qualified Instructor</span>
              </div>
            </div>
            <div className="py-7 text-center">
              <div className="mb-3">
                <i className="fe fe-users text-3xl text-yellow-400" />
              </div>
              <div className="leading-none">
                <h2 className="mb-1 text-2xl font-bold text-body">1.8 Billion+</h2>
                <span className="text-muted text-sm">Course enrolments</span>
              </div>
            </div>
            <div className="py-7 text-center">
              <div className="mb-3">
                <i className="fe fe-tv text-3xl text-blue-600" />
              </div>
              <div className="leading-none">
                <h2 className="mb-1 text-2xl font-bold text-body">41,000+</h2>
                <span className="text-muted text-sm">Courses in 42 languages</span>
              </div>
            </div>
            <div className="py-7 text-center">
              <div className="mb-3">
                <i className="fe fe-film text-3xl text-green-500" />
              </div>
              <div className="leading-none">
                <h2 className="mb-1 text-2xl font-bold text-body">179,000+</h2>
                <span className="text-muted text-sm">Online Videos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="mb-5">
        <div className="mx-auto max-w-7xl px-4 lg:mb-16">
          <div className="mb-5 mt-3">
            <div className="mb-6">
              <h2 className="mb-1 text-3xl font-bold text-body">
                Most Popular Courses
              </h2>
              <p className="text-muted">
                These are the most popular courses among Geeks Courses learners
                worldwide in year 2022
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <CourseCard
              image="https://geeksui.codescandy.com/geeks/assets/images/course/course-css.jpg"
              title="How to easily create a website with JavaScript"
            />
            <CourseCard
              image="https://geeksui.codescandy.com/geeks/assets/images/course/course-angular.jpg"
              title="How to easily create a website with JavaScript"
            />
            <CourseCard
              image="https://geeksui.codescandy.com/geeks/assets/images/course/course-react.jpg"
              title="Learn React.Js for Beginners from Start to Finish"
            />
            <CourseCard
              image="https://geeksui.codescandy.com/geeks/assets/images/course/course-python.jpg"
              title="How to easily create a website with JavaScript"
            />
          </div>

          {/* Pagination */}
          <nav className="flex items-center gap-1 mt-5" aria-label="Courses pagination">
            <button className="px-3 py-1.5 rounded border border-br text-sm text-body hover:bg-surface transition-colors">
              <i className="ci-arrow-left mr-1" />
              Previous
            </button>
            <button className="px-3 py-1.5 rounded border border-bt-strong bg-bt-strong text-hover text-sm font-medium">
              1
            </button>
            <button className="px-3 py-1.5 rounded border border-br text-sm text-body hover:bg-surface transition-colors">
              Next
              <i className="ci-arrow-right ml-1" />
            </button>
          </nav>
        </div>
      </section>

      {/* Become an Instructor CTA */}
      <section className="my-8 py-8 lg:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center bg-bt-strong rounded-xl mt-5 overflow-hidden">
            <div className="hidden lg:flex lg:col-span-6 justify-center pt-4">
              <div className="relative">
                <img
                  src="https://geeksui.codescandy.com/geeks/assets/images/png/cta-instructor-1.png"
                  alt="instructor"
                  className="max-w-full h-auto -mt-8"
                />
                <div className="absolute bottom-0 left-0 mb-6 -ml-8">
                  <img
                    src="https://geeksui.codescandy.com/geeks/assets/images/svg/dollor.svg"
                    alt="dollar"
                  />
                </div>
                <div className="absolute top-0 right-0 -mr-4">
                  <img
                    src="https://geeksui.codescandy.com/geeks/assets/images/svg/graph.svg"
                    alt="graph"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 col-span-full">
              <div className="text-white p-5 lg:p-0">
                <h2 className="text-3xl font-bold text-white mb-3">
                  Become an instructor today
                </h2>
                <p className="mb-0 text-white/80">
                  Instructors from around the world teach millions of students
                  on Geeks. We provide the tools and skills to teach what you
                  love.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold mt-4 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Teaching Today <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 dark:bg-surface pt-8 pb-8 mt-5">
        <div className="mx-auto max-w-7xl px-4 pb-8">
          <div className="grid grid-cols-12 mb-8 lg:mb-16">
            <div className="col-span-12 lg:col-start-2 lg:col-span-10">
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <Stars count={5} />
                    <span className="text-gray-800 dark:text-body font-semibold">
                      4.5/5.0
                    </span>
                    <span className="text-muted text-sm">(Based on 3265 ratings)</span>
                  </div>
                  <h2 className="text-3xl font-bold text-body mb-2">
                    What our students say
                  </h2>
                  <p className="text-muted mb-0">
                    Hear from{" "}
                    <span className="text-body font-medium">teachers</span>,{" "}
                    <span className="text-body font-medium">trainers</span>, and{" "}
                    <span className="text-body font-medium">leaders</span> in
                    the learning space about how Geeks empowers them to provide
                    quality online learning experiences.
                  </p>
                </div>
                <div className="md:text-right mt-4 md:mt-0">
                  <a href="#" className="btn-primary ">
                    View Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
          </div>
        </div>
      </section>

      <BaseFooter />
    </>
  );
}

export default Index;
