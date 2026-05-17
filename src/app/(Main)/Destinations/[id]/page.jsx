import Image from "next/image";
import { FaRegCalendar, FaLocationDot } from "react-icons/fa6";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

 const res = await fetch(`https://wander-lust-server-pearl.vercel.app/destinations/${id}`, {
  cache: "no-store",
});

  const destination = await res.json();

  const {
    image,
    price,
    name,
    duration,
    country,
    description,
    departureDate,
  } = destination;

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Image */}
      <div className="overflow-hidden rounded-3xl shadow-lg">
        <Image
          className="w-full h-[500px] object-cover hover:scale-105 transition duration-500"
          alt={name}
          src={image}
          height={500}
          width={1200}
        />
      </div>

      {/* Content */}
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <FaLocationDot className="text-cyan-600" />
            <p>{country}</p>
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {name}
          </h1>

          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <FaRegCalendar className="text-cyan-600" />
              <span>{duration}</span>
            </div>

            <div className="bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full text-sm font-medium">
              Departure: {departureDate}
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-3">
            Overview
          </h2>

          <p className="text-gray-600 leading-8">
            {description}
          </p>
        </div>

        {/* Right Side Card */}
        <div className="bg-white shadow-xl rounded-3xl p-6 h-fit border">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Tour Price
          </h2>

          <h1 className="text-5xl font-bold text-cyan-600 mb-6">
            ${price}
          </h1>

          <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-2xl font-semibold transition cursor-pointer">
            Book Now
          </button>

          <div className="mt-6 border-t pt-4 text-sm text-gray-500 space-y-2">
            <p>✔ Best Price Guarantee</p>
            <p>✔ Free Cancellation</p>
            <p>✔ Secure Booking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;