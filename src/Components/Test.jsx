import { useState, useRef, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { MdOutlineSearch } from "react-icons/md";
import logo from "../assets/images/logo.png";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { GoPeople } from "react-icons/go";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openCategories2, setOpenCategories2] = useState(false);

  // 🔑 ONE ref for whole navbar
  const navRef = useRef(null);

  // 🔥 click anywhere outside = close both dropdowns
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenCategories(false);
        setOpenCategories2(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className="fixed top-0 w-full bg-white z-50 border-b"
      >
        <div className="max-w-350 mx-auto px-4 h-24 flex items-center">
          <img src={logo} alt="logo" className="h-11" />

          {/* LEFT MENU */}
          <div className="flex items-center mx-auto xl:ml-44 lg:ml-20 gap-8">
            <ul className="hidden lg:flex items-center gap-6 text-lg text-gray-800">

              {/* CATEGORIES */}
              <li className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // 🔑 VERY IMPORTANT
                    setOpenCategories(!openCategories);
                    setOpenCategories2(false);
                  }}
                  className="flex items-center gap-1"
                >
                  Categories
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      openCategories ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </li>

              <li className="cursor-pointer hover:text-blue-600">Places</li>
              <li className="cursor-pointer hover:text-blue-600">Events</li>

              {/* VENDOR */}
              <li className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // 🔑 VERY IMPORTANT
                    setOpenCategories2(!openCategories2);
                    setOpenCategories(false);
                  }}
                  className="flex items-center gap-1"
                >
                  Vendor
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      openCategories2 ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>

          {/* SEARCH */}
          <div className="hidden xl:flex">
            <div className="flex items-center border rounded-full px-3">
              <input
                type="text"
                placeholder="Search"
                className="outline-none text-sm"
              />
              <MdOutlineSearch size={20} />
            </div>
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex gap-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded">
              Sign In
            </button>
            <button className="border px-5 py-2 rounded">
              Create Account
            </button>
          </div>

          {/* MOBILE ICON */}
          <button
            className="lg:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <HiMenu size={26} />
          </button>
        </div>

        {/* SOCIAL BAR */}
        <div className="h-12 bg-blue-600 hidden lg:flex items-center justify-end gap-3 px-4 text-white text-xl">
          <CiFacebook />
          <CiTwitter />
          <FaInstagramSquare />
          <FaLinkedin />
        </div>

        {/* CATEGORIES DROPDOWN */}
        {openCategories && (
          <div className="absolute top-full mt-2 bg-blue-500 text-white p-6 grid grid-cols-3 gap-8 left-1/2 -translate-x-1/2">
            <ul className="space-y-2">
              <li>Restaurants</li>
              <li>Entertainment</li>
              <li>Sports</li>
            </ul>
            <ul className="space-y-2 border-l pl-6">
              <li>Services</li>
              <li>Electronics</li>
            </ul>
            <ul className="space-y-2 border-l pl-6">
              <li>Education</li>
              <li>Transport</li>
            </ul>
          </div>
        )}

        {/* VENDOR DROPDOWN */}
        {openCategories2 && (
          <div className="absolute top-full mt-2 bg-blue-500 text-white left-1/2 -translate-x-1/2">
            <ul>
              <li className="px-8 py-3 hover:bg-black cursor-pointer">
                Login
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
