"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-40">
      <nav className="py-[25px] relative ease-in-out duration-500 mobile-nav max-[768px]:shadow-[0px_0px_10px_rgb(0,0,0,0.1)] max-[768px]:py-[10px] max-[768px]:bg-white max-[768px]:dark:py-[20px] max-[768px]:dark:bg-semidark">
        <div className="container">
          <div className="flex items-center justify-between md:block">
            <div className="justify-between items-center flex w-full">
              <div className="z-50 relative">
                <Link href="/">
                  <img
                    src="assets/img/logo/logo.png"
                    className="lg:max-w-[150px] max-w-[90px] dark:hidden"
                    alt=""
                  />
                  <img
                    src="assets/img/logo/dark.png"
                    className="lg:max-w-[150px] max-w-[90px] hidden dark:block"
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <button className="block md:hidden outline-none mobile-menu-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              <div className="hidden md:block">
                <ul className="list-none flex space-x-2 lg:space-x-[30px] items-center">
                  {/* Các link cuộn trong 1 page giữ nguyên */}
                  <li className="home active">
                    <a
                      href="#home"
                      className="font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2"
                    >
                      Home
                    </a>
                  </li>
                  <li className="about">
                    <a
                      href="#about"
                      className="font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2"
                    >
                      About
                    </a>
                  </li>
                  <li className="portfolio">
                    <a
                      href="#portfolio"
                      className="font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="service">
                    <a
                      href="#service"
                      className="font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2"
                    >
                      Service
                    </a>
                  </li>
                  <li className="blog">
                    <a
                      href="#blog"
                      className="font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="contact">
                    <a
                      href="#contact"
                      className="font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2"
                    >
                      Contact
                    </a>
                  </li>
                  {/* Ví dụ: nút Download CV điều hướng qua trang riêng */}
                  <li>
                    <Link href="/cv" className="btn-outline-custom relative">
                      Download CV
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          <div className="hidden mobile-menu md:hidden">
            <div className="pt-5">
              <ul>
                <li className="home active">
                  <a
                    href="#home"
                    className="text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2"
                  >
                    Home
                  </a>
                </li>
                <li className="about">
                  <a
                    href="#about"
                    className="text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2"
                  >
                    About
                  </a>
                </li>
                <li className="portfolio">
                  <a
                    href="#portfolio"
                    className="text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="service">
                  <a
                    href="#service"
                    className="text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2"
                  >
                    Service
                  </a>
                </li>
                <li className="blog">
                  <a
                    href="#blog"
                    className="text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2"
                  >
                    Blog
                  </a>
                </li>
                <li className="contact">
                  <a
                    href="#contact"
                    className="text-base font-medium hover:text-custom font-secondary ease-in-out duration-300 inline-block leading-6 p-2"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <Link href="/cv" className="btn-outline-custom relative">
                    Download CV
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
