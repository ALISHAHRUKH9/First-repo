"use client";
import Image from "next/image";

export default function FlightSection() {
  return (
    <main>
      {/* ------------ Main Banner Section ------------ */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <Image
          src="/Airplane1.jpg"
          alt="Home Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

   {/* ------------ Info Bar Section ------------ */}
<section className="bg-gray-50 text-gray-800 px-[30px] md:px-[150px] py-8">

 <h2 className="text-4xl font-bold text-center text-[#a5375c] mb-10">
      Welcome to Eminent Travels
    </h2>

  <div className="w-full text-center space-y-6">
    {/* Heading */}
    <h1 className="text-2xl md:text-3xl font-bold">
      Book Flights with Ease – Discover the Best Deals Worldwide
    </h1>

    {/* Intro */}
    <p className="text-sm md:text-base leading-relaxed">
      Are you planning your next trip? Look no further! At <strong>Eminent Travels</strong>, we provide a better booking experience to help you find the best flights at unbeatable prices. Whether you’re traveling for business, leisure, or a last-minute getaway, our flight booking platform ensures you get to your destination without any hassle.
    </p>

    {/* Why Book */}
    <h2 className="text-xl md:text-2xl font-semibold">Why Book Flights with Us?</h2>

    <div className="space-y-4 text-left">
      <div>
        <h3 className="font-bold">Competitive Pricing</h3>
        <p className="text-sm md:text-base">We offer some of the best prices in the market, ensuring you get maximum value without compromising on comfort and convenience. Say goodbye to endless searches—our platform brings you affordable options in seconds.</p>
      </div>

      <div>
        <h3 className="font-bold">Extensive Destinations</h3>
        <p className="text-sm md:text-base">From bustling cities to tranquil retreats, discover flights to thousands of destinations worldwide. No matter where you want to go, we have a route to take you there. Our diverse selection of airlines and flight paths means that your dream vacation is just a booking away.</p>
      </div>

      <div>
        <h3 className="font-bold">Easy Booking Process</h3>
        <p className="text-sm md:text-base">With our user-friendly interface, booking your flight is a breeze. Use easy filters to refine your search results by airline, price, duration, and more — so you can find the best deal quickly.</p>
      </div>

      <div>
        <h3 className="font-bold">Exclusive Discounts</h3>
        <p className="text-sm md:text-base">Get access to exclusive offers, early-bird discounts, and last-minute deals that help you save more on your travel plans.</p>
      </div>

      <div>
        <h3 className="font-bold">Wide Range of Options</h3>
        <p className="text-sm md:text-base">Choose from a variety of airlines, seating classes, and routes to suit your travel preferences — from budget-friendly carriers to first-class luxury.</p>
      </div>

      <div>
        <h3 className="font-bold">Customer-Centric Support</h3>
        <p className="text-sm md:text-base">At <strong>Eminent Travels</strong>, we prioritize customer satisfaction from booking to return. Our dedicated support team is available via phone, email, and live chat.</p>
      </div>
    </div>

    {/* Types of Flights */}
    <h2 className="text-xl md:text-2xl font-semibold">Types of Flights We Offer</h2>
    <div className="space-y-4 text-left">
      <div>
        <h3 className="font-bold">Domestic Flights</h3>
        <p className="text-sm md:text-base">Quick, convenient, and affordable travel within the country — perfect for short getaways or business trips.</p>
      </div>

      <div>
        <h3 className="font-bold">International Flights</h3>
        <p className="text-sm md:text-base">Travel to global destinations with top airlines and flexible routes.</p>
      </div>

      <div>
        <h3 className="font-bold">Last-Minute Flights</h3>
        <p className="text-sm md:text-base">Urgent plans? Book last-minute at competitive rates without the stress.</p>
      </div>

      <div>
        <h3 className="font-bold">One-Way & Round-Trip Flights</h3>
        <p className="text-sm md:text-base">Flexible travel options to suit short trips, extended stays, or multi-city itineraries.</p>
      </div>
    </div>

    {/* Closing */}
    <h2 className="text-xl md:text-2xl font-semibold">Book Your Flight Today!</h2>
    <p className="text-sm md:text-base leading-relaxed">
      Are you ready to take off on your next adventure? At <strong>Eminent Travels</strong>, we are dedicated to making your travel dreams come true. With unbeatable prices and a wide range of options, booking with us is the first step toward unforgettable memories.
    </p>
  </div>
</section>



    
    </main>
  );
}

