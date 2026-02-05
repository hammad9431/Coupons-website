

import  { useState } from 'react';
import { TbFilterSearch } from "react-icons/tb";
import {  Clock, MapPin } from 'lucide-react';
import { FaRegThumbsUp ,FaRegEye ,FaTags  } from "react-icons/fa";
import Allimage1 from '../assets/images/5fb954a0-5aa2-4a3d-a986-0ee1021e4e3e.jpg';
import Allimage2 from '../assets/images/WhatsApp Image 2024-10-31 at 7.53.15 AM.jpg';
import Allimage3 from '../assets/images/WhatsApp Image 2024-10-31 at 12.53.46 PM.jpg';
import Allimage4 from '../assets/images/WhatsApp Image 2024-10-21 at 12.06.17 PM.jpg';
import Allimage5 from '../assets/images/WhatsApp Image 2024-10-21 at 11.36.26 AM.jpg';
import Allimage6 from '../assets/images/CRYSTAL.jpg';
import Allimage7 from '../assets/images/WhatsApp Image 2024-07-10 at 10.13.38 AM.jpg';
import Allimage8 from '../assets/images/WhatsApp Image 2024-10-06 at 1.24.28 PM.jpg';

import Resturantimage1 from '../assets/images/WhatsApp Image 2024-09-20 at 3.52.19 PM.jpg';
import Resturantimage2 from '../assets/images/WhatsApp Image 2024-06-14 at 1.23.19 PM.jpg';
import Resturantimage3 from '../assets/images/WhatsApp Image 2024-08-26 at 2.30.48 PM.jpg';
import Resturantimage4 from '../assets/images/WhatsApp Image 2024-07-15 at 12.04.44 PM.jpg';
import Resturantimage5 from '../assets/images/WhatsApp Image 2024-06-12 at 3.30.54 PM.jpg';
import Resturantimage6 from '../assets/images/WhatsApp Image 2024-06-12 at 3.30.54 PM.jpg';
import Resturantimage7 from '../assets/images/ama.jpg';
import Resturantimage8 from '../assets/images/choco logo.jpg';

import Entertainmentimage1 from '../assets/images/WhatsApp Image 2024-02-26 at 12.33.16 PM.jpg';
import Entertainmentimage2 from '../assets/images/WhatsApp Image 2024-01-26 at 12.10.13 PM.jpg';
import Entertainmentimage3 from '../assets/images/WhatsApp Image 2024-01-05 at 1.05.24 PM.jpg';
import Entertainmentimage4 from '../assets/images/co.jpg';
import Entertainmentimage5 from '../assets/images/detty.jpg';
import Entertainmentimage6 from '../assets/images/WhatsApp Image 2023-12-14 at 9.41.16 PM.jpg';
import Entertainmentimage7 from '../assets/images/toy.jpg';
import Entertainmentimage8 from '../assets/images/WhatsApp Image 2023-11-24 at 3.11.32 PM.jpg';

import sportsimage1 from '../assets/images/WhatsApp Image 2024-10-21 at 12.06.17 PM.jpg';
import sportsimage2 from '../assets/images/dec.jpg';
import sportsimage3 from '../assets/images/61vzpus-qtL._SL1000_.jpg';

