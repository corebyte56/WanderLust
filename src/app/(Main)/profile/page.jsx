"use client";

import Image from "next/image";
import {
  FaEnvelope,
  FaLocationDot,
  FaPhone,
  FaSuitcase,
} from "react-icons/fa6";

const ProfilePage = () => {
  return (
    <section className="min-h-screen bg-[#f8f8f8] py-20 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* ================= LEFT PROFILE CARD ================= */}
        <div className="bg-white border border-gray-200 p-8 h-fit">

          {/* IMAGE */}
          <div className="flex flex-col items-center text-center">

            <Image
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
              width={140}
              height={140}
              className="w-[140px] h-[140px] rounded-full object-cover"
            />

            <h1 className="text-3xl font-light mt-6">
              John Anderson
            </h1>

            <p className="text-cyan-500 text-sm mt-2">
              Premium Traveler
            </p>

          </div>

          {/* INFO */}
          <div className="mt-10 space-y-6">

            <div className="flex items-center gap-4 text-gray-600">
              <FaEnvelope className="text-cyan-500" />
              <p>john@example.com</p>
            </div>

            <div className="flex items-center gap-4 text-gray-600">
              <FaPhone className="text-cyan-500" />
              <p>+880 1234-567890</p>
            </div>

            <div className="flex items-center gap-4 text-gray-600">
              <FaLocationDot className="text-cyan-500" />
              <p>Dhaka, Bangladesh</p>
            </div>

          </div>

          {/* BUTTON */}
          <button className="w-full mt-10 border border-black py-4 text-sm uppercase tracking-widest hover:bg-black hover:text-white duration-300 cursor-pointer">
            Edit Profile
          </button>

        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="lg:col-span-2 space-y-10">

          {/* ABOUT */}
          <div className="bg-white border border-gray-200 p-10">

            <h2 className="text-4xl font-light mb-6">
              About Me
            </h2>

            <p className="text-gray-500 leading-9 text-[17px]">
              Passionate traveler who loves discovering beautiful
              destinations, exploring cultures, and creating unforgettable
              travel memories around the world.
            </p>

          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white border border-gray-200 p-8 text-center">

              <h1 className="text-5xl font-light text-cyan-500">
                12
              </h1>

              <p className="text-gray-500 mt-3">
                Trips Completed
              </p>

            </div>

            <div className="bg-white border border-gray-200 p-8 text-center">

              <h1 className="text-5xl font-light text-cyan-500">
                8
              </h1>

              <p className="text-gray-500 mt-3">
                Countries Visited
              </p>

            </div>

            <div className="bg-white border border-gray-200 p-8 text-center">

              <h1 className="text-5xl font-light text-cyan-500">
                4.9
              </h1>

              <p className="text-gray-500 mt-3">
                Traveler Rating
              </p>

            </div>

          </div>

          {/* RECENT BOOKINGS */}
          <div className="bg-white border border-gray-200 p-10">

            <div className="flex items-center justify-between mb-8">

              <h2 className="text-4xl font-light">
                Recent Bookings
              </h2>

              <button className="text-cyan-500 text-sm hover:underline cursor-pointer">
                View All
              </button>

            </div>

            <div className="space-y-6">

              {/* BOOKING */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 p-6 gap-5">

                <div className="flex items-center gap-5">

                  <Image
                    src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600"
                    alt="trip"
                    width={120}
                    height={90}
                    className="w-[120px] h-[90px] object-cover"
                  />

                  <div>

                    <h3 className="text-2xl font-light">
                      Bali Paradise
                    </h3>

                    <p className="text-gray-400 text-sm mt-2">
                      7 Days / 6 Nights
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <FaSuitcase className="text-cyan-500" />

                  <span className="text-sm text-gray-500">
                    Upcoming Trip
                  </span>

                </div>

              </div>

              {/* BOOKING */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 p-6 gap-5">

                <div className="flex items-center gap-5">

                  <Image
                    src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
                    alt="trip"
                    width={120}
                    height={90}
                    className="w-[120px] h-[90px] object-cover"
                  />

                  <div>

                    <h3 className="text-2xl font-light">
                      Maldives Escape
                    </h3>

                    <p className="text-gray-400 text-sm mt-2">
                      5 Days / 4 Nights
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <FaSuitcase className="text-cyan-500" />

                  <span className="text-sm text-gray-500">
                    Completed Trip
                  </span>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfilePage;