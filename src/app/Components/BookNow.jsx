"use client";

import toast from "react-hot-toast";

const BookNow = ({ destination }) => {
  const handleBooking = async () => {
    try {
      const res = await fetch(
        "https://wander-lust-server-pearl.vercel.app/bookings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: destination.name,
            image: destination.image,
            price: destination.price,
            country: destination.country,
            date: new Date(),
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error("Failed");
      }

      toast.success("🎉 Booking Successful!");
      console.log(data);
    } catch (err) {
      console.log(err);
      toast.error("❌ Booking Failed!");
    }
  };

  return (
    <button
      onClick={handleBooking}
      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 mt-5 cursor-pointer"
    >
      Book Now →
    </button>
  );
};

export default BookNow;