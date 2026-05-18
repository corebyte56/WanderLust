"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://wander-lust-server-pearl.vercel.app/bookings")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Loading UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading your bookings...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f8] px-6 py-10">

      {/* HEADER */}
      <h1 className="text-4xl font-light text-center mb-10">
        My Bookings
      </h1>

      {/* EMPTY STATE */}
      {bookings.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-center">

          <div className="text-6xl mb-4">📭</div>

          <h2 className="text-2xl font-light text-gray-700">
            No Bookings Yet
          </h2>

          <p className="text-gray-500 mt-2">
            You haven’t booked any trip yet. Start exploring destinations!
          </p>

          <Link href="/Destinations">
            <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl cursor-pointer">
              Explore Trips
            </button>
          </Link>

        </div>
      ) : (

        /* BOOKING GRID */
        <div className="grid md:grid-cols-3 gap-6">

          {bookings.map((b, i) => (
            <div
              key={i}
              className="bg-white border shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition"
            >

              <Image
                src={b.image}
                alt={b.name}
                width={500}
                height={300}
                className="h-48 w-full object-cover"
              />

              <div className="p-5">

                <h2 className="text-lg font-semibold text-gray-800">
                  {b.name}
                </h2>

                <p className="text-sm text-gray-500">
                  📍 {b.country}
                </p>

                <div className="flex justify-between items-center mt-3">

                  <p className="text-cyan-600 font-bold">
                    ${b.price}
                  </p>

                  <span className="text-xs text-gray-400">
                    Booked
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
}