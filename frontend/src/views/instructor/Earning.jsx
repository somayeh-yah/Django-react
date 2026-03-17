import { useState } from "react";
import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";

function Earning() {
  const [dropOpen, setDropOpen] = useState(false);

  return (
    <>
      <BaseHeader />

      <section className="pt-5 pb-5">
        <div className="mx-auto max-w-7xl px-4">
          <Header />
          <div className="grid grid-cols-12 gap-6 mt-0 md:mt-4">
            <Sidebar />
            <div className="col-span-12 md:col-span-8 lg:col-span-9">

              {/* Summary card */}
              <div className="bg-surface rounded-xl shadow mb-4 p-6">
                <h3 className="text-lg font-bold text-body mb-1">Earnings</h3>
                <p className="text-sm text-muted mb-0">
                  You have full control to manage your own account setting.
                </p>
              </div>

              {/* Earnings detail */}
              <div className="bg-surface rounded-xl shadow mb-4">
                <div className="flex items-center justify-between px-6 py-4 border-b border-br">
                  <h4 className="font-semibold text-body mb-0">Earnings</h4>
                  <div className="relative">
                    <button
                      onClick={() => setDropOpen(!dropOpen)}
                      className="p-2 rounded-full hover:bg-background transition-colors text-muted"
                    >
                      <i className="fe fe-more-vertical" />
                    </button>
                    {dropOpen && (
                      <div className="absolute right-0 mt-1 w-36 bg-surface border border-br rounded-lg shadow-lg z-10">
                        <p className="px-4 py-2 text-xs font-semibold text-muted uppercase">Setting</p>
                        <button
                          className="w-full text-left px-4 py-2 text-sm text-body hover:bg-background transition-colors"
                          onClick={() => setDropOpen(false)}
                        >
                          30 Days
                        </button>
                        <button
                          className="w-full text-left px-4 py-2 text-sm text-body hover:bg-background transition-colors"
                          onClick={() => setDropOpen(false)}
                        >
                          2 Months
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                    <div className="border border-br p-4 rounded-xl shadow-sm">
                      <i className="fe fe-shopping-cart text-green-500 text-lg mt-2 block" />
                      <h3 className="text-4xl font-bold mt-3 mb-0 text-body">$95.00</h3>
                      <span className="text-sm text-muted">Monthly Earnings (Jan)</span>
                    </div>
                    <div className="border border-br p-4 rounded-xl shadow-sm">
                      <i className="fe fe-shopping-cart text-green-500 text-lg mt-2 block" />
                      <h3 className="text-4xl font-bold mt-3 mb-0 text-body">$25.00</h3>
                      <span className="text-sm text-muted">Your Revenue</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Best Selling Courses */}
              <div className="bg-surface rounded-xl shadow mb-4">
                <div className="px-6 py-4 border-b border-br">
                  <h3 className="text-base font-bold text-body mb-0">Best Selling Courses</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm whitespace-nowrap">
                    <thead className="bg-gray-50 dark:bg-background text-left">
                      <tr>
                        <th className="px-4 py-3 font-medium text-muted">Courses</th>
                        <th className="px-4 py-3 font-medium text-muted">Sales</th>
                        <th className="px-4 py-3 font-medium text-muted">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-br">
                      <tr className="hover:bg-background/50">
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <img
                              src="https://geeksui.codescandy.com/geeks/assets/images/course/course-laravel.jpg"
                              alt="course"
                              className="rounded object-cover"
                              style={{ width: "100px", height: "70px", objectFit: "cover" }}
                            />
                            <h5 className="font-medium text-body text-sm ml-3 mb-0">
                              Building Scalable APIs with GraphQL
                            </h5>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-body">34</td>
                        <td className="px-4 py-3 text-body">$3,145.23</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Earning History */}
              <div className="bg-surface rounded-xl shadow mb-4">
                <div className="px-6 py-4 border-b border-br">
                  <h3 className="text-base font-bold text-body mb-0">Earning History</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm whitespace-nowrap">
                    <thead className="bg-gray-50 dark:bg-background text-left">
                      <tr>
                        <th className="px-4 py-3 font-medium text-muted">Month</th>
                        <th className="px-4 py-3 font-medium text-muted">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-br">
                      <tr className="hover:bg-background/50">
                        <td className="px-4 py-3 text-body">January 2024</td>
                        <td className="px-4 py-3 text-body">$1200</td>
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

export default Earning;
