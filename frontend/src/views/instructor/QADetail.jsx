import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";

const inputCls =
  "w-full border border-br rounded-lg px-3 py-2.5 bg-background text-body placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors";

const messages = [
  {
    avatar: "https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-2.jpg",
    name: "Jenny Adga",
    time: "5hrs Ago",
    text: "Removed demands expense account",
  },
  {
    avatar: "https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-1.jpg",
    name: "Sam Freddy",
    time: "5hrs Ago",
    text: "Removed demands expense account from the debby building in a hall town tak with",
  },
  {
    avatar: "https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg",
    name: "Louis Ferguson",
    time: "5hrs Ago",
    text: "Removed demands expense account",
  },
  {
    avatar: "https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg",
    name: "Louis Ferguson",
    time: "5hrs Ago",
    text: "Removed demands expense account",
  },
];

function QADetail() {
  return (
    <>
      <BaseHeader />

      <section className="pt-5 pb-5">
        <div className="mx-auto max-w-7xl px-4">
          <Header />
          <div className="grid grid-cols-12 gap-6 mt-0 md:mt-4">
            <Sidebar />
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              <h4 className="text-lg font-semibold text-body mb-4">
                <i className="fas fa-envelope mr-2" /> Q/A - Angular Masterclass Course
              </h4>

              <div className="bg-surface rounded-xl shadow mb-4">
                <div className="px-6 py-4 border-b border-br text-sm text-body">
                  <span>Course: <b>Angular Masterclass Course</b></span>
                  <br />
                  <span>Questions: <b>16</b></span>
                </div>
                <div className="p-4">
                  <ul
                    className="space-y-4 overflow-y-auto"
                    style={{ maxHeight: "500px" }}
                  >
                    {messages.map((m, i) => (
                      <li key={i}>
                        <div className="flex">
                          <a href="#">
                            <img
                              src={m.avatar}
                              className="w-10 h-10 rounded-full object-cover"
                              alt="avatar"
                            />
                          </a>
                          <div className="ml-2 flex-1">
                            <div className="bg-gray-100 dark:bg-background p-3 rounded-xl">
                              <h6 className="font-bold text-body text-sm mb-1">
                                <a href="#" className="hover:underline text-body">{m.name}</a>
                                <br />
                                <span className="text-xs text-muted font-normal">{m.time}</span>
                              </h6>
                              <p className="text-sm text-body mb-0 mt-2">{m.text}</p>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <form className="flex gap-2 mt-4">
                    <textarea
                      className={`${inputCls} flex-1`}
                      rows={2}
                      placeholder="Write a message..."
                    />
                    <button
                      type="button"
                      className="px-4 py-2 bg-bt-strong hover:bg-bt-strong-hover text-hover rounded-lg transition-colors text-sm font-medium self-end"
                    >
                      Post <i className="fas fa-paper-plane ml-1" />
                    </button>
                  </form>
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

export default QADetail;
