"use client";
import Image from "next/image";

export default function SaudiSection() {
  return (
    <main>
      {/* ------------ Main Banner Section ------------ */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <Image
          src="/saudiarabiaimg.png"
          alt="Saudi Arabia Visa Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ------------ Info Bar Section ------------ */}
      <section className="bg-gray-50 text-gray-800 px-[30px] md:px-[150px] py-8">
        <h2 className="text-4xl font-bold text-center text-[#a5375c] mb-10">
          Saudi Arabia Visit Visa – Eminent Travels
        </h2>

        <div className="w-full text-center space-y-6">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold">
            Hassle-Free Saudi Arabia Visa Application – Quick & Reliable
          </h1>

          {/* Intro */}
          <p className="text-sm md:text-base leading-relaxed">
            Planning to visit <strong>Saudi Arabia</strong>? At <strong>Eminent Travels</strong>, 
            we provide fast and reliable Saudi visit visa services for tourists, family visits, 
            Umrah pilgrims, and business travelers. Our process is smooth, transparent, and stress-free.
          </p>

          {/* Why Choose Us */}
          <h2 className="text-xl md:text-2xl font-semibold">Why Apply for Saudi Visa with Us?</h2>

          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold">Quick Processing</h3>
              <p className="text-sm md:text-base">
                Get your Saudi visit visa approved in just a few working days with our 
                streamlined process.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Affordable Packages</h3>
              <p className="text-sm md:text-base">
                We offer competitive and transparent pricing for all Saudi visa types.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Expert Guidance</h3>
              <p className="text-sm md:text-base">
                Our experienced team ensures your application and documents are complete 
                for smooth approval.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Tourist & Family Visas</h3>
              <p className="text-sm md:text-base">
                Whether it’s tourism or visiting family, we provide the right visa for your needs.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Trusted Service</h3>
              <p className="text-sm md:text-base">
                With years of experience, Eminent Travels is trusted by hundreds of clients 
                for Saudi visa processing.
              </p>
            </div>
          </div>

          {/* Types of Saudi Visas */}
          <h2 className="text-xl md:text-2xl font-semibold">Types of Saudi Arabia Visas We Offer</h2>
          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold">Tourist Visa</h3>
              <p className="text-sm md:text-base">
                Ideal for vacations, sightseeing, and exploring Saudi Arabia’s culture.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Business Visa</h3>
              <p className="text-sm md:text-base">
                For entrepreneurs, corporate meetings, and official travel purposes.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Family Visit Visa</h3>
              <p className="text-sm md:text-base">
                Specially designed for those visiting their loved ones in Saudi Arabia.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Umrah Visa Assistance</h3>
              <p className="text-sm md:text-base">
                We provide full support for Umrah pilgrims, making the process smooth and simple.
              </p>
            </div>
          </div>

          {/* Closing */}
          <h2 className="text-xl md:text-2xl font-semibold">Apply for Your Saudi Visit Visa Today!</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Start your Saudi journey with <strong>Eminent Travels</strong>. 
            With fast approvals, expert guidance, and affordable rates, 
            we make your Saudi visa application process easier than ever.
          </p>
        </div>
      </section>
    </main>
  );
}
