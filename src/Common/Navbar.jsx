import { useState,useRef, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { MdOutlineSearch } from "react-icons/md";
import logo from "../assets/images/logo.png";
import { CiFacebook ,CiTwitter  } from "react-icons/ci";
import { FaInstagramSquare,FaLinkedin } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";
function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openCategories2, setOpenCategories2] = useState(false);
     
  const navRef = useRef(null);


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
      
      <header   ref={navRef}
       className="fixed top-0 w-full  bg-white z-50 border-b ">
        <div className=" max-w-350 mx-auto px-4 h-24 flex items-center ">
         <img src={logo} alt="logo" className="h-11" />

     <div className="flex-1 flex justify-center xl:ml-24">
  <ul className="hidden lg:flex items-center gap-4 text-lg text-gray-800">

    {/* Categories */}
    <li className="relative">
      <button
        onClick={() => {
          setOpenCategories(!openCategories);
          setOpenCategories2(false);
        }}
        className="flex items-center gap-1 hover:text-blue-600 cursor-pointer"
      >
        Categories
        {!openCategories && (
          <span className="absolute -top-3 -right-3 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">
            New
          </span>
        )}
        <svg
          className={`w-4 h-4 transition-transform ${
            openCategories ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </li>

    <li className="hover:text-blue-600 cursor-pointer">Places</li>
    <li className="hover:text-blue-600 cursor-pointer">Events</li>

    <li>
      <button
        onClick={() => {
          setOpenCategories2(!openCategories2);
          setOpenCategories(false);
        }}
        className="flex items-center gap-1 hover:text-blue-600 cursor-pointer"
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </li>
  </ul>
</div>


<div className="hidden xl:flex justify-center ">
  <div className="flex items-center border border-gray-300 rounded-full w-65 bg-white shadow-sm">
    <input
      type="text"
      placeholder="Search"
      className="flex-1 outline-none text-sm py-2 px-3"
    />
    <MdOutlineSearch size={20} className="text-gray-500 mr-3" />
  </div>
</div>


<div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
  <Link to="/signin">
    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-sm
     cursor-pointer hover:bg-white hover:border hover:border-blue-600 hover:text-blue-600">
      Sign In
    </button>
  </Link>

  <button  onClick={() => setIsModalOpen(true)}
  className="border border-orange-500 text-black px-5 py-2 rounded-lg text-lg hover:text-blue-600 cursor-pointer">
    Create Account
  </button>
</div>
                    {/* Modal */}

         {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-500 hover:text-blue-500 text-2xl cursor-pointer"
            >
              ×
            </button>
          
            {/* Modal Content */}
            <h2 className="lg:text-xl font-bold mb-4">How would you like to get started?</h2>
             <hr className="text-gray-300"/>
           
             
              <Link
  to="/Signup"
  onClick={() => setIsModalOpen(false)}
  className="mt-6 block w-full text-center text-white bg-blue-600 py-3 rounded-md 
  hover:bg-white hover:text-blue-600 hover:border border-blue-600 transition-colors"
>
  I'm looking for coupons and details
</Link>



    <Link
  to="/SignupBusiness"
  onClick={() => setIsModalOpen(false)}
  className="mt-3 block w-full text-center text-black border border-orange-500 
  py-3 rounded-md hover:bg-orange-50 transition-colors"
>
  I want to promote my business
</Link>

          </div>
        </div>
      )}

          {/* RIGHT */}
         

          {/* MOBILE ICON */}
          <button className="lg:hidden text-blue-600" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <HiMenu size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
<div className="h-12 px-4 w-full bg-blue-600 text-center text-white hidden lg:flex items-center justify-end gap-4 text-2xl cursor-pointer">
       <CiFacebook className="hover:text-[#1877F2] transition-colors" />
       <CiTwitter className="hover:text-[#1DA1F2] transition-colors" />
       <FaInstagramSquare className="hover:text-[#E4405F] transition-colors" />
       <FaLinkedin className="hover:text-[#0A66C2] transition-colors" />
      </div>
     
       {openCategories && (
<div className="top-full -mt-11 w-max md:hidden hidden xl:inline lg:inline bg-[#4776ff] text-white z-40 left-1/2 -translate-x-1/2 absolute">
  <div className="max-w-300 mx-auto py-4 px-6">
    <div className="grid grid-cols-3  text-md text-left">

      <ul >
        <li className="w-full flex items-center py-2 px-4 cursor-pointer hover:bg-[#1746d3] ">Restaurants and Food Delivery</li>
        <li className="w-full flex items-center py-2 px-4 cursor-pointer hover:bg-[#1746d3]">Entertainment</li>
        <li className="w-full flex items-center py-2 px-4 cursor-pointer hover:bg-[#1746d3]">Sports and Fitness</li>
        <li className="w-full flex items-center py-2 px-4 cursor-pointer hover:bg-[#1746d3]">Clothing and Fashion</li>
        <li className="w-full flex items-center py-2 px-4 cursor-pointer hover:bg-[#1746d3]">Home Improvement</li>
      </ul>

      <ul className="border-l border-white/40 ">
        <li className="w-full flex items-center py-2 px-4 cursor-pointer hover:bg-[#1746d3]">Services</li>
        <li className="w-full flex items-center py-2 px-4 cursor-pointer hover:bg-[#1746d3]">Theater and Cinema</li>
        <li className="w-full flex items-center py-2 px-4 cursor-pointer hover:bg-[#1746d3]">Gadgets and Electronics</li>
        <li className="w-full flex items-center py-2 px-4 cursor-pointer hover:bg-[#1746d3]">Health and Wellness</li>
        <li className="w-full flex items-center py-2 px-4 cursor-pointer hover:bg-[#1746d3]">General Merchandize</li>
      </ul>

      <ul className="border-l border-white/40 ">
        <li className="w-full flex items-center py-2 px-4 cursor-pointer hover:bg-[#1746d3]">Tourism and Hospitality</li>
        <li className="w-full flex items-center py-2 px-4 cursor-pointer hover:bg-[#1746d3]">Education</li>
        <li className="w-full flex items-center py-2 px-4 cursor-pointer hover:bg-[#1746d3]">Transport</li>
      </ul>

    </div>
  </div>
</div>

)}



    {openCategories2 && (
<div className="top-full -mt-11 w-max md:hidden hidden xl:inline lg:inline bg-[#4776ff] text-white z-40 left-1/2 -translate-x-1/2 absolute">
  <div className="max-w-300 mx-auto py-4 px-2">
   

      <ul >
        <li className="w-full flex items-center py-2 px-4 cursor-pointer hover:bg-[#1746d3] ">Login</li>
       
      </ul>
      </div>
      </div>
    
)}


     
        {openMenu && (
          <div className="lg:hidden relative bg-[#3965e5] px-6 py-4 border-t">
            <div className="mt-4 flex flex-row gap-3">
              <Link to="/signin" >
              <button onClick={() => setOpenMenu(false)} className="flex shadow-2xl gap-2 bg-[#4571f1] text-white md:px-8 md:py-2 px-4 py-3 rounded-lg ">
               <GoPeople className=" text-white text-md mt-1" />  Sign In
              </button>
              </Link>
              <button onClick={() => {setOpenMenu(false); setIsModalOpen(true);}}
              className="text-white bg-[rgba(246,194,62,1)] py-3  md:px-6 px-4 rounded-lg">
                Create Account
              </button>
            </div>
          <hr className="border-t border-white my-4" />

 
          <div className=" items-center  rounded-md px-4 py-2 w-full my-4 bg-white">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none text-md"
            />
          </div>


            <button onClick={() => setOpenMenu(false)} className="absolute md:top-2 top-1 md:right-4 right-2 text-white">
              <HiX  className="text-3xl md:text-4xl"/>
            </button>
            <ul className="flex flex-col gap-4 text-md text-white">
              <li>
                <button
    onClick={() => { setOpenCategories(!openCategories); setOpenCategories2(false); }}
    className="flex items-center gap-1 cursor-pointer"
  >
    Categories

    {/* Dropdown Arrow */}
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

   {openCategories && (
                <ul className="ml-12 space-y-2 text-sm overflow-y-auto max-h-40">
                  

     
        <li>Restaurants and Food Delivery</li>
        <li>Entertainment</li>
        <li>Sports and Fitness</li>
        <li>Clothing and Fashion</li>
        <li>Home Improvement</li>
    

     
        <li>Services</li>
        <li>Theater and Cinema</li>
        <li>Gadgets and Electronics</li>
        <li>Health and Wellness</li>
        <li>General Merchandize</li>
     

     
        <li>Tourism and Hospitality</li>
        <li>Education</li>
        <li>Transport</li>
      

   

                </ul>
              )}
              </li>
              <li>Places</li>
              <li>Events</li>
              <li>
                 <button
    onClick={() => { setOpenCategories2(!openCategories2); setOpenCategories(false); }}
    className="flex items-center gap-1 cursor-pointer"
  >
    Vendor
   

    {/* Dropdown Arrow */}
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
              {openCategories2 && (
                <ul className="ml-12 space-y-2 text-sm">
                  <li>Login</li>
                </ul>
              )}
  
            </ul>
           
              <div className="mt-4 text-white flex items-center justify-center gap-2 text-xl py-2">
                <CiFacebook className="hover:text-[#1877F2] transition-colors" />
       <CiTwitter className="hover:text-[#1DA1F2] transition-colors" />
       <FaInstagramSquare className="hover:text-[#E4405F] transition-colors" />
       <FaLinkedin className="hover:text-[#0A66C2] transition-colors" />
              </div>
           
          </div>
        )}
      

      
      </header>
    </>
  );
}

export default Navbar;
