"use client";

import React from "react";
import toast from "react-hot-toast";

const BookNow = () => {
  const handleBooking = () => {
    toast.success("🎉 Booking Successful!");
  };

  return (
    <div>
      <button
        onClick={handleBooking}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 mt-5 duration-300 cursor-pointer"
      >
        Book Now →
      </button>
    </div>
  );
};

export default BookNow;