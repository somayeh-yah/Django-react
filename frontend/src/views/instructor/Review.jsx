import { useState } from "react";
import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";

const selectCls =
  "w-full border border-br rounded-lg px-3 py-2.5 bg-background text-body text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors";
const inputCls =
  "w-full border border-br rounded-lg px-3 py-2.5 bg-background text-body placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors";

function Review() {
  const [responseOpen, setResponseOpen] = useState(false);

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
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 py-4 border-b border-br">
                  <div className="mb-3 lg:mb-0">
                    <h3 className="text-lg font-bold text-body mb-0">Reviews</h3>
                    <span className="text-sm text-muted">
                      You have full control to manage your own account setting.
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Filter form */}
                  <form className="grid grid-cols-1 xl:grid-cols-12 gap-2 mb-6">
                    <div className="xl:col-span-7">
                      <select className={selectCls}>
                        <option value="">ALL</option>
                        <option>How to easily create a website</option>
                        <option>Grunt: The JavaScript Task...</option>
                        <option>Vue js: The JavaScript Task...</option>
                      </select>
                    </div>
                    <div className="xl:col-span-2">
                      <select className={selectCls}>
                        <option value="">Rating</option>
                        {[1, 2, 3, 4, 5].map((n) => (
                          <option key={n} value={n}>{n}</option>
                        ))}
                      </select>
                    </div>
                    <div className="xl:col-span-3">
                      <select className={selectCls}>
                        <option value="">Sort by</option>
                        <option>Newest</option>
                        <option>Oldest</option>
                      </select>
                    </div>
                  </form>

                  {/* Review item */}
                  <ul className="space-y-4">
                    <li className="shadow rounded-xl p-4">
                      <div className="flex">
                        <img
                          src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-1.jpg"
                          alt="avatar"
                          className="rounded-full object-cover"
                          style={{ width: "70px", height: "70px" }}
                        />
                        <div className="ml-3 mt-2 flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-body mb-0">Eleanor Pena</h4>
                              <span className="text-sm text-muted">2 hour ago</span>
                            </div>
                            <a href="#" title="Report Abuse" className="text-muted hover:text-body">
                              <i className="fe fe-flag" />
                            </a>
                          </div>
                          <div className="mt-2">
                            <span className="inline-flex gap-0.5 mr-1 align-top">
                              {Array.from({ length: 5 }, (_, i) => (
                                <i key={i} className="fas fa-star text-yellow-400 text-sm" />
                              ))}
                            </span>
                            <span className="text-muted text-sm mr-1">for</span>
                            <span className="font-semibold text-body text-sm">Learn React For Beginners</span>
                            <p className="mt-2 text-sm text-body">
                              <span className="font-bold mr-2">
                                Review <i className="fas fa-arrow-right" />
                              </span>
                              The course is very interesting and insightful. I think it should have
                              more downloadable resources.
                            </p>
                            <p className="mt-2 text-sm text-body">
                              <span className="font-bold mr-2">
                                Response <i className="fas fa-arrow-right" />
                              </span>
                              Thanks for the review!
                            </p>
                            <button
                              type="button"
                              onClick={() => setResponseOpen(!responseOpen)}
                              className="px-3 py-1.5 border border-gray-400 text-body hover:bg-background rounded-lg transition-colors text-sm"
                            >
                              Send Response
                            </button>
                            {responseOpen && (
                              <div className="mt-3 bg-surface border border-br rounded-xl p-4">
                                <form>
                                  <div className="mb-3">
                                    <label className="block text-sm font-medium text-body mb-1">
                                      Write Response
                                    </label>
                                    <textarea
                                      rows={4}
                                      className={inputCls}
                                    />
                                  </div>
                                  <button
                                    type="submit"
                                    className="px-4 py-2 bg-bt-strong hover:bg-bt-strong-hover text-hover rounded-lg transition-colors text-sm font-medium"
                                  >
                                    Send Response <i className="fas fa-paper-plane ml-1" />
                                  </button>
                                </form>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
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

export default Review;
