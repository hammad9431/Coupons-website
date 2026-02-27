import { FaFacebookF, FaTwitter } from "react-icons/fa";

function Forgot () {
  return (

  <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4  xl:mt-36 lg:mt-28  md:mt-24 mt-24 py-4 ">
      <div className="w-2xl bg-white rounded-xl shadow-md p-6 sm:p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
         Forgot your password?
        </h2>

        {/* Email */}
         <form  className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Enter Email Address..."
          className="w-full mb-4 px-4 py-3 rounded-full border border-gray-300
          focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
       
        <div className="flex px-4 items-center gap-2 mb-5 text-sm text-gray-600">
          <input type="checkbox" className="rounded" />
          <span>Remember Me</span>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium transition
        hover:bg-white hover:border border-blue-700 hover:text-blue-700 transition cursor-pointer">
         Send me Reset Password Instructions
        </button>
   </form>
        {/* Divider */}
        <div className="my-6 border-t border-gray-500 mx-2"></div>

        {/* Links */}
        <div className="text-center text-sm space-y-2">
         
          <p>
            <span className="text-red-500 cursor-pointer hover:text-red-400">
             Already signed-up? Sign in here
            </span>
          </p>
          <p>
            <span className="text-red-500 cursor-pointer hover:text-red-400">
             Not yet a member? Sign up
            </span>
          </p>
         
          <p className="text-gray-600 hover:underline cursor-pointer">
           Didn't receive your account confirmation instructions? Click here
          </p>
        
         
        </div>

        
       <div className="my-6 border-t border-gray-500 mx-2"></div>

        {/* Social Buttons */}
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


)
}

export default Forgot 
