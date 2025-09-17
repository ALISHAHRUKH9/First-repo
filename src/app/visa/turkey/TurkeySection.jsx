"use client";
import Image from "next/image";

export default function TurkeySection() {
  return (
    <main>
      {/* ------------ Main Banner Section ------------ */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <Image
          src="/turkey1.jpg"
          alt="Turkey Visa Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ------------ Info Bar Section ------------ */}
      <section className="bg-gray-50 text-gray-800 px-[30px] md:px-[150px] py-8">
        <h2 className="text-4xl font-bold text-center text-[#a5375c] mb-10">
          Turkey Visit Visa – Eminent Travels
        </h2>

        <div className="w-full text-center space-y-6">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold">
            Hassle-Free Turkey Visa Application – Quick & Reliable
          </h1>

          {/* Intro */}
          <p className="text-sm md:text-base leading-relaxed">
            Planning to explore <strong>Turkey</strong>? At{" "}
            <strong>Eminent Travels</strong>, we provide fast and reliable
            Turkey visit visa services for tourists, students, family visits, 
            and business travelers. From the iconic <em>Hagia Sophia</em> in{" "}
            <strong>Istanbul</strong> to the magical landscapes of{" "}
            <strong>Cappadocia</strong>, Turkey offers a unique blend of
            history, culture, and breathtaking scenery.
          </p>

          {/* Why Choose Us */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Why Apply for Turkey Visa with Us?
          </h2>

          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold">Quick Processing</h3>
              <p className="text-sm md:text-base">
                Get your Turkey visit visa processed quickly with our 
                professional and efficient service.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Affordable Packages</h3>
              <p className="text-sm md:text-base">
                Cost-effective and transparent pricing for all Turkey visa categories.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Expert Guidance</h3>
              <p className="text-sm md:text-base">
                Our experts assist you with proper documentation to maximize 
                your visa approval chances.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Tourist & Family Visas</h3>
              <p className="text-sm md:text-base">
                Whether it’s tourism, family events, or official visits – 
                we provide tailored solutions for every need.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Trusted Service</h3>
              <p className="text-sm md:text-base">
                Hundreds of travelers trust Eminent Travels for smooth Turkey visa processing.
              </p>
            </div>
          </div>

          {/* Types of Turkey Visas */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Types of Turkey Visas We Offer
          </h2>
          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold">Tourist Visa</h3>
              <p className="text-sm md:text-base">
                Perfect for vacations and sightseeing at attractions like{" "}
                <strong>Blue Mosque</strong>, <strong>Topkapi Palace</strong>, 
                and <strong>Pamukkale</strong>.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Business Visa</h3>
              <p className="text-sm md:text-base">
                For business meetings, trade fairs, and corporate events in Turkey.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Family Visit Visa</h3>
              <p className="text-sm md:text-base">
                Designed for travelers visiting relatives or attending family functions.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Student Visa Guidance</h3>
              <p className="text-sm md:text-base">
                Assistance for students planning to study in Turkey with 
                proper visa documentation support.
              </p>
            </div>
          </div>

          {/* Extra Travel Tips */}
          <h2 className="text-xl md:text-2xl font-semibold mt-10">Travel Tips for Turkey</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Turkey is well connected with buses, trams, and domestic flights 
            making travel easy. Don’t miss trying traditional{" "}
            <em>Turkish Tea</em>, savoring <em>Kebabs</em>, 
            and shopping at the historic <strong>Grand Bazaar</strong>. 
            The weather varies, so pack accordingly if you’re visiting 
            coastal or mountainous regions.
          </p>

          {/* Closing */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Apply for Your Turkey Visit Visa Today!
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Start your Turkey journey with <strong>Eminent Travels</strong>. 
            With professional support, affordable pricing, and years of expertise, 
            we make your Turkey visa application process smooth and stress-free.
          </p>
        </div>
      </section>
    </main>
  );
}
