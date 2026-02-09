import yourImage from '../assets/images/WhatsApp Image 2024-01-26 at 12.10.13 PM.jpg'

function SignupBusiness() {
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
        Sign Up & Gain New Customers With Coupons
      </h2>

      <div className="space-y-4">

        <input
          type="email"
          placeholder="Please enter your email address..."
          className="w-full px-4 py-3 border rounded-full outline-none"
        />

        <input
          type="text"
          placeholder="Please choose a username..."
          className="w-full px-4 py-3 border rounded-full outline-none"
        />

        <input
          type="password"
          placeholder="Please create a password..."
          className="w-full px-4 py-3 border rounded-full outline-none"
        />

        <input
          type="password"
          placeholder="Please confirm your password..."
          className="w-full px-4 py-3 border rounded-full outline-none"
        />

        <div className="px-4 md:px-2 flex items-center gap-2 text-sm">
          <input type="checkbox" />
          <label>Remember me</label>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-md">
          Register Vendor Now
        </button>

      </div>
    </div>
  </div>

</div>

   </>
  )
}

export default SignupBusiness