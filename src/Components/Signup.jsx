
import { CiFacebook,CiTwitter   } from "react-icons/ci";

    function Signup() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 lg:mt-36 md:mt-24 mt-24">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-8 my-8">

        {/* Heading */}
        <h2 className="text-xl md:text-3xl font-bold text-center text-gray-800 mb-2">
          Sign Up & Save Your Favourite Deals Today!
        </h2>

        <p className="text-center text-gray-500 text-sm mb-8">
          You can browse all coupons for free. However, in order to save your favourites
          to a private folder and get free reminders before your coupons expire,
          you'll need to create a free user account.
        </p>

        {/* Form */}
        <div className="space-y-4">

          <input
            type="text"
            placeholder="Please choose a username..."
            className="w-full px-4 py-3 border border-blue-300 rounded-full outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Please enter your email address..."
            className="w-full px-4 py-3 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Please create a password..."
            className="w-full px-4 py-3 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Please confirm your password..."
            className="w-full px-4 py-3 border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Remember me */}
          <div className="px-4 md:px-2 flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" />
            <label>Remember me</label>
          </div>

          {/* Signup Button */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-white hover:border border-blue-700 hover:text-blue-700 transition cursor-pointer">
            Sign Up Now
          </button>

          {/* Divider */}
          <hr className="my-4 text-gray-400" />

          <p className="text-center text-sm text-gray-500">
            <span className="text-red-500 cursor-pointer">
              Already signed-up? Sign in here
            </span>
          </p>

          <p className="text-center text-sm text-gray-400 cursor-pointer hover:text-blue-700">
            Didn't receive your account confirmation instructions? Click here
          </p>

          <hr className="my-4 text-gray-400" />

          {/* Social Buttons */}
         <button className="w-full bg-blue-800 text-white py-3 rounded-md font-medium transition 
           flex items-center justify-center gap-2 cursor-pointer 
           hover:bg-white group">
  <CiFacebook className="text-xl transition-colors group-hover:text-blue-700" />
   <span className="transition-colors group-hover:text-blue-700">
    Sign in with Facebook
  </span>
</button>

<button className="w-full bg-blue-500 text-white py-3 rounded-md font-medium transition 
           flex items-center justify-center gap-2 cursor-pointer hover:border border-blue-600
           hover:bg-white group">
  <CiTwitter className="text-xl transition-colors group-hover:text-blue-700" />
   <span className="transition-colors group-hover:text-blue-700">
    Sign in with Twitter
  </span>
</button>
         {/* <button className="w-full bg-blue-500 hover:bg-white hover:border border-blue-600  py-3 rounded-md font-medium transition 
           flex items-center justify-center gap-2 cursor-pointer text-white 
           ">
  <CiTwitter className="text-xl transition-colors group-hover:text-blue-700" />
   <span className=" transition-colors hover:text-blue-700">
    Sign in with Twitter
  </span>
</button> */}



          {/* <button className="w-full border border-blue-600 text-blue-600 py-3 rounded-md font-medium hover:bg-blue-50 transition">
            Sign in with Twitter
          </button> */}

        </div>
      </div>
    </div>
  );
}



 

export default Signup