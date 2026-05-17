"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://wander-lust-server-pearl.vercel.app/destinations")
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl font-light">
        Loading...
      </div>
    );
  }

  return (
    <section className="bg-[#f8f8f8] min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ================= TOP ================= */}
        <div className="mb-10">

          <h1 className="text-5xl font-light text-black">
            Explore All Destinations
          </h1>

          <p className="text-gray-500 mt-3 text-sm">
            Find your perfect travel experience from our curated collection
          </p>

          {/* FILTERS */}
          <div className="grid grid-cols-1 md:grid-cols-3 mt-10 border border-gray-300">

            <select className="border-r border-gray-300 px-5 py-4 bg-transparent outline-none text-sm text-gray-600">
              <option>CATEGORY</option>
              <option>Adventure</option>
              <option>Beach</option>
              <option>Mountain</option>
            </select>

            <select className="border-r border-gray-300 px-5 py-4 bg-transparent outline-none text-sm text-gray-600">
              <option>PRICE RANGE</option>
              <option>$1000 - $2000</option>
              <option>$2000 - $4000</option>
            </select>

            <select className="px-5 py-4 bg-transparent outline-none text-sm text-gray-600">
              <option>SORT BY</option>
              <option>Low Price</option>
              <option>High Price</option>
            </select>

          </div>

          <p className="text-gray-500 text-sm mt-6">
            Showing {destinations.length} destinations
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {destinations.map((item) => (
            <div key={item._id} className="group">

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={350}
                  className="w-full h-[240px] object-cover group-hover:scale-105 duration-500"
                />

                {/* RATING */}
                <div className="absolute top-4 right-4 bg-white px-3 py-1 text-xs flex items-center gap-1">
                  4.5 ★
                </div>
              </div>

              {/* CONTENT */}
              <div className="pt-4">

                {/* COUNTRY */}
                <p className="text-gray-400 text-xs flex items-center gap-1">
                  📍 {item.country}
                </p>

                {/* NAME + PRICE */}
                <div className="flex items-center justify-between mt-2">

                  <h2 className="text-[22px] font-light text-black">
                    {item.name}
                  </h2>

                  <div>
                    <span className="text-black text-xl font-medium">
                      ${item.price}
                    </span>

                    <span className="text-gray-400 text-xs">
                      /Person
                    </span>
                  </div>
                </div>

                {/* DURATION */}
                <p className="text-gray-400 text-sm mt-2">
                  🗓️ {item.duration}
                </p>

                {/* BUTTON */}
                <Link href={`/Destinations/${item._id}`}>
                  <button className="mt-5 text-cyan-500 uppercase tracking-wider text-sm flex items-center gap-2 hover:gap-4 duration-300 cursor-pointer">
                    Book Now ↗
                  </button>
                </Link>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Destination;