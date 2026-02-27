// import { TbFilterSearch } from "react-icons/tb";
// import {  Clock, MapPin } from 'lucide-react';
// import { FaRegThumbsUp ,FaRegEye ,FaTags  } from "react-icons/fa";

// const DealCard = ({ deal }) => {
//   return (
//     <div className="card">
//       <img src={deal.image} alt={deal.title} width="200" />
//       <h3>{deal.title}</h3>
//       <p>{deal.description}</p>
//       <p>{deal.location}</p>
//       <p>{deal.status}</p>
//     </div>
//   );
// };

// export default DealCard;

import { Clock, MapPin } from 'lucide-react';
import { FaRegThumbsUp ,FaRegEye ,FaTags  } from "react-icons/fa";

const DealCard = ({ deal }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-transparent hover:border-blue-600 cursor-pointer my-4 hover:-translate-y-1 h-auto flex flex-col">

      <img 
        src={deal.image} 
        alt={deal.title} 
        className="h-48 w-full object-cover shadow-md" 
      />

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
};

export default DealCard;