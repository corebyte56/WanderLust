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
      .then((data) => { setBookings(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading your bookings...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f8f8] px-4 py-8 md:px-6 md:py-10">

      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-normal text-gray-900">My Bookings</h1>
        <p className="text-sm text-gray-500 mt-1">Manage and view your upcoming travel plans</p>
      </div>

      {bookings.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-center">
          <div className="text-6xl mb-4">📭</div>
          <h2 className="text-2xl font-light text-gray-700">No Bookings Yet</h2>
          <p className="text-gray-500 mt-2">You haven't booked any trip yet. Start exploring!</p>
          <Link href="/Destinations">
            <button className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl cursor-pointer">
              Explore Trips
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {bookings.map((b, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden"
            >
              {/* IMAGE */}
              <div className="w-full sm:w-48 md:w-56 h-44 sm:h-auto relative flex-shrink-0">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* BODY */}
              <div className="flex-1 px-4 py-4 md:px-5 min-w-0">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full mb-2 ${
                    b.status === "confirmed"
                      ? "bg-green-50 text-green-700"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${b.status === "confirmed" ? "bg-green-500" : "bg-amber-400"}`} />
                  {b.status === "confirmed" ? "Confirmed" : "Pending"}
                </span>

                <h2 className="text-lg md:text-xl font-semibold text-gray-900 truncate sm:whitespace-normal">
                  {b.name}
                </h2>

                <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                  🗓 Departure: {b.departure || "May 15, 2026"}
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  📍 Booking ID: {b.bookingId || b._id || "b1"}
                </p>

                <p className="text-lg md:text-xl font-bold text-cyan-600 mt-2">${b.price}</p>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center justify-end gap-2 px-4 pb-4 sm:pb-0 sm:pr-4 flex-shrink-0">
                <button className="flex items-center gap-1.5 text-sm text-red-500 border border-red-400 px-3 md:px-4 py-2 rounded-lg hover:bg-red-50 transition cursor-pointer">
                  🗑 Cancel
                </button>
                <button className="flex items-center gap-1.5 text-sm text-white bg-cyan-600 hover:bg-cyan-700 px-3 md:px-4 py-2 rounded-lg transition cursor-pointer">
                  👁 View
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}