import { useState } from "react";
import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";

const inputCls =
  "w-full border border-br rounded-lg px-3 py-2.5 bg-background text-body placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors";

function QA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <BaseHeader />

      <section className="pt-5 pb-5">
        <div className="mx-auto max-w-7xl px-4">
          <Header />
          <div className="grid grid-cols-12 gap-6 mt-0 md:mt-4">
            <Sidebar />
            <div className="col-span-12 md:col-span-8 lg:col-span-9">
              <h4 className="text-lg font-semibold text-body mb-2">
                <i className="fas fa-envelope mr-2" /> Question and Answer
              </h4>

              <div className="bg-surface rounded-xl shadow">
                <div className="px-6 py-4 border-b border-br">
                  <h4 className="font-semibold text-body mb-3">Discussion</h4>
                  <input
                    type="search"
                    className={inputCls}
                    placeholder="Search Questions"
                    aria-label="Search"
                  />
                </div>

                <div className="p-6 space-y-4">
                  {/* Question item */}
                  <div className="shadow rounded-xl p-4">
                    <div className="flex flex-col sm:flex-row sm:justify-between mb-3">
                      <div className="flex items-center">
                        <img
                          src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-4.jpg"
                          className="rounded-full object-cover"
                          alt="avatar"
                          style={{ width: "60px", height: "60px" }}
                        />
                        <div className="ml-2">
                          <h6 className="font-semibold text-body mb-0 text-sm">
                            <a href="#" className="hover:underline text-body">Angelina Fernado</a>
                          </h6>
                          <small className="text-muted">Asked 10 Hours ago</small>
                        </div>
                      </div>
                    </div>
                    <h5 className="font-semibold text-body text-sm mb-1">
                      Note Title{" "}
                      <span className="text-xs font-medium px-2 py-0.5 rounded bg-green-100 text-green-800 ml-1">21</span>
                    </h5>
                    <p className="text-sm text-muted mb-3">Note Content</p>
                    <button
                      onClick={() => setModalOpen(true)}
                      className="px-3 py-1.5 bg-bt-strong hover:bg-bt-strong-hover text-hover rounded-lg transition-colors text-sm font-medium"
                    >
                      Join Conversation <i className="fas fa-arrow-right ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conversations Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-surface rounded-xl shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-br">
              <h3 className="text-lg font-bold text-body">Question: Question Title</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-muted hover:text-body transition-colors"
              >
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="p-6 flex flex-col gap-4 overflow-hidden">
              <div className="border border-br p-4 rounded-xl">
                <ul
                  className="space-y-4 overflow-y-auto"
                  style={{ maxHeight: "400px" }}
                >
                  <li>
                    <div className="flex">
                      <a href="#">
                        <img
                          src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-4.jpg"
                          className="w-10 h-10 rounded-full object-cover"
                          alt="avatar"
                        />
                      </a>
                      <div className="ml-2">
                        <div className="bg-gray-100 dark:bg-background p-3 rounded-xl w-full">
                          <h6 className="font-bold text-body text-sm mb-1">
                            <a href="#" className="hover:underline text-body">Destiny Franks</a>
                            <br />
                            <span className="text-xs text-muted font-normal">20/20/2024</span>
                          </h6>
                          <p
                            className="text-sm text-body mb-0"
                            dangerouslySetInnerHTML={{ __html: "MEssage Here" }}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>

                <form className="flex gap-2 mt-4">
                  <textarea
                    name="message"
                    className={`${inputCls} flex-1`}
                    rows={2}
                    placeholder="What's your question?"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-bt-strong hover:bg-bt-strong-hover text-hover rounded-lg transition-colors text-sm font-medium self-end"
                  >
                    Post <i className="fas fa-paper-plane ml-1" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <BaseFooter />
    </>
  );
}

export default QA;
