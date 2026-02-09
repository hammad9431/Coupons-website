import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/favicon-953fd31a0e49f4b26d978f384765172be558d2f983b6fbfdf88956b35755ca1d.png"; // apna logo path
import { CiFacebook ,CiTwitter  } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";
import { IoIosMailOpen } from "react-icons/io";
 function Footer() {
  return (
    <>
    <footer className="bg-white mx-4 shadow-sm">
<div className="flex py-8 justify-between">
   <ul className=" lg:gap-6 xl:gap-6 md:gap-3 xl:text-lg lg:text-lg md:text-[17px] md:mt-2 text-gray-800 px-8 hidden md:inline-flex ">

              {/* CATEGORIES */}
              <li className="cursor-pointer hover:text-blue-600 ">Home</li>
              <li className="cursor-pointer hover:text-blue-600 ">Place</li>
              <li className="cursor-pointer hover:text-blue-600 ">Events</li>
              <li className="cursor-pointer hover:text-blue-600 ">About Us</li>
              <li className="cursor-pointer hover:text-blue-600 ">Contact Us</li>
              <li className="cursor-pointer hover:text-blue-600 ">pricing/plans</li>
            </ul>

        <div className="flex text-gray-600 px-8 cursor-pointer text-3xl gap-4 mx-auto md:mx-0">
                   <span className="hover:text-[#1877F2] transition-colors">
                     <CiFacebook />
                   </span>
                   <span className="hover:text-[#1DA1F2] transition-colors">
                     <CiTwitter />
                   </span>
                   <span className="hover:text-[#E4405F] transition-colors">
                     <FaInstagramSquare />
                   </span>
            </div>
   </div>                 
                  
    <div className=" border-t border-blue-400 mx-8">
      <div className="max-w-7xl mx-auto lg:px-6 xl:px-6 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">

          <div className="flex flex-col  md:items-start gap-2 ">
            <img src={logo} alt="logo" className="w-48 mx-auto lg:mx-0" />
            <p className="mx-auto lg:mx-0 md:mx-0 xl:mx-0 text-blue-600 xl:text-lg lg:text-[15px] md:text-[11px] font-medium lg:text-center md:text-left">
              Ghana's Premier Coupons Club
            </p>

            {/* Social Icons */}
            <div className="border flex -mt-2 lg:text-3xl xl:text-3xl text-3xl md:text-xl xl:px-4 gap-4 mx-auto md:mx-0">
              <span className="text-gray-600 hover:text-[#1877F2] cursor-pointer transition-colors">
                <FaFacebookF />
              </span>
              <span className="text-gray-600 hover:text-[#1DA1F2] cursor-pointer transition-colors">
                <FaTwitter />
              </span>
              <span className="text-gray-600 hover:text-[#1DA1F2] cursor-pointer transition-colors">
                <BsFillSendFill  />
              </span>
               <span className="text-gray-600 hover:text-[#1DA1F2] cursor-pointer transition-colors">
                <IoIosMailOpen  />
              </span>
               <span className="text-gray-600 hover:text-[#E4405F] cursor-pointer transition-colors">
                <FaInstagram />
              </span>
            </div>
          </div>

          {/* Vendors */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-3">Vendors</h3>
            <ul className="space-y-2 text-gray-600 text-sm cursor-pointer ">
              <li className="hover:text-blue-600 transition-colors">Add a Place</li>
              <li className="hover:text-blue-600 transition-colors">Create a Promo</li>
              <li className="hover:text-blue-600 transition-colors">Add an Event</li>
              <li className="hover:text-blue-600 transition-colors">Advertise with us</li>
              <li className="hover:text-blue-600 transition-colors">Post Requirements</li>
            </ul>
          </div>

          {/* Explore */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-3">Explore</h3>
            <ul className="space-y-2 text-gray-600 text-sm cursor-pointer">
              <li className="hover:text-blue-600 transition-colors">FAQs</li>
              <li className="hover:text-blue-600 transition-colors">Coupons on the Map</li>
              <li className="hover:text-blue-600 transition-colors">Places on the Map</li>
              <li className="hover:text-blue-600 transition-colors">Events on the Map</li>
              <li className="hover:text-blue-600 transition-colors">Our Blog</li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-600 text-sm cursor-pointer">
              <li className="hover:text-blue-600 transition-colors">About Us</li>
              <li className="hover:text-blue-600 transition-colors">For Partners</li>
              <li className="hover:text-blue-600 transition-colors">Terms & Conditions</li>
              <li className="hover:text-blue-600 transition-colors">Privacy Policy</li>
              <li className="hover:text-blue-600 transition-colors">Contact Us</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className=" mt-10 pt-4 text-center text-lg text-gray-500">
          All trademarks are properties of their respective owners.
          © 2023 Coupons Technologies, All Rights Reserved.
        </div>

      </div>
    </div>
    </footer>
    </>
  );
}

export default Footer