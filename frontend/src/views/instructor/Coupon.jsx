import { useState } from "react";
import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";

const inputCls =
  "w-full border border-br rounded-lg px-3 py-2.5 bg-background text-body placeholder:text-muted text-sm focus:outline-none focus:ring-2 focus:ring-slate-300 transition-colors";
const labelCls = "block text-sm font-medium text-body mb-1";

function CouponModal({ title, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-surface rounded-xl shadow-xl w-full max-w-md mx-4">
        <div className="flex items-center justify-between px-6 py-4 border-b border-br">
          <h3 className="text-lg font-bold text-body">{title}</h3>
          <button onClick={onClose} className="text-muted hover:text-body transition-colors">
            <i className="fas fa-times" />
          </button>
        </div>
        <div className="p-6">
          <form className="grid gap-4">
            <div>
              <label className={labelCls}>Code</label>
              <input type="text" placeholder="Code" defaultValue="CODE1" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Discount</label>
              <input type="text" placeholder="Discount" defaultValue="20%" className={inputCls} />
            </div>
            <div className="flex gap-2">
              <button
                type="submit"
                className="px-4 py-2 bg-bt-strong hover:bg-bt-strong-hover text-hover rounded-lg transition-colors text-sm font-medium"
              >
                {title.startsWith("Update") ? "Update Coupon" : "Create Coupon"}{" "}
                <i className={title.startsWith("Update") ? "fas fa-check-circle ml-1" : "fas fa-plus ml-1"} />
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function Coupon() {
  const [showUpdate, setShowUpdate] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

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
                    <h3 className="text-lg font-bold text-body mb-0">Coupons</h3>
                    <span className="text-sm text-muted">Manage all your coupons from here</span>
                  </div>
                  <button
                    onClick={() => setShowAdd(true)}
                    className="px-4 py-2 bg-bt-strong hover:bg-bt-strong-hover text-hover rounded-lg transition-colors text-sm font-medium"
                  >
                    Add Coupon
                  </button>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="shadow rounded-xl p-4">
                      <div className="flex">
                        <div className="ml-3 mt-2">
                          <h4 className="font-semibold text-body mb-0">CODE1</h4>
                          <span className="text-sm text-muted">3 Student</span>
                          <p className="text-sm text-body mt-2">
                            <span className="font-semibold">Discount: </span>
                            <span className="font-normal">20% Discount</span>
                          </p>
                          <p className="text-sm text-body mt-1">
                            <span className="font-semibold">Date Created: </span>
                            <span className="font-normal">30/11/24</span>
                          </p>
                          <div className="flex gap-2 mt-2">
                            <button
                              type="button"
                              onClick={() => setShowUpdate(true)}
                              className="px-3 py-1.5 border border-gray-400 text-body hover:bg-background rounded-lg transition-colors text-sm"
                            >
                              Update Coupon
                            </button>
                            <button
                              type="button"
                              className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors text-sm"
                            >
                              <i className="fas fa-trash" />
                            </button>
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

      {showUpdate && (
        <CouponModal
          title={<>Update Coupon - <span className="font-bold">CODE1</span></>}
          onClose={() => setShowUpdate(false)}
        />
      )}
      {showAdd && (
        <CouponModal title="Create New Coupon" onClose={() => setShowAdd(false)} />
      )}

      <BaseFooter />
    </>
  );
}

export default Coupon;
