
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
import Resturantimage6 from '../assets/images/krave logo.jpg';
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

import Homeimage1 from '../assets/images/WhatsApp Image 2024-07-10 at 4.32.59 PM.jpg';
import Homeimage2 from '../assets/images/WhatsApp Image 2024-06-04 at 2.11.02 PM.jpg';
import Homeimage3 from '../assets/images/WhatsApp Image 2024-07-10 at 5.53.53 PM.jpg';
import Homeimage4 from '../assets/images/WhatsApp Image 2024-07-30 at 7.01.07 PM.jpg';

import Servicesimage1 from '../assets/images/ash.jpg';
import Servicesimage2 from '../assets/images/WhatsApp Image 2024-08-09 at 5.17.00 PM.jpg';

import Theaterimage1 from '../assets/images/ramanus.jpg';
import Theaterimage2 from '../assets/images/ae.jpg';
import Theaterimage3 from '../assets/images/WhatsApp Image 2024-09-10 at 12.19.24 PM.jpg';
import Theaterimage4 from '../assets/images/WhatsApp Image 2024-09-10 at 10.49.12 AM.jpg';

import Electronicsimage1 from '../assets/images/ELG LOGO.jpg';
import Electronicsimage2 from '../assets/images/WhatsApp Image 2024-01-31 at 10.51.52 AM.jpg';


import Healthimage1 from '../assets/images/WhatsApp Image 2024-02-14 at 10.47.41 PM.jpg';
import Healthimage2 from '../assets/images/Belz logo.jpg';
import Healthimage3 from '../assets/images/AA1.jpg';



import Tourismimage1 from '../assets/images/bb6.jpg';
import Tourismimage2 from '../assets/images/roots.jpg';
import Tourismimage3 from '../assets/images/asun.jpg';
import Tourismimage4 from '../assets/images/WhatsApp Image 2023-12-21 at 9.46.39 AM.jpg';

import generalimage1 from '../assets/images/WhatsApp Image 2024-02-17 at 10.45.42 AM.jpg';
import generalimage2 from '../assets/images/lala logo.jpg';

import Educationimage1 from '../assets/images/NNF logo.jpg';
import Educationimage2 from '../assets/images/Coupons png.jpg';

