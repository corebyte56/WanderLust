"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/destinations")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching destinations:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-semibold">
        Loading destinations...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10">
        🌍 Travel Destinations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={1000}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">
                {item.name}
              </h2>

              <p className="text-sm text-gray-500 mb-2">
                📍 {item.country}
              </p>

              <p className="text-gray-600 text-sm mb-3">
                {item.description}
              </p>

              <div className="flex justify-between text-sm text-gray-700 mb-3">
                <span>⏳ {item.duration}</span>
                <span className="font-semibold text-green-600">
                  ${item.price}
                </span>
              </div>

              <div className="text-xs text-gray-500">
                🚀 Departure: {item.departureDate}
              </div>

              <Link href={`/Destinations/${item._id}`} className="block">
              <button className="mt-4 w-full bg-cyan-600 text-white py-2 rounded-xl hover:bg-cyan-700 transition cursor-pointer">
                View Details
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;