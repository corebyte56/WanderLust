import Image from "next/image";
import Link from "next/link";
import {
  FaLocationDot,
  FaRegCalendar,
  FaStar,
} from "react-icons/fa6";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `https://wander-lust-server-pearl.vercel.app/destinations/${id}`,
    {
      cache: "no-store",
    }
  );

  const destination = await res.json();

  const {
    image,
    price,
    name,
    duration,
    country,
    description,
    departureDate,
    highlights,
  } = destination;

  return (
    <section className="bg-[#f8f8f8] min-h-screen pb-20">

      {/* ================= TOP ================= */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        <Link
          href="/Destinations"
          className="text-gray-500 text-sm hover:text-black duration-300"
        >
          ← Back to Destinations
        </Link>

        <div className="flex gap-3">

          <button className="border border-gray-300 px-5 py-2 text-sm hover:bg-black hover:text-white duration-300 cursor-pointer">
            Edit
          </button>

          <button className="border border-red-300 text-red-500 px-5 py-2 text-sm hover:bg-red-500 hover:text-white duration-300 cursor-pointer">
            Cancel
          </button>

        </div>
      </div>

      {/* ================= IMAGE ================= */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="overflow-hidden">

          <Image
            src={image}
            alt={name}
            width={1400}
            height={700}
            className="w-full h-[520px] object-cover"
          />

        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 mt-12">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2">

            {/* COUNTRY */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <FaLocationDot />
              <p>{country}</p>
            </div>

            {/* TITLE */}
            <h1 className="text-6xl font-light text-black mt-3">
              {name}
            </h1>

            {/* REVIEW */}
            <div className="flex flex-wrap items-center gap-5 mt-6">

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaStar className="text-green-500" />
                <span>4.9 (234 reviews)</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <FaRegCalendar />
                <span>{duration}</span>
              </div>

            </div>

            {/* OVERVIEW */}
            <div className="mt-14">

              <h2 className="text-4xl font-light mb-5">
                Overview
              </h2>

              <p className="text-gray-500 leading-9 text-[17px]">
                {description}
              </p>

            </div>

            {/* HIGHLIGHTS */}
            <div className="mt-14">

              <h2 className="text-4xl font-light mb-5">
                Highlights
              </h2>

              <p className="text-gray-500 leading-9 text-[17px] mb-8">
                Discover the beauty of {country} with unforgettable
                experiences, scenic landscapes, and premium comfort.
              </p>

              <div className="grid md:grid-cols-2 gap-y-5 gap-x-10">

                {highlights?.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <span className="text-green-500">✔</span>
                    {highlight}
                  </div>
                ))}

              </div>

            </div>
          </div>

          {/* RIGHT CARD */}
          <div>

            <div className="bg-white border border-gray-200 p-8 shadow-sm sticky top-10">

              <p className="text-gray-400 text-sm">
                Starting from
              </p>

              <h1 className="text-5xl text-cyan-500 font-semibold mt-2">
                ${price}
              </h1>

              <p className="text-gray-400 text-sm mt-1">
                per person
              </p>

              {/* DATE */}
              <div className="mt-8 border border-gray-200 px-5 py-4 text-gray-500 text-sm">
                {departureDate}
              </div>

              {/* BUTTON */}
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 mt-5 duration-300 cursor-pointer">
                Book Now →
              </button>

              {/* FEATURES */}
              <div className="mt-8 space-y-4 text-sm text-gray-500">

                <p>✔ Free cancellation up to 7 days</p>

                <p>✔ Travel insurance included</p>

                <p>✔ 24/7 customer support</p>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DestinationDetailsPage;