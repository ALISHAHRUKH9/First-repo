"use client";
import Image from "next/image";

export default function UKSection() {
  return (
    <main>
      {/* ------------ Main Banner Section ------------ */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <Image
          src="/ukimg2.jpeg"
          alt="UK Visa Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ------------ Info Bar Section ------------ */}
      <section className="bg-gray-50 text-gray-800 px-[30px] md:px-[150px] py-8">
        <h2 className="text-4xl font-bold text-center text-[#a5375c] mb-10">
          UK Visit Visa – Eminent Travels
        </h2>

        <div className="w-full text-center space-y-6">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold">
            Hassle-Free UK Visa Application – Quick & Reliable
          </h1>

          {/* Intro */}
          <p className="text-sm md:text-base leading-relaxed">
            Dreaming of exploring <strong>United Kingdom</strong>? At{" "}
            <strong>Eminent Travels</strong>, we provide fast and reliable UK visit visa
            services for tourists, students, family visits, and business travelers.
            From the historic <em>Tower of London</em> to the breathtaking
            landscapes of <strong>Scotland</strong>, the UK is full of
            opportunities to experience culture, history, and modern life.
          </p>

          {/* Why Choose Us */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Why Apply for UK Visa with Us?
          </h2>

          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold">Quick Processing</h3>
              <p className="text-sm md:text-base">
                Get your UK visit visa processed quickly with our
                streamlined and professional service.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Affordable Packages</h3>
              <p className="text-sm md:text-base">
                Transparent and cost-effective pricing for all UK visa categories.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Expert Guidance</h3>
              <p className="text-sm md:text-base">
                Our team helps you prepare your documents properly
                to maximize your chances of approval.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Tourist & Family Visas</h3>
              <p className="text-sm md:text-base">
                Whether it’s tourism, attending family events, or official trips –
                we have the right solution for your needs.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Trusted Service</h3>
              <p className="text-sm md:text-base">
                Hundreds of travelers trust Eminent Travels for smooth UK visa processing.
              </p>
            </div>
          </div>

          {/* Types of UK Visas */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Types of UK Visas We Offer
          </h2>
          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold">Tourist Visa</h3>
              <p className="text-sm md:text-base">
                Ideal for vacations, sightseeing, and exploring famous attractions
                like <strong>London Eye</strong>, <strong>Big Ben</strong>, and
                <strong> Buckingham Palace</strong>.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Business Visa</h3>
              <p className="text-sm md:text-base">
                For entrepreneurs, conferences, and corporate meetings in the UK.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Family Visit Visa</h3>
              <p className="text-sm md:text-base">
                Designed for those visiting relatives, attending weddings,
                or family gatherings.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Student Visa Guidance</h3>
              <p className="text-sm md:text-base">
                We assist students in understanding UK study visa requirements
                and documentation.
              </p>
            </div>
          </div>

          {/* Extra Travel Tips */}
          <h2 className="text-xl md:text-2xl font-semibold mt-10">Travel Tips for the UK</h2>
          <p className="text-sm md:text-base leading-relaxed">
            The UK has one of the world’s best public transport systems,
            so getting around is easy. Don’t miss trying the classic{" "}
            <em>English Breakfast</em>, enjoying afternoon tea,
            and exploring countryside castles. Weather can be unpredictable,
            so always keep an umbrella with you!
          </p>

          {/* Closing */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Apply for Your UK Visit Visa Today!
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Start your UK journey with <strong>Eminent Travels</strong>.
            With professional guidance, affordable rates, and years of expertise,
            we make your UK visa application process stress-free and reliable.
          </p>
        </div>
      </section>
    </main>
  );
}
