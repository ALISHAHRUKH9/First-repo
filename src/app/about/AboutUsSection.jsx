"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrows
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}

export default function AboutUsSection() {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 120000, // 2 minutes
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Testimonials Data
  const testimonials = [
    {
      img: "/client1.jpg",
      text: "Eminent Travels made my journey smooth and stress-free!",
    },
    {
      img: "/client2.jpg",
      text: "Professional visa assistance, highly recommended!",
    },
    {
      img: "/client3.jpg",
      text: "Best service for Hajj & Umrah. I felt valued and cared for.",
    },
    {
      img: "/client4.jpg",
      text: "Ticketing service was quick and affordable.",
    },
    {
      img: "/client5.jpg",
      text: "Excellent support, they stayed in touch until my trip ended.",
    },
    {
      img: "/client6.jpg",
      text: "Client satisfaction truly is their top priority!",
    },
  ];

  return (
    <>
      {/* Pehla Section (About Us) */}
      <section className="px-4 md:px-10 lg:px-20 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="w-full h-[300px] relative rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/vector.png"
              alt="About Image"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col items-center text-center">
            {/* Choti Image (Heading ki jagah) */}
            <div className="w-[300px] h-[150px] relative mb-4">
              <Image
                src="/aboutusvector.jpg"
                alt="About Us"
                fill
                className="object-contain"
              />
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg leading-7">
              Founded by Mr. <strong>Syed Usman Azam</strong>, our journey began
              with a passion for helping people travel with comfort and trust.
              His leadership continues to guide us every day.
            </p>
          </div>
        </div>
      </section>

      {/* Naya Section - Eminent Travels */}
      <section className="px-4 md:px-10 lg:px-20 py-10">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#a5375c] text-center mb-6 tracking-wide">
          Eminent Travels
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-7 text-left mb-6">
          Eminent Travels was established on December 13, 2019, with a vision to
          provide reliable and trustworthy travel services. From Hajj and Umrah
          packages to visa assistance and international ticketing, we are
          committed to making every journey smooth and stress-free. We ensure
          all our services are delivered on time at reasonable prices. Until the
          client completes their journey, we take full responsibility and remain
          in continuous contact to provide complete support. Our main motive is
          client satisfaction — ensuring that every traveler feels valued and
          fully satisfied with our services.
        </p>

        {/* Points */}
        <ul className="list-none text-gray-800 text-left space-y-2">
          <li>
            Specialized in <strong>Hajj & Umrah Packages</strong>
          </li>
          <li>
            Professional <strong>Visa Assistance</strong> for multiple countries
          </li>
          <li>
            Affordable <strong>International & Domestic Ticketing</strong>
          </li>
          <li>
            All services are delivered{" "}
            <strong>on time & at reasonable prices</strong>
          </li>
          <li>
            <strong>Full responsibility</strong> until the client completes
            their journey
          </li>
          <li>
            Stay in <strong>continuous contact</strong> with clients for full
            support
          </li>
          <li>
            Our top priority is <strong>Client Satisfaction</strong>
          </li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="w-full flex justify-center items-center py-10 bg-gray-100">
        {/* Inner Box with height = 50% width & centered */}
        <div className="w-[70%] aspect-[2/1] bg-white shadow-lg rounded-xl flex items-center justify-center relative">
          {/* Testimonials Section */}
          <div className="w-[90%]">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#a5375c] text-center mb-10">
              What Our Clients Say
            </h2>

            <Slider {...settings}>
              {testimonials.map((review, index) => (
                <div key={index} className="flex flex-col items-center justify-center text-center p-6">
                  {/* Circle Image (centered) */}
                  <div className="w-28 h-28 flex justify-center items-center rounded-full overflow-hidden mb-4 shadow-lg">
                    <Image
                      src={review.img}
                      alt={`Client ${index + 1}`}
                      width={112}
                      height={112}
                      className="object-cover"
                    />
                  </div>

                  {/* Comment */}
                  <p className="text-gray-600 italic text-lg max-w-xl text-center mb-4">
                    "{review.text}"
                  </p>

                  {/* Stars (all yellow) */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
