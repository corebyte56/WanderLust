import Image from "next/image";

export default function TravelSections() {
  return (
    <div>

      {/* ================= WHY CHOOSE ================= */}
      <section className="bg-[#edf9fc] py-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-5xl font-light text-black">
              Why Choose Wanderlust
            </h2>

            <p className="text-gray-500 mt-3 text-sm">
              Your trusted partner for exceptional travel experiences
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">

            {/* Card */}
            <div className="bg-white p-10 border border-gray-100">
              <div className="mb-6">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/2913/2913465.png"
                  alt="safe"
                  width={34}
                  height={34}
                />
              </div>

              <h3 className="text-[28px] font-light mb-4">
                Safe & Secure
              </h3>

              <p className="text-gray-500 leading-7 text-[15px]">
                Your safety is our priority with comprehensive travel
                insurance and 24/7 support.
              </p>
            </div>

            {/* Card */}
            <div className="bg-white p-10 border border-gray-100">
              <div className="mb-6">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
                  alt="guide"
                  width={34}
                  height={34}
                />
              </div>

              <h3 className="text-[28px] font-light mb-4">
                Expert Guides
              </h3>

              <p className="text-gray-500 leading-7 text-[15px]">
                Local experts who bring destinations to life with
                authentic cultural insights.
              </p>
            </div>

            {/* Card */}
            <div className="bg-white p-10 border border-gray-100">
              <div className="mb-6">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/597/597177.png"
                  alt="support"
                  width={34}
                  height={34}
                />
              </div>

              <h3 className="text-[28px] font-light mb-4">
                24/7 Support
              </h3>

              <p className="text-gray-500 leading-7 text-[15px]">
                Round-the-clock customer service to assist you wherever
                your journey takes you.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Top */}
          <div className="flex items-center justify-between mb-14">

            <div>
              <h2 className="text-5xl font-light">
                What Travelers Say
              </h2>

              <p className="text-gray-500 text-sm mt-3">
                Real experiences from our happy travelers
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:flex gap-4">
              <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white duration-300">
                ←
              </button>

              <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-black hover:text-white duration-300">
                →
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Card */}
            <div className="border border-gray-200 p-7 flex flex-col md:flex-row gap-7 items-center">

              <div className="flex-1">
                <p className="text-[20px] leading-9 font-light text-black">
                  The Bali Trip Was Absolutely Magical! Every Detail Was
                  Perfectly Planned.
                </p>

                <div className="mt-10">
                  <h4 className="text-cyan-500 text-sm">
                    — Michael Chen
                  </h4>

                  <p className="text-gray-400 text-xs mt-1">
                    Singapore
                  </p>
                </div>
              </div>

              <Image
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="traveler"
                width={180}
                height={180}
                className="object-cover"
              />
            </div>

            {/* Card */}
            <div className="border border-gray-200 p-7 flex flex-col md:flex-row gap-7 items-center">

              <div className="flex-1">
                <p className="text-[20px] leading-9 font-light text-black">
                  Swiss Alps Adventure Exceeded All Expectations. The
                  Mountain Views Were Breathtaking!
                </p>

                <div className="mt-10">
                  <h4 className="text-cyan-500 text-sm">
                    — Sarah Johnson
                  </h4>

                  <p className="text-gray-400 text-xs mt-1">
                    New York, USA
                  </p>
                </div>
              </div>

              <Image
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="traveler"
                width={180}
                height={180}
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">

        {/* Background */}
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
          alt="travel"
          fill
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6">

          <h2 className="text-6xl font-light leading-tight">
            Ready To Start Your Journey?
          </h2>

          <p className="mt-5 text-gray-200 text-lg">
            Join thousands of travelers who have discovered the world with us
          </p>

          <button className="mt-10 bg-white text-black px-10 py-4 text-sm tracking-widest hover:bg-cyan-500 hover:text-white duration-300">
            BOOK YOUR TRIP TODAY →
          </button>

        </div>
      </section>
    </div>
  );
}