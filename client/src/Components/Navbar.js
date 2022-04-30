import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../Images/logo.png";

function Navbar({ tab, sticky }) {
  const [click, setClick] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const scrollFn = () => {
      setOffset(window.pageYOffset)
    }
    window.addEventListener('scroll', scrollFn)

    return () => window.removeEventListener('scroll', scrollFn)
  }, [])
  const handleHamburger = () => {
    if (click === 0) {
      document.getElementById("mobile-menu-4").classList.add("hidden");
      document.getElementById("mobile-menu-4").classList.add("visible");
      setClick(1);
    } else {
      document.getElementById("mobile-menu-4").classList.add("visible");
      document.getElementById("mobile-menu-4").classList.remove("hidden");

      setClick(0);
    }
  };
  return (
    <>
      {/* {... click===0? onClick()=>setClick(1):onClick()=>setClick(0)}  */}

      {/* <nav className="bg-[#000] px-2 sm:px-4 py-6 font-nav" style ={{"fontFamily":"CinzelDecorative-Bold"}} >
        <div className="container text-center flex flex-wrap justify-between items-center mx-auto"> */}

      <nav className={`sticky top-0 bg-[#000] z-[100] ${offset > 100 ? "py-4" : "py-6"} transform ease-linear duration-300 tracking-wider px-1 md:px-4 font-nav  min-w-fit  `}>
        <div className="container text-center flex flex-wrap justify-between items-center content-center mx-auto">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mx-3 h-9 md:h-16" alt="Incridea Logo" />
          </Link>
          <Link
            to="/register"
            className={`block md:hidden border-2 border-[#9d7643] p-2 text-sm font-nav font-bold  hover:bg-gray-50 md:hover:bg-[#8d6633] md:border-0 md:hover:text-white text-[#9d7643]`}
          >
            Login/Register
          </Link>
          <div className="flex md:hidden">
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              onClick={handleHamburger}
              className={`  inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  md:hidden transition-all ease-out duration-150 hover:scale-125 `}
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="justify-between items-center w-full md:flex md:w-auto hidden  md:order-1"
            id="mobile-menu-4"
          >
            <ul
              style={{ fontFamily: "CinzelDecorative-Bold" }}
              className="flex items-center flex-col mt-0 md:flex-row md:space-x-8 md:text-sm  md:font-medium"
            >
              <li>
                <Link
                  to="/"
                  className={`block py-2 pr-4 pl-3  border-none  text-xl  font-nav font-bold hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${tab === "home" ? "text-[#9d7643]" : "text-[#EDEDED]"
                    } `}
                  aria-current="page"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className={`block py-2 pr-4 pl-3  border-none text-xl font-nav  font-bold  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${tab === "events" ? "text-[#9d7643]" : "text-[#EDEDED]"
                    } `}
                >
                  events
                </Link>
              </li>
              <li>
                <Link
                  to="/pronite"
                  className={`block py-2 pr-4 pl-3   text-xl font-nav font-bold  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${tab === "pronite" ? "text-[#9d7643]" : "text-[#EDEDED]"
                    } `}
                >
                  pronites
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className={`block py-2 pr-4 pl-3   text-xl font-nav font-bold  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${tab === "gallery" ? "text-[#9d7643]" : "text-[#EDEDED]"
                    } `}
                >
                  gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/sponsors"
                  className={`block py-2 pr-4 pl-3   text-xl  font-nav font-bold hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${tab === "sponsors" ? "text-[#9d7643]" : "text-[#EDEDED]"
                    } `}
                >
                  sponsors
                </Link>
              </li>

              <li>
                <Link
                  to="/team"
                  className={`block py-2 pr-4 pl-3   text-xl font-nav font-bold  hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#9d7643] md:p-0 ${tab === "team" ? "text-[#9d7643]" : "text-[#EDEDED]"
                    } `}
                >
                  about us
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className={`hidden md:block border-2 border-[#9d7643] py-2 pr-4 pl-3 text-xl font-nav font-bold  hover:bg-gray-50 md:hover:bg-[#8d6633] md:border-0 md:hover:text-white text-[#9d7643]`}
                >
                  Login/Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
