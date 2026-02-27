

import yourImage from '../assets/images/WhatsApp Image 2024-01-26 at 12.10.13 PM.jpg'

function SignInOwner() {
  return (
   <>

<div className="min-h-screen flex px-4 md:px-8 lg:px-20  lg:mt-36 md:mt-16 mt-16">


  <div className="hidden lg:block lg:w-1/2 my-8 ">
    <img 
      src={yourImage} 
      alt="Sale"
      className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
    />
  </div>


  <div className="rounded-tr-lg rounded-br-lg w-full lg:w-1/2 flex items-center justify-center bg-gray-100 px-6 py-12 my-8">
    <div className="w-full max-w-md">

      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Sign In as Owner

      </h2>

      <div className="space-y-4">

        <input
          type="email"
          placeholder="Enter Email Address..."
          className="w-full px-4 py-3 border rounded-full outline-none"
        />

        <input
          type="password"
          placeholder="password..."
          className="w-full px-4 py-3 border rounded-full outline-none"
        />

        <div className="px-4 md:px-2 flex items-center gap-2 text-sm">
          <input type="checkbox" />
          <label>Remember me</label>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-md
        hover:text-blue-600 hover:border border-blue-600 hover:bg-white cursor-pointer">
          Login
        </button>
 <hr className="my-4 text-gray-400" />

 <p className="text-center text-sm text-gray-500">
            <span className="text-red-400 cursor-pointer hover:text-red-600">
              Not yet a member? Sign up            
              </span>
          </p>

           <p className="text-center text-sm text-gray-400 cursor-pointer hover:text-blue-700">
         Forgot your password?          
          </p>
           <p className="text-center text-sm text-gray-400 cursor-pointer hover:text-blue-700">
            Didn't receive your account confirmation instructions? Click here
          </p>
      </div>
    </div>
  </div>

</div>

   </>
  )
}

export default SignInOwner