import transportimage1 from '../assets/images/achinlink logo.jpg';
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
      title: "Savor Love, Serve Flavor! Order from Krave & Fill and enjoy FREE Delivery on Lunch Baskets",
      description: 'Savor Love, Serve Flavor! Order...',
      reviews: 0,
      likes: 0,
      views: 194,
      date: ' Feb 01, 24',
      comments: 160,
      location: 'Krave & Fill,',
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
  const Home = [
     {
      id: 34,
      image: Homeimage1,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Unmissable Savings at Boateng Ventures: Get Up to 40% Off!',
      description: 'Boateng Ventures Mega Discoun...',
       reviews: 0,
       likes: 0,
      views: 598,
      date: 'Jul 10, 24',
      comments: 50,
      location: 'Boateng Ventures, Accra Ghana',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
     {
      id: 35,
      image: Homeimage2,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Get up to 30% discounts on our exclusive range of furniture at Alfemo Ghana Today!',
      description: 'Discover the perfect furniture at...',
       reviews: 0,
       likes: 0,
      views: 755,
      date: 'Jun 04, 24',
      comments: 20,
      location: 'Alfemo Ghana, Accra Ghana',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
    {
      id: 36,
      image: Homeimage3,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'HURRY UP AND DON’T MISS THIS 10- DAY PROMO 30% off At Caretta Furniture!',
      description: 'It is the Kwame Nkrumah Memor...',
       reviews: 0,
       likes: 0,
      views: 861,
      date: 'Jul 10, 24',
      comments: 30,
      location: 'Caretta Furniture, Accra Ghana',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
    {
      id: 37,
      image: Homeimage4,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Introducing our Executive Office Suites with an unbeatable 30% price slash at Ferri Home Design',
      description: 'Introducing our Executive Office...',
       reviews: 0,
       likes: 0,
      views: 646,
      date: 'jul 30, 24',
      comments: 20,
      location: 'Ferri Home Design Ghana, Accra Ghana',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
  ]
  const Services = [
     {
      id: 38,
      image: Servicesimage1,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: '"EGG CELLENT" EGG TRAY SALE PROMO AT SHINE DISPOSABLES',
      description: 'Enjoy egg- ceptional discounts...',
       reviews: 0,
       likes: 0,
      views: 665,
      date: 'Feb 19, 24',
      comments: 500,
      location: 'SHINE DISPOSABLES BY GHANA RUBBER, Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
     {
      id: 39,
      image: Servicesimage2,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Pamper Yourself at Mimi Skincare and Spa – Up to 40% Off!',
      description: 'Unveil your best self with Mimi...',
       reviews: 0,
       likes: 0,
      views: 927,
      date: 'Aug 09, 24',
      comments: 20,
      location: 'Mimi Skincare and Spa, Accra Ghana',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },]
const Electronics = [
     {
      id: 40,
      image: Electronicsimage1,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'UP TO 70% CLEARANCE SALES AT ELECTROLAND GHANA',
      description: 'Freedom truly tastes better with ...',
       reviews: 0,
       likes: 0,
      views: 642,
      date: 'Mar 04, 24',
      comments: 140,
      location: 'Electroland GH, Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
     {
      id: 41,
      image: Electronicsimage2,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'GHANA MONTH DISCOUNT PROMO AT TURF DEVICES',
      description: 'This is a better time to upgrade ...',
       reviews: 0,
       likes: 0,
      views: 669,
      date: 'Mar 05, 24',
      comments: 300,
      location: 'TURFDEVICES, Labone',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
  ]
 const Theater =[
    {
       id: 42,
      image: Theaterimage1,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Laugh your way to a tasty treat! Grab a 5kg bag of Evivi Rice with your Ramanus Incomplete ticket',
      description: 'Every Ticket purchased for #Ro...',
       reviews: 0,
       likes: 0,
      views: 563,
      date: ' Dec 14, 23',
      comments: 90,
      location: 'Romanus Incomplete Comedy Show, Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
    {
       id: 43,
      image: Theaterimage2,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'ELEVATE YOUR LIVING SPACES WITH STYLE AND SAVINGS WITH OUR 10% OFFER AT EXCEPTIONNEL FURNI CITY',
      description: 'Dont miss the chance to redefin...',
       reviews: 0,
       likes: 0,
      views: 596,
      date: 'Feb 01, 24',
      comments: 500,
      location: 'EXCEPTIONNEL FURNI CITY, Dansoman-Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
     {
       id: 44,
      image: Theaterimage3,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Big screen entertainment, anywhere you go! Grab your Flick Smart Projector at 30% off now!!',
      description: 'From home cinema to business...',
       reviews: 0,
       likes: 0,
      views: 594,
      date: 'Sep 10, 24',
      comments: 30,
      location: 'Flick Smart Projector, Accra Ghana',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
     {
       id: 45,
      image: Theaterimage4,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Films, music, & vibes! Join us at Silverbird Cinema on 20th Sept for SHORTS ON SHORTS!',
      description: 'Ready for a night of cinematic ma...',
       reviews: 0,
       likes: 0,
      views: 618,
      date: 'Sep 10, 24',
      comments: 20,
      location: 'Silverbird Cinema , Accra Ghana',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    }
    ]
 const Health =[
    {
       id: 46,
      image: Healthimage1,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'REJUVENATE YOUR BODY AND SOUL WITH OUR SPECIAL MONTH OF LOVE OFFER AT NOVE SPA GHANA !',
      description: 'Indulge in the ultimate spa escape...',
       reviews: 0,
       likes: 0,
      views: 523,
      date: ' Feb 14, 24',
      comments: 300,
      location: 'NOVA SPA GHANA, Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
    {
       id: 47,
      image: Healthimage2,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Belzpalaz Hair Products Is Giving 5% Discount To Coupons Ghana Subscribers',
      description: 'Want a hair product for rapid an...',
       reviews: 0,
       likes: 0,
      views: 248,
      date: 'Nov 04, 23',
      comments: 178,
      location: 'Belzpalaz Hair Product , Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
     {
       id: 48,
      image: Healthimage3,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'INDULGE YOUR SENSES WITH OUR UP TO 30% DISCOUNT AT GRACIAS HOME SPA!',
      description: 'Enjoy significant discounts on a...',
       reviews: 0,
       likes: 0,
      views: 827,
      date: 'Feb 15, 24',
      comments: 500,
      location: 'GRACIAS HOME SPA, Haasto- Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    }
    ]

   const General =[
    {
       id: 49,
      image: generalimage1,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'ENJOY SIGNIFICANT MARKDOWN ON THE EXTENSIVE MEGA SALE AT REAL STEEL CO. LTD',
      description: 'Dont miss out on this opportuni...',
       reviews: 0,
       likes: 0,
      views: 530,
      date: 'Feb 17, 24',
      comments: 300,
      location: 'REAL STEEL CO.LTD, Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
    {
       id: 50,
      image: generalimage2,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'HEAT UP YOUR BATHROOM RENOVATION WITH HOT DEALS ON WCS AND SHOWER SET AT TILES MARKET',
      description: 'Transform your bathroom into a...',
       reviews: 0,
       likes: 0,
      views: 300,
      date: 'Feb 19, 24',
      comments: 683,
      location: 'TILES MARKET GHANA, New bortianor, Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    }
    ]
  const Tourism =[
    {
       id: 51,
      image: Tourismimage1,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: '15% OFF ALL ROOM BOOKINGS AT BREEZES BEACH RESORT',
      description: '15% Exclusive discount for all Co...',
       reviews: 0,
       likes: 0,
      views: 249,
      date: 'Oct 22, 23',
      comments: 500,
      location: 'Breezes Beach Resort, Nationwide',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
    {
       id: 52,
      image: Tourismimage2,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'INDULGE IN LUXURY: ENJOY UP TO 30% & 40% OFF AT BOTH ROOTS HOTEL APARTMENT AND URBANO HOTEL',
      description: 'Treat yourself to a getaway and...',
       reviews: 0,
       likes: 0,
      views: 509,
      date: 'Nov 09, 23',
      comments:500,
      location: 'Roots Hotel Apartment And Urbano Hotel, Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
    {
       id: 53,
      image: Tourismimage3,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'ENJOY 10% OFF FOOD AND BEVERAGE PURCHASES AT SUNTAA RESORTs RESTAURANT! IN THIS MONTH OF LOVE',
      description: 'Escape to culinary bliss and ind...',
       reviews: 0,
       likes: 0,
      views: 175,
      date: 'Feb 14, 24',
      comments:300,
      location: 'SUNTAA BEACH BOXX, Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
    {
       id: 54,
      image: Tourismimage4,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'EXPERIENCE THE ULTIMATE RELAXATION WITH OUR EXTRAORDINARY 40% SPECIAL PROMO AT VOLTA HOTEL',
      description: 'Book your stay now and treat yo...',
       reviews: 0,
       likes: 0,
      views: 567,
      date: 'Dec 21, 23',
      comments:200,
      location: 'VOLTA HOTEL AKOSOMBO, Akosombo Comm 1, Akosombo',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    }
  ]
  const Education =[
    {
       id: 54,
      image: Educationimage1,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: '75% Special Discount at NNF Enquire LTD',
      description: '75% discount on all UK IGCSE,...',
       reviews: 0,
       likes: 0,
      views: 250,
      date: 'Oct 06, 23',
      comments: 565,
      location: 'NNF Esquire Ltd, Tema, Accra',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    },
    {
       id: 55,
      image: Educationimage2,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Get 2 free online coding classes for kids from 7 to 17 in Ghana',
      description: 'Visit geeklama.com and get 2 fr...',
       reviews: 0,
       likes: 0,
      views: 1127,
      date: 'May 11, 20',
      comments:0,
      location: 'Geeklama, Ghana',
      status: 'Promo has ended',
      bgColor: 'bg-white',
    }
  ]
  const Transport =[
    {
       id: 56,
      image: transportimage1,
      logo: 'Aviation Social Centre',
      discount: '25%',
      title: 'Save 20% While You Learn Driving @ Achilinks Driving School',
      description: 'Practical and Safe driving lessons...',
       reviews: 0,
       likes: 0,
      views: 537,
      date: 'Nov 21, 23',
      comments: 50,
      location: 'Achilinks Driving School, Accra',
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
    'Home Improvement': Home,
    'Services': Services,
    'Theater and Cinema': Theater,
    'Gadgets and Electronics': Electronics,
    'Health and Wellness': Health,
    'General Merchandize': General,
    'Tourism and Hospitality': Tourism,
    'Education': Education,
    'Transport': Transport,

  };

  const visibleDeals = dealsByCategory[activeCategory] || All;

  const DealCard = ({ deal }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-transparent hover:border-blue-600 cursor-pointer my-4 hover:-translate-y-1 h-auto flex flex-col">

      <img src={deal.image} alt={deal.title} className="h-48 w-auto object-cover shadow-md" />
      <div className="p-4 flex flex-col grow">
        <h3
          className="text-blue-700 font-bold mb-2 cursor-pointer"
          style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.125rem)',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {deal.title}
        </h3>

        <p className="text-gray-600 text-sm mb-3 truncate" style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {deal.description}
        </p>

        <div className="flex items-center text-xl gap-1 mb-3">
          <span className="text-gray-300">★★★★★</span>
          <span className="text-gray-500 text-sm ml-1">({deal.reviews})</span>
        </div>

        <div className="flex flex-wrap items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-1">
            <FaRegThumbsUp className="w-4 h-4 text-blue-600" />
            <span className="hidden sm:inline">({deal.likes})</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRegEye className="w-4 h-4 text-blue-600" />
            <span>{deal.views}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>{deal.date}</span>
          </div>
          <div className="flex items-center gap-1  md:flex">
            <FaTags className="w-4 h-4 text-blue-600" />
            <span>{deal.comments}</span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-700 mb-2 mt-auto">
          <MapPin className="w-4 h-4" />
          <span className='truncate'>{deal.location}</span>
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
  <h1 className="lg:text-3xl text-lg px-3 lg:px-10 md:px-8 xl:px-0 font-bold text-gray-800 mb-1 text-left">
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
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors top-0 "
              >
                <svg className="top-0  w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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