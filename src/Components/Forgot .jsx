

import { useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Forgot() {

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:2000/api/auth/forget-password",
        { email }
      );

      alert(res.data.message);

      // 👇 EMAIL bhi sath bhej rahe hain
      navigate("/verify-otp", { state: { email } });

    } catch (error) {
      alert(error.response?.data?.message || "Error");
    }
  };
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4  xl:mt-36 lg:mt-28  md:mt-24 mt-24 py-4 ">
      <div className="w-2xl bg-white rounded-xl shadow-md p-6 sm:p-8">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Forgot your password?
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Enter Email Address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full mb-4 px-4 py-3 rounded-full border border-gray-300
            focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex px-4 items-center gap-2 mb-5 text-sm text-gray-600">
          <input type="checkbox" className="rounded" />
          <span>Remember Me</span>
          </div>

          <button className="w-full bg-blue-600 'hover:bg-white' text-white py-2 rounded-md font-medium transition
        hover:bg-white hover:border border-blue-700 hover:text-blue-700 'transition' cursor-pointer">
         Send me Reset Password Instructions
        </button>
        </form>

        {/* Success Message */}
       
       
        <div className="my-6 border-t border-gray-500 mx-2"></div>

        <div className="text-center text-sm space-y-2">

         <Link to="/SignIn">
          <p>
            <span className="text-red-500 cursor-pointer hover:text-red-400">
             Already signed-up? Sign in here
            </span>
          </p>
          </Link>
          <Link to="/Signup">
          <p>
            <span className="text-red-500 cursor-pointer hover:text-red-400">
             Not yet a member? Sign up
            </span>
          </p>
         </Link>
          <p className="text-gray-600 hover:underline cursor-pointer">
           Didn't receive your account confirmation instructions? Click here
          </p>
        
         
        </div>
         
          <div className="my-6 border-t border-gray-500 mx-2"></div>

           <button className="w-full flex items-center justify-center gap-2 bg-[#3b5998] text-white py-3 rounded-md mb-3">
          <FaFacebookF />
          Sign in with Facebook
        </button>

        <button className="w-full flex items-center justify-center gap-2 border border-blue-400 text-blue-500 py-3 rounded-md hover:bg-blue-50">
          <FaTwitter />
          Sign in with Twitter
        </button>
      </div>
    </div>
  );
}

export default Forgot;