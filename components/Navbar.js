import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    console.log("navbar open", navbarOpen);
  }, [navbarOpen]);

  return (
    <div className="mb-20">
      <nav className="backdrop-filter backdrop-blur-lg bg-opacity-30 flex max-w-full w-full flex-wrap items-center justify-between px-2 py-3 absolute top-0 z-10">
        <div className="container max-w-full px-4 flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-[#fffded]"
              href="/"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              Satish Panchal
            </Link>
            <button
              className="text-[#fffded] cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => {
                console.log("navbar toggle");
                setNavbarOpen(!navbarOpen);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                fill="white"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 h-full flex items-center text-xs uppercase font-bold leading-snug text-[#fffded] hover:opacity-75 hover:underline"
                  href="#about"
                  onClick={() => setNavbarOpen(false)}
                >
                  <span className="ml-2">About</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 h-full flex items-center text-xs uppercase font-bold leading-snug text-[#fffded] hover:opacity-75 hover:underline"
                  href="#work"
                  onClick={() => setNavbarOpen(false)}
                >
                  <span className="ml-2">Work Exp</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 h-full flex items-center text-xs uppercase font-bold leading-snug text-[#fffded] hover:opacity-75 hover:underline"
                  href="#projects"
                  onClick={() => setNavbarOpen(false)}
                >
                  <span className="ml-2">Projects</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
