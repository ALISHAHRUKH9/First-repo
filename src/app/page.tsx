"use client";
import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp} from "react-icons/fa";

export default function Home() {
  return (
    <main>
      {/* ------------ Main Banner Section ------------ */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <Image
          src="/front3.jpeg"
          alt="Home Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ------------ Info Bar Section ------------ */}
       <section className="flex flex-wrap justify-center items-center gap-6 md:gap-10 px-4 py-8 bg-gray-200 text-center">
      
      {/* 24/7 Support */}
      <div className="flex items-center gap-3 min-w-[250px] justify-center">
        <Image
          src="/phone1.jpeg"
          alt="24/7 Support"
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <span className="font-semibold text-gray-800">24/7 Hours Support</span>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-2 min-w-[250px] justify-center">
        <FaPhoneAlt className="text-green-500 text-lg" />
        <span className="text-gray-700 font-medium">+92 322 8378735</span>
      </div>

      {/* WhatsApp */}
      <div className="flex items-center gap-2 min-w-[250px] justify-center">
        <FaWhatsapp className="text-green-500 text-lg" />
        <span className="text-gray-700 font-medium">WhatsApp +92 322 8378735</span>
      </div>

      {/* Email */}
      <div className="flex items-center gap-2 min-w-[250px] justify-center">
        <span className="text-gray-700 font-medium">✉️ Eminenttravels2019@gmail.com</span>
      </div>

    </section>

{/* ----------------------------------------------------------------------------------------------------------------------------------- */}

<section className="bg-gray-100 py-10">
  {/* ===== Heading Section ===== */}
  <div className="bg-gray-100 py-10 flex items-center justify-center px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
      Travel Made Easy: Explore <span className="text-[#a5375c]">Visa-Ready</span> Countries
    </h2>
  </div>

  {/* ===== Cards Section ===== */}
  <div className="px-4 sm:px-10 md:px-20 lg:px-32 py-10 flex flex-wrap justify-center gap-6">
    {[
      {
        src: "/dubai3.jpg",
        title: "Dubai, UAE",
        desc: "A glamorous city of modern architecture and desert adventures.",
        animation: "fadeIn",
      },
      {
        src: "/kuala laumpur.avif",
        title: "Kuala Lumpur, Malaysia",
        desc: "A perfect blend of tradition and technology in Southeast Asia.",
        animation: "slideInLeft",
      },
      {
        src: "/istanbul.jpg",
        title: "Istanbul, Turkey",
        desc: "Explore rich history, culture, and stunning architecture.",
        animation: "slideInRight",
      },
      {
        src: "/bankong.webp",
        title: "Bangkok, Thailand",
        desc: "Famous for its vibrant street life and ornate temples.",
        animation: "fadeInUp",
      },
      {
        src: "/Singapore-3.jpg",
        title: "Singapore",
        desc: "A clean, green and tech-forward city destination.",
        animation: "zoomIn",
      },
      {
        src: "/saudi.jpg",
        title: "Riyadh, Saudi Arabia",
        desc: "A land of rich culture, history, and religious significance.",
        animation: "bounceIn",
      },
    ].map((card, index) => (
      <div
        key={index}
        className={`w-full sm:w-[45%] md:w-[30%] rounded-lg p-4 shadow-[0_4px_20px_rgba(0,0,0,0.4)] 
        transition transform hover:scale-105 duration-300 
        animate-${card.animation} flex flex-col justify-between 
        bg-white/60 backdrop-blur-sm`}
      >
        {/* ===== Image Section ===== */}
        <div className="w-full h-[220px] overflow-hidden rounded-md">
          <Image
            src={card.src}
            alt={card.title}
            width={500}
            height={220}
            className="object-cover w-full h-full"
          />
        </div>

        {/* ===== Text Content ===== */}
        <div className="mt-2">
          <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{card.desc}</p>
        </div>

        {/* ===== Button ===== */}
        <div className="mt-3 mb-1">
          <button className="bg-[#a5375c] text-white text-xs px-4 py-2 rounded hover:bg-[#8f2e4f]">
            Read More ...
          </button>
        </div>
      </div>
    ))}
  </div>
</section>




{/* ----------------------------------------------------------------------------------------------------------------------------- */}

<section className="bg-white py-16 px-6 lg:px-32">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-[#a5375c] mb-10">
      Welcome to Eminent Travels
    </h2>

    <p className="text-gray-700 text-lg leading-7 mb-6">
      <strong>Eminent Travels</strong> has established itself as a premier travel agency renowned for its comprehensive services and customer-centric approach. With a robust network of partners and a team of experienced professionals, <strong>Eminent Travels</strong> is committed to making every journey seamless, enjoyable, and memorable. Whether planning a business trip, a family vacation, or a solo adventure, <strong>Eminent Travels</strong> is your trusted partner in travel, offering a wide range of services to cater to all your travel needs.
    </p>

    <h3 className="text-2xl font-semibold text-gray-800 mb-4 mt-10">Services Offered by Eminent Travels</h3>

    <ul className="list-disc pl-6 space-y-3 text-gray-700">
      <li>
        <strong>Flight Booking:</strong> Hassle-free flight bookings with competitive rates on domestic and international flights.
      </li>
      <li>
        <strong>Visa Assistance:</strong> Professional visa assistance for smooth and stress-free travel documentation.
      </li>
      <li>
        <strong>Hotel Reservations:</strong> Wide range of hotel booking options tailored to meet all budgets and preferences.
      </li>
      <li>
        <strong>Umrah and Hajj Packages:</strong> Carefully crafted pilgrimage packages for a comfortable spiritual journey.
      </li>
      <li>
        <strong>Customized Tour Packages:</strong> Personalized travel experiences built around your interests and schedule.
      </li>
      <li>
        <strong>Car Rentals:</strong> Flexible and affordable car rental options with multiple vehicle categories.
      </li>
      <li>
        <strong>Corporate Travel Management:</strong> Efficient travel solutions for business professionals and companies.
      </li>
      <li>
        <strong>World Tours / Pakistan Tours:</strong> Explore global destinations or the hidden gems of Pakistan with our curated tours.
      </li>
      <li>
        <strong>Franchise Opportunities:</strong> Partner with Eminent Travels to build your business in the travel industry.
      </li>
    </ul>
  </div>
</section>

    </main>
  );
}

