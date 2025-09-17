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
            Fast & Reliable Turkey Visa Application Services
          </h1>

          {/* Intro */}
          <p className="text-sm md:text-base leading-relaxed">
            Want to explore <strong>Turkey</strong>? At{" "}
            <strong>Eminent Travels</strong>, we provide quick and reliable visa
            services for <em>Istanbul</em>, <em>Cappadocia</em>,{" "}
            <em>Antalya</em>, and other amazing destinations. Turkey is the
            perfect blend of history, culture, and natural beauty.
          </p>

          {/* Why Choose Us */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Why Apply for Turkey Visa with Us?
          </h2>

          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold">Quick Approval</h3>
              <p className="text-sm md:text-base">
                Get your Turkey visa approved quickly with professional support.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Affordable Prices</h3>
              <p className="text-sm md:text-base">
                Transparent and budget-friendly packages for all travelers.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Expert Guidance</h3>
              <p className="text-sm md:text-base">
                Our team ensures complete documentation for smooth processing.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Tourist & Family Visas</h3>
              <p className="text-sm md:text-base">
                Whether you’re traveling solo, with family, or for business – we
                have solutions for everyone.
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
                Visit famous attractions like <strong>Hagia Sophia</strong>,{" "}
                <strong>Blue Mosque</strong>, and{" "}
                <strong>Pamukkale Hot Springs</strong>.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Business Visa</h3>
              <p className="text-sm md:text-base">
                Attend trade fairs, conferences, and business meetings in
                Turkey.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Family Visit Visa</h3>
              <p className="text-sm md:text-base">
                Ideal for visiting relatives or attending family events.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Student Visa Guidance</h3>
              <p className="text-sm md:text-base">
                We provide guidance for students planning to study in Turkey’s
                top universities.
              </p>
            </div>
          </div>

          {/* Travel Tips */}
          <h2 className="text-xl md:text-2xl font-semibold mt-10">
            Travel Tips for Turkey
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Try local food like <em>Kebabs</em>, <em>Baklava</em>, and{" "}
            <em>Turkish Tea</em>. Use Istanbul’s{" "}
            <strong>metro and tram system</strong> for easy travel. Turkey’s
            weather varies, so pack accordingly if you’re visiting beaches in
            summer or mountains in winter.
          </p>

          {/* Closing */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Apply for Your Turkey Visit Visa Today!
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Start your Turkey adventure with <strong>Eminent Travels</strong>.
            With affordable rates, expert advice, and years of trusted service,
            we make your visa application smooth and stress-free.
          </p>
        </div>
      </section>
    </main>
  );
}
