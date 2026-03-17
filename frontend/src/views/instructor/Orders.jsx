import Sidebar from "./Partials/Sidebar";
import Header from "./Partials/Header";
import BaseHeader from "../base-components/BaseHeader";
import BaseFooter from "../base-components/BaseFooter";

function Orders() {
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
                <div className="px-6 py-4 border-b border-br">
                  <h3 className="text-lg font-bold text-body mb-1">Orders</h3>
                  <span className="text-sm text-muted">
                    Order Dashboard is a quick overview of all current orders.
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm whitespace-nowrap">
                    <thead className="bg-gray-50 dark:bg-background text-left">
                      <tr>
                        <th className="px-4 py-3 font-medium text-muted">Courses</th>
                        <th className="px-4 py-3 font-medium text-muted">Amount</th>
                        <th className="px-4 py-3 font-medium text-muted">Invoice</th>
                        <th className="px-4 py-3 font-medium text-muted">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-br">
                      <tr className="hover:bg-background/50">
                        <td className="px-4 py-3">
                          <h5 className="font-medium text-body text-sm">
                            <a href="#" className="hover:underline text-body">
                              Building Scalable APIs with GraphQL
                            </a>
                          </h5>
                        </td>
                        <td className="px-4 py-3 text-body">$89</td>
                        <td className="px-4 py-3 text-muted">#100233</td>
                        <td className="px-4 py-3 text-muted">June 9, 2020</td>
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

export default Orders;