import Clothingimage1 from '../assets/images/WhatsApp Image 2024-06-11 at 4.07.51 PM.jpg';
import Clothingimage2 from '../assets/images/AJ e.jpg';
import Clothingimage3 from '../assets/images/gp logo.jpg';
import Clothingimage4 from '../assets/images/WhatsApp Image 2024-02-08 at 3.58.25 PM.jpg';
import Clothingimage5 from '../assets/images/WhatsApp Image 2024-02-07 at 7.18.01 PM.jpg';
import Clothingimage6 from '../assets/images/WhatsApp Image 2024-01-18 at 10.27.16 PM.jpg';
const DealsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
   const [isFilterOpen, setIsFilterOpen] = useState(false);
  const categories = [
    'All',
    'Restaurants and Food Delivery',
    'Entertainment',
    'Sports and Fitness',
    'Clothing and Fashion',
    'Home Improvement',
    'Services',
    'Theater and Cinema',
    'Gadgets and Electronics',
    'Health and Wellness',
    'General Merchandize',
    'Tourism and Hospitality',
    'Education',
    'Transport'
    
  ];
  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    setIsFilterOpen(false); // Close filter after selection
  };
 

  const All = [
    {
      id: 1,
      image:Allimage1,
      title: 'Elevate your look, Embrace your style with Mei Mei Beauty Suites',
      description: 'Stand the chance off getting 10...',
      reviews: 0,
      likes: 0,
      views: 1239,
      date: 'Jul 12, 25',
      comments: 50,
      location: 'Mei Mei Beauty Suites, Accra',
      status: 'Promo has ended',
    },
    {
      id: 2,
       image: Allimage2,
      title: "Transform Your Home with 2HB Home Decor's Exclusive 20% Discount!",
      description: 'Transform Your Home with 2HB ...',
      reviews: 0,
      likes: 0,
      views: 1316,
      date: 'Oct 31, 24',
      comments: 30,
      location: '2HB Home Decor, Accra Ghana',
      status: 'Promo has ended',
     
    },
    {
      id: 3,
      image: Allimage3,
      title: "Say 'Yes' to Your Dream Dress with Ruby's Bridal 50% Discount!",
      description: "Brides, the moment you've been...",
      reviews: 0,
      likes: 0,
      views: 1287,
      date: 'Oct 31, 24',
      comments: 40,
      location: "Ruby's Bridal, Accra Ghana",
      status: 'Promo has ended',
    
    },
    {
      id: 4,
      image: Allimage4,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Your Fitness Journey Starts Here: 25% Discount for 25 Years Anniversary of Aviation Social Centre!',
      description: 'Your Fitness Journey Starts Her...',
       likes: 0,
      views: 1191,
      date: 'Oct 21, 24',
      comments: 20,
      location: 'Aviation Social Centre, Accra Ghana',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
     {
      id: 5,
      image:Allimage5,
      title: 'Half the Price, Twice the Relaxation! Enjoy 50% Off All Massages at Anantara Thai – Book Now!',
      description: 'Discover the healing power of tou...',
      reviews: 0,
      likes: 0,
      views: 1295,
      date: 'Oct 21, 24',
      comments: 50,
      location: 'Anantara Thai Massage, Accra Ghana',
      status: 'Promo has ended',
    },
    {
      id: 6,
       image: Allimage6,
      title: "Focus on the Fight, Not the Fright! get 50% off on all mammogram screenings at New Crystal Hospital",
      description: 'Focus on the Fight, Not the Frigh ...',
      reviews: 0,
      likes: 1,
      views: 1186,
      date: 'Oct 11, 24',
      comments: 30,
      location: 'New Crystal Hospital, Accra Ghana',
      status: 'Promo has ended',
     
    },
    {
      id: 7,
      image: Allimage7,
      title: "Flash Sale Alert! Get 30% OFF on all your favourite furniture at Kingdom Furniture this October!",
      description: "Flash Sale Alert! 🚨 Get 30% OF...",
      reviews: 0,
      likes: 1,
      views: 1343,
      date: 'Jul 10, 24',
      comments: 20,
      location: "Kingdom Furniture, Accra Ghana",
      status: 'Promo has ended',
    
    },
    {
      id: 8,
      image: Allimage8,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'October just got better! Buy the defne sofa set from Sofa Design Factory and get a free carpet!',
      description: 'October Just Got Better with Sofa...',
       reviews: 0,
       likes: 0,
      views: 1272,
      date: 'Oct 08, 24',
      comments: 30,
      location: 'Sofa Design Factory , Accra Ghana',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
  ];

  const Restaurants =[
     {
      id: 9,
      image:Resturantimage1,
      title: 'Pay just ₵193 instead of ₵386 for two pizzas on Tuesdays & Wednesdays At Eddys Pizza!',
      description: 'Pay just ₵193 instead of ₵386 for...',
      reviews: 0,
      likes: 0,
      views: 782,
      date: 'Jul 17, 24',
      comments: 50,
      location: 'Eddys Pizza, Accra Ghana',
      status: 'Promo has ended',
    },
    {
      id: 10,
       image: Resturantimage2,
      title: "Delivering Delicious Pizza with Swiftness! Enjoy double delight On Tuesdays & Wednesdays",
      description: 'Buy one get one Free! Enjoy dou...',
      reviews: 0,
      likes: 0,
      views: 1017,
      date: 'Jun 14, 24',
      comments: 50,
      location: 'Cheezy Pizza, Accra Ghana',
      status: 'Promo has ended',
     
    },
    {
      id: 11,
       image: Resturantimage3,
      title: "Why choose when you can have it all? Indulge in the ultimate pizza experience with Papa's Pizza!",
      description: "Why choose when you can have it...",
      reviews: 0,
      likes: 0,
      views: 751,
      date: 'Aug 26, 24',
      comments: 10,
      location: "Papa's Pizza , Accra Ghana",
      status: 'Promo has ended',
    
    },
    {
      id: 12,
      image: Resturantimage4,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Indulge in Sweet Savings with Nuvivi Cakes – 5%Off on All Purchases!',
      description: 'This July, satisfy your sweet too...',
       likes: 0,
      views: 732,
      date: 'Jul 15, 24',
      comments: 30,
      location: 'Nuvivi Cakes Gh, Accra Ghana',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
    {
      id: 13,
      image:Resturantimage5,
      title: 'Double Feelings! Buy 1 Shawarma, Get 1 Free + Coke + Free Delivery every Wednesday!',
      description: 'Pay just ₵193 instead of ₵386 for...',
      reviews: 0,
      likes: 0,
      views: 782,
      date: 'Jul 17, 24',
      comments: 50,
      location: 'Eddys Pizza, Accra Ghana',
      status: 'Promo has ended',
    },
    {
      id: 14,
       image: Resturantimage6,
      title: "SATISFY YOUR CRAVINGS FOR LESS WITH FALAAA! FRIDAY PIZZA AT SHOCKS HUB",
      description: 'Buy one get one Free! Enjoy dou...',
      reviews: 0,
      likes: 0,
      views: 1017,
      date: 'Jun 14, 24',
      comments: 50,
      location: 'Cheezy Pizza, Accra Ghana',
      status: 'Promo has ended',
     
    },
    {
      id: 15,
       image: Resturantimage7,
      title: "Why choose when you can have it all? Indulge in the ultimate pizza experience with Papa's Pizza!",
      description: "Why choose when you can have it...",
      reviews: 0,
      likes: 0,
      views: 751,
      date: 'Aug 26, 24',
      comments: 10,
      location: "Papa's Pizza , Accra Ghana",
      status: 'Promo has ended',
    
    },
    {
      id: 16,
      image: Resturantimage8,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Indulge in Sweet Savings with Nuvivi Cakes – 5%Off on All Purchases!',
      description: 'This July, satisfy your sweet too...',
       likes: 0,
      views: 732,
      date: 'Jul 15, 24',
      comments: 30,
      location: 'Nuvivi Cakes Gh, Accra Ghana',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    }
  ]

   const Entertainment =[
     {
      id: 17,
      image:Entertainmentimage1,
      title: '50% OFF RECORDING PRODUCTION AT DANNY BEATZ',
      description: 'A whopping 50% discount on all r...',
      reviews: 0,
      likes: 0,
      views: 569,
      date: 'Feb 26, 24',
      comments: 500,
      location: 'DANNY BEATZ GHANA, Accra',
      status: 'Promo has ended',
    },
    {
      id: 18,
       image: Entertainmentimage2,
      title: "CROWN YOUR MEAL WITH COKE AT THE COCA-COLA COKE FOODIE CONNECT",
      description: 'Who\'s in for a fun-filled day, full...?',
      reviews: 0,
      likes: 0,
      views: 633,
      date: 'Jan 26, 24',
      comments: 500,
      location: 'COCA-COLA, Osu-Accra',
      status: 'Promo has ended',
     
    },
    {
      id: 19,
       image: Entertainmentimage3,
      title: "GET READY TO DANCE THE NIGHT AWAY WITH OUR DISCOUNTED TICKETS SALES AT ASABAAKO MUSIC FESTIVAL",
      description: "Enjoy an electrifying 30% disco...",
      reviews: 0,
      likes: 0,
      views: 546,
      date: 'Jan 05, 24',
      comments: 500,
      location: "ASABAAKO MUSIC FESTIVAL, Busua, Dixcove",
      status: 'Promo has ended',
    
    },
    {
      id: 20,
      image: Entertainmentimage4,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'GROOVE TO THE BEAT OF YOUR FAVORITE ARTISTS WITH OUR 20% DISCOUNT ON TICKETS AT COUNTDOWN AFRICA',
      description: 'Experience the rhythm and energy...',
       likes: 0,
      views: 540,
      date: 'Dec 27, 23',
      comments: 200,
      location: 'Aviation Social Centre, Accra Ghana',
      status: 'COUNTDOWN AFRICA, Accra',
      bgColor: 'bg-white',
    },
     {
      id: 21,
      image:Entertainmentimage5,
      title: 'GET READY TO RAVE AT A STEAL! ENJOY EXCLUSIVE 35%DISCOUNT ON DETTY RAVE TICKETS',
      description: 'We\'re thrilled to offer an exclusive...',
      reviews: 0,
      likes: 0,
      views: 706,
      date: 'Dec 10, 23',
      comments: 500,
      location: 'DETTY RAVE, Accra',
      status: 'Promo has ended',
    },
    {
      id: 22,
       image: Entertainmentimage6,
      title: "JOIN US CELEBRATE TOGETHERNESS AND ENJOY AN EXCLUSIVE DISCOUNT ON OUR DELECTABLE KENKEY AT THE FEST",
      description: 'Join us and celebrate the rich h...',
      reviews: 0,
      likes: 0,
      views: 505,
      date: 'Dec 14, 23',
      comments: 100,
      location: 'GROUP 3.5, Tema',
      status: 'Promo has ended',
     
    },
    {
      id: 23,
       image: Entertainmentimage7,
      title: "A SLEIGH FULL OF SAVINGS AT TOYS ZONE GHANA WITH OUR PRE-CHRISTMAS MEGA 10% SALES!",
      description: "Embrace the holiday spirit and...",
      reviews: 0,
      likes: 0,
      views: 572,
      date: 'Dec 11, 23',
      comments: 200,
      location: "TOYS ZONE GH, Madina Accra",
      status: 'Promo has ended',
    
    },
    {
      id: 24,
      image: Entertainmentimage8,
      logo: 'Aviation Social Centre',
      discount: '25%',
       reviews: 0,
      title: 'EXPERIENCE AFRO FUTURE THIS DECEMBER WITH 25% SLASH ON TICKETS!',
      description: 'For AfroFuture enthusiasts, BlacVo...',
       likes: 0,
      views: 616,
      date: 'Nov 24, 23',
      comments: 500,
      location: 'BLACVOLTA, Accra',
      status: 'COUNTDOWN AFRICA, Accra',
      bgColor: 'bg-white',
    }
  ]
  const Sports = [
     {
      id: 25,
      image: sportsimage1,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Your Fitness Journey Starts Here: 25% Discount for 25 Years Anniversary of Aviation Social Centre!',
      description: 'Your Fitness Journey Starts Her...',
       reviews: 0,
       likes: 0,
      views: 1197,
      date: 'Oct 21, 24',
      comments: 20,
      location: 'Aviation Social Centre, Accra Ghana',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
     {
      id: 26,
      image: sportsimage2,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'SAVE BIG! SAVE UP TO 50% OFF DISCOUNT AT DECATHLON BLACK FRIDAY',
      description: 'Get incredible savings on sports...',
       reviews: 0,
       likes: 0,
      views: 864,
      date: 'Nov 11, 23',
      comments: 500,
      location: 'DECATHLON GHANA, Nationwide',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
     {
      id: 27,
      image: sportsimage3,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: '5% off the new Mi Band 4',
      description: 'Get 5% off when you buy the Mi Band...',
       reviews: 0,
       likes: 1,
      views: 1235,
      date: 'Jul 12, 19',
      comments: 0,
      location: 'Mi Band Ghana, Tema',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    }
  ]
  const Clothing = [
     {
      id: 28,
      image: Clothingimage1,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Honour male heroes this Father’s Day with Exclusive Deals from Caveman Watches and PnJSandals',
      description: 'Celebrate Father’s Day with Excl...',
       reviews: 0,
       likes: 0,
      views: 917,
      date: 'Jun 11, 24',
      comments: 20,
      location: 'Caveman Watches, Accra Ghana',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
     {
      id: 29,
      image: Clothingimage2,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Exclusive to Couponsgh! Enjoy a Dazzling 10% Discount at AJ Collectionz',
      description: 'Slay on Budget! AJ Collectionz i...',
       reviews: 0,
       likes: 0,
      views: 1063,
      date: 'Feb 26, 24',
      comments: 150,
      location: 'AJ Collectionz, Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
     {
      id: 30,
      image: Clothingimage3,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Self-love? Romantic love? Family love? GTP Fashion got you covered with Unique 20% Valentine Promo',
      description: 'Slay on Budget! AJ Collectionz i...',
       reviews: 0,
       likes: 0,
      views: 604,
      date: 'Feb 12, 24',
      comments: 170,
      location: 'BLACVOLTA, Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
     {
      id: 31,
      image: Clothingimage4,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'THIS IS THE TIME TO ELEVATE YOUR PROJECTS WITH OUR EXCITING OFFER AT INDIGO-TEXTILES',
      description: 'Let your imagination run wild an...',
       reviews: 0,
       likes: 0,
      views: 500,
      date: 'Feb 08, 24',
      comments: 566,
      location: 'INDIGO-TEXTILES, Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
     {
      id: 32,
      image: Clothingimage5,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'EXPLORE OUR COLLECTIONS AND ENJOY VALENTINE\'S DAY WITH OUR 30% OFF AT OYIRIFIE BOUTIQUE',
      description: 'Elevate your wardrobe with our t...',
       reviews: 0,
       likes: 0,
      views: 565,
      date: 'Feb 07, 24',
      comments: 500,
      location: 'OYIRIFIE STYLE LOFT BUTIK, Spintex Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
     {
      id: 33,
      image: Clothingimage6,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'EXPERIENCE OUR SPECTACULAR OFFER OF UP TO 50% DISCOUNT ON OUR BRAND-NEW BAGS AT MOON FLOWER WARDROBE',
      description: 'Unveiling our latest collection wit...',
       reviews: 0,
       likes: 0,
      views: 542,
      date: 'Jan 18, 24',
      comments: 200,
      location: 'MOON FLOWER WARDROBE, Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    }
  ]
 const dealsByCategory = {
    All: All,
    'Restaurants and Food Delivery': Restaurants,
    'Entertainment': Entertainment,
    'Sports and Fitness': Sports,
    'Clothing and Fashion': Clothing,

  };

  const visibleDeals = dealsByCategory[activeCategory] || All;

  const DealCard = ({ deal }) => (
<div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300
  hover:shadow-xl border border-transparent hover:border-blue-600 cursor-pointer my-4 hover:-translate-y-1
">

    
      <img src={deal.image}/>
      <div className="p-4">
        <h3 className="text-blue-700 font-bold text-lg  mb-2  cursor-pointer text-decoration-none">
          {deal.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3">
          {deal.description}
        </p>

      
        <div className="flex items-center text-xl gap-1 mb-3">
          <span  className="text-gray-300">★★★★★</span>
          {/* {[...Array(5)].map((_, i) => (
            <span key={i} className="text-gray-300">★</span>
          ))} */}
          <span className="text-gray-500 text-sm ml-1">({deal.reviews})</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <FaRegThumbsUp  className="w-4 h-4 text-blue-600" />
            <span>({deal.likes})</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRegEye  className="w-4 h-4 text-blue-600" />
            <span>{deal.views}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>{deal.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaTags className="w-4 h-4 text-blue-600" />
            <span>{deal.comments}</span>
          </div>
         
        </div>

       
        <div className="flex items-center gap-1 text-sm text-gray-700 mb-2">
          <MapPin className="w-4 h-4" />
          <span>{deal.location}</span>
        </div>

    
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{deal.status}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
     
      <div className="bg-white shadow-sm w-full ">
       <div className="max-w-7xl mx-auto py-6 flex flex-row md:flex-col items-center md:items-start justify-between">
  <h1 className="lg:text-3xl text-xl px-3 lg:px-10 md:px-8 xl:px-0 font-bold text-gray-800 mb-1 text-left">
    Today's Most Claimed Deals
  </h1>

  {/* Filter Button - Mobile Only */}
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
      key={category}
      onClick={() => setActiveCategory(category)}
      className={`xl:px-4 lg:px-6 md:px-6 py-1 text-md ${
        activeCategory === category
          ? 'text-blue-600 font-extrabold'
          : 'text-gray-500 font-semibold hover:text-blue-600 cursor-pointer' 
      }`}
    >
      {category}
    </button>
  ))}
</div>
</div>
      </div>

{/* Mobile Filter Modal */}
      {isFilterOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsFilterOpen(false)}
          />
          
          {/* Filter Panel */}
          <div className=" bg-white  rounded-b-2xl shadow-2xl max-h-[80vh] overflow-hidden animate-slide-down">
            {/* Categories List */}
            <div className="overflow-y-auto max-h-[calc(80vh-80px)] bg-blue-600">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategorySelect(category)}
                  className={`w-full text-left px-6 py-4 text-base transition-all ${
                    activeCategory === category
                      ? 'bg-blue-700 text-white font-semibold border-l-4 border-white'
                      : 'text-white hover:bg-blue-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Deals Grid */}
      {/* <div className="max-w-7xl mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {All.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleDeals.length > 0 ? (
            visibleDeals.map((deal) => (
              <DealCard key={deal.id} deal={deal} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No deals found for this category
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DealsSection;