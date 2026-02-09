import backgroundImage from '../assets/images/banner-bg.png'
import showimage from '../assets/images/banner-img.png'
import { BsSendCheck } from "react-icons/bs";

function ImageSection() {
  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat xl:py-10 lg:py-6  lg:mt-36 mt-24"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-1">
              <h1 className="text-3xl md:text-4xl md:mt-6 mt-6 lg:mt-0 font-bold text-gray-800 mb-4">
                Discover And Save Free Coupon Deals Now
              </h1>
              <p className="text-gray-600 mb-6">
                Join here to see today's amazing secret deals in all categories from food,
                electronics, hair & beauty and many more.
              </p>

            <div className="w-full max-w-lg my-12">
  <div className="flex items-center   bg-white border rounded-lg overflow-hidden shadow-sm">
    <div className="flex items-center gap-3 px-4 py-2 flex-1 ">
     <BsSendCheck />

      <input
        type="tel"
        placeholder="Enter your PHONE number here..."
        className=" w-full py-4 outline-none text-sm text-gray-700 placeholder-gray-400"
      />
    </div>
    <button className="bg-blue-600  transition text-white px-10 py-6 text-sm font-medium
    hover:bg-white hover:text-black hover:border border-blue-600 hover:cursor-pointer">
      Subscribe
    </button>

  </div>
</div>
            </div>

            {/* IMAGE SECTION */}
            <div className="relative w-full md:w-1/2 flex items-center justify-center order-2 md:order-2">
              <img 
                src={showimage} 
                alt="Banner" 
                className="w-full max-w-md md:max-w-full h-auto z-10" 
              />
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ImageSection