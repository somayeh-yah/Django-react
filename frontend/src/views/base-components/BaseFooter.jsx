import { useState } from "react";

const footerLink = "block py-1 text-gray-400 hover:text-white transition-colors text-sm";

function BaseFooter() {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <footer className="pt-5 lg:pt-8 bg-gray-900 text-white mt-5">
      <div className="mx-auto max-w-7xl px-4 lg:mt-2">

        {/* Main grid — 2 cols on mobile, 12-col on md+ */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-12">

          {/* About — full on mobile, 6/12 on md, 4/12 on lg */}
          <div className="col-span-2 md:col-span-6 lg:col-span-4 mb-4">
            <h2 className="text-xl font-bold mb-3">Lorem ipsum</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Laborum id quidem nisi. Sed odio maiores aut enim voluptatem
              eius, facilis cupiditate ipsa tenetur.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company — half on mobile, 3/12 on md, offset+2/12 on lg */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 lg:col-start-6 mb-4">
            <h3 className="font-bold mb-3">Company</h3>
            <ul className="list-none space-y-1">
              {["About", "Pricing", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className={footerLink}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support — half on mobile, 3/12 on md, 2/12 on lg */}
          <div className="col-span-1 md:col-span-3 lg:col-span-2 mb-4">
            <h3 className="font-bold mb-3">Support</h3>
            <ul className="list-none space-y-1">
              {["Help and Support", "Become Instructor", "Get the app", "FAQ’s", "Tutorial"].map((item) => (
                <li key={item}>
                  <a href="#" className={footerLink}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — full on md, 3/12 on lg */}
          <div className="col-span-2 md:col-span-12 lg:col-span-3 mb-4">
            <h3 className="font-bold mb-3">Get in touch</h3>
            <p className="text-gray-400 text-sm">123 Main Street, U.S.A</p>
            <p className="text-gray-400 text-sm mb-1">
              Email:{" "}
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                support@hello.com
              </a>
            </p>
            <p className="text-gray-400 text-sm">
              Phone: <span className="text-white font-semibold">(000) 146 958 305</span>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 border-t border-gray-700 py-4 mt-6">
          {/* Copyright + legal links */}
          <div className="flex-1">
            <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6">
              <span className="text-sm text-gray-400">© HelloWorld</span>
              <nav className="flex flex-wrap gap-x-4 gap-y-1">
                <a href="#" className={footerLink}>Privacy Policy</a>
                <a href="#" className={footerLink}>Cookie Notice</a>
                <a href="#" className={`${footerLink} hidden lg:block`}>
                  Do Not Sell My Personal Information
                </a>
                <a href="#" className={footerLink}>Terms of Use</a>
              </nav>
            </div>
          </div>

          {/* Language picker — React state replaces Bootstrap JS dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              aria-expanded={langOpen}
              aria-haspopup="listbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
              </svg>
              Language
              <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
              </svg>
            </button>
            {langOpen && (
              <ul
                role="listbox"
                className="absolute bottom-full mb-2 right-0 w-36 bg-gray-800 border border-gray-700 rounded-md shadow-lg overflow-hidden z-10"
              >
                {[
                  { label: "English", flag: "🇬🇧" },
                  { label: "Français", flag: "🇫🇷" },
                  { label: "Deutsch", flag: "🇩🇪" },
                ].map(({ label, flag }) => (
                  <li key={label}>
                    <button
                      type="button"
                      role="option"
                      onClick={() => setLangOpen(false)}
                      className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors text-left cursor-pointer"
                    >
                      <span aria-hidden="true">{flag}</span>
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
}

export default BaseFooter;
