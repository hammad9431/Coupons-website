
import { useEffect, useState } from "react";
import axios from "axios";
import DealCard from "./DealCard";
import { TbFilterSearch } from "react-icons/tb";

const categories = [
  { label: "All", value: "all" },
  { label: "Restaurants and Food Delivery", value: "restaurants" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Sports and Fitness", value: "sports" },
  { label: "Clothing and Fashion", value: "fashion" },
  { label: "Home Improvement", value: "home" },
  { label: "Services", value: "services" },
  { label: "Theater and Cinema", value: "cinema" },
  { label: "Gadgets and Electronics", value: "electronics" },
  { label: "Health and Wellness", value: "health" },
  { label: "General Merchandize", value: "general" },
  { label: "Tourism and Hospitality", value: "tourism" },
  { label: "Education", value: "education" },
  { label: "Transport", value: "transport" }
];
const DealsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCategorySelect = (category) => {
    setActiveCategory(category.value); // save only value
    setIsFilterOpen(false); // close modal on select
  };

  useEffect(() => {
  const getDeals = async () => {
    try {
      setLoading(true);

    const url =
   activeCategory === "all"
    ? "http://localhost:2000/api/deals"
    : `http://localhost:2000/api/deals?category=${activeCategory}`;
      const res = await axios.get(url);
      setDeals(res.data.deals || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  getDeals();
}, [activeCategory]);

  return (
     <div className="min-h-screen bg-gray-50">
     
      <div className="bg-white shadow-sm w-full ">
       <div className="max-w-7xl mx-auto py-6 flex flex-row md:flex-col items-center md:items-start justify-between">
      <h1 className="lg:text-3xl text-lg px-3 lg:px-10 md:px-8 xl:px-0 font-bold text-gray-800 mb-1 text-left">
    Today's Most Claimed Deals
      </h1>
    
    {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Filter"
          >
            <TbFilterSearch className="w-6 h-6 text-blue-600" />
          </button>
      
    <div className="hidden md:flex flex-wrap justify-end leading-none">
    {categories.map((category) => (
    <button
      key={category.value}
      onClick={() => setActiveCategory(category.value)}
      className={`xl:px-4 lg:px-6 md:px-6 py-1 text-md ${
        activeCategory === category.value
          ? 'text-blue-600 font-extrabold'
          : 'text-gray-500 font-semibold hover:text-blue-600 cursor-pointer' 
      }`}
    >
      {category.label}
      </button>
     ))}
   </div>
   </div>
   </div>
      {/* Deals */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        

        <div className="max-w-7xl mx-auto px-4 lg:py-8 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.length > 0 ? (
            deals.map((deal) => (
              <DealCard key={deal._id} deal={deal} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No deals found for this category
            </p>
          )}
        </div>
      </div>
      )}
       {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0  bg-opacity-30 z-40"
            onClick={() => setIsFilterOpen(false)}
          />

          {/* Modal Panel */}
          <div className=" fixed bottom-0 left-0 w-full bg-white rounded-t-2xl shadow-2xl max-h-[80vh] overflow-hidden z-50 animate-slide-up">
            {/* Close Button */}
            <div className="flex justify-end p-2 bg-blue-600">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Categories List */}
            <div className="overflow-y-auto max-h-[calc(80vh-60px)] bg-blue-600">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategorySelect(category)}
                  className={`w-full text-left px-6 py-4 text-base transition-all ${
                    activeCategory === category.value
                      ? "bg-blue-700 text-white font-semibold border-l-4 border-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default DealsSection;