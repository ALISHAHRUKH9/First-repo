"use client";
import Image from "next/image";

export default function DubaiSection() {
  return (
    <main>
      {/* ------------ Main Banner Section ------------ */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <Image
          src="/dubaiimg.webp"
          alt="Dubai Visa Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ------------ Info Bar Section ------------ */}
      <section className="bg-gray-50 text-gray-800 px-[30px] md:px-[150px] py-8">
        <h2 className="text-4xl font-bold text-center text-[#a5375c] mb-10">
          Dubai Visa Services – Eminent Travels
        </h2>

        <div className="w-full text-center space-y-6">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold">
            Hassle-Free Dubai Visa Application – Fast & Reliable
          </h1>

          {/* Intro */}
          <p className="text-sm md:text-base leading-relaxed">
            Planning a trip to <strong>Dubai</strong>? At <strong>Eminent Travels</strong>, 
            we provide fast and reliable Dubai visa services tailored to your travel needs. 
            Whether it’s for tourism, business, or family visits, we make the process smooth 
            and stress-free.
          </p>

          {/* Why Choose Us */}
          <h2 className="text-xl md:text-2xl font-semibold">Why Apply for Dubai Visa with Us?</h2>

          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold">Quick Processing</h3>
              <p className="text-sm md:text-base">
                Get your Dubai visa approved in just a few working days with our 
                streamlined process.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Affordable Packages</h3>
              <p className="text-sm md:text-base">
                We offer competitive pricing for all types of Dubai visas without hidden charges.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Expert Guidance</h3>
              <p className="text-sm md:text-base">
                Our visa experts assist you at every step, from documentation to approval.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Tourist & Business Visas</h3>
              <p className="text-sm md:text-base">
                Whether it’s a holiday or an official trip, we provide visas for all categories.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Trusted Service</h3>
              <p className="text-sm md:text-base">
                With years of experience, Eminent Travels has helped hundreds of travelers 
                visit Dubai without hassle.
              </p>
            </div>
          </div>

          {/* Types of Dubai Visas */}
          <h2 className="text-xl md:text-2xl font-semibold">Types of Dubai Visas We Offer</h2>
          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold">Tourist Visa</h3>
              <p className="text-sm md:text-base">
                Short-term visas for vacations, sightseeing, and leisure trips.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Business Visa</h3>
              <p className="text-sm md:text-base">
                Designed for entrepreneurs, meetings, and corporate visits.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Transit Visa</h3>
              <p className="text-sm md:text-base">
                Perfect for travelers with a short layover in Dubai on the way to another country.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Family Visit Visa</h3>
              <p className="text-sm md:text-base">
                For those visiting relatives or family members in Dubai.
              </p>
            </div>
          </div>

          {/* Closing */}
          <h2 className="text-xl md:text-2xl font-semibold">Apply for Your Dubai Visa Today!</h2>
          <p className="text-sm md:text-base leading-relaxed">
            Start your Dubai journey with <strong>Eminent Travels</strong>. 
            With quick approvals, expert support, and affordable rates, 
            we make your Dubai visa application easier than ever.
          </p>
        </div>
      </section>
    </main>
  );
}
