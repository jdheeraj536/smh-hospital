import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Har 1 second mein countdown kam karein
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/'); // 5 second baad home page par redirect
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full bg-white rounded-3xl p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 text-center">
        
        {/* Icon / Badge */}
        <div className="w-20 h-20 mx-auto rounded-2xl bg-red-50 text-[#E4002B] flex items-center justify-center mb-6 shadow-inner">
          <AlertTriangle size={40} />
        </div>

        {/* Error Code */}
        <h1 className="text-7xl md:text-8xl font-black text-[#5D241C] mb-4 tracking-wider">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
          Page Not Found (पेज नहीं मिला)
        </h2>

        {/* Description & Auto Redirect Notice */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          Lagta hai aap galat link par aa gaye hain ya yeh page abhi uplabdh nahi hai.
        </p>

        {/* Countdown Badge */}
        <div className="inline-block bg-red-50 text-[#E4002B] px-4 py-2 rounded-xl font-semibold text-sm mb-8">
          Auto redirecting to Home in <span className="font-bold text-lg">{countdown}</span> seconds...
        </div>

        {/* Home Button */}
        <div>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center w-full md:w-auto bg-[#E4002B] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#c40025] transition shadow-lg gap-3"
          >
            <Home size={20} />
            Go Back To Home Now
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;