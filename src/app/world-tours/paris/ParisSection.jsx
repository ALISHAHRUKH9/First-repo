"use client";
import Image from "next/image";

export default function ParisSection() {
  return (
    <main>
      {/* ------------ Main Banner Section ------------ */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <Image
          src="/paris1.jpg"
          alt="Paris Visa Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ------------ Info Bar Section ------------ */}
      <section className="bg-gray-50 text-gray-800 px-[30px] md:px-[150px] py-8">
        <h2 className="text-4xl font-bold text-center text-[#a5375c] mb-10">
          Paris Visit Visa – Eminent Travels
        </h2>

        <div className="w-full text-center space-y-6">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold">
            Hassle-Free Paris Visa Application – Quick & Reliable
          </h1>

          {/* Intro */}
          <p className="text-sm md:text-base leading-relaxed">
            Dreaming of a trip to <strong>Paris</strong>? At{" "}
            <strong>Eminent Travels</strong>, we provide fast and reliable
            Paris visit visa services for tourists, students, family visits,
            and business travelers. From the world-famous{" "}
            <em>Eiffel Tower</em> to the romantic streets of{" "}
            <strong>Montmartre</strong> and the stunning{" "}
            <strong>Louvre Museum</strong>, Paris is a city filled with art,
            culture, and timeless beauty.
          </p>

          {/* Why Choose Us */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Why Apply for Paris Visa with Us?
          </h2>

          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold">Quick Processing</h3>
              <p className="text-sm md:text-base">
                Get your Paris visa processed quickly with our expert guidance.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Affordable Packages</h3>
              <p className="text-sm md:text-base">
                Transparent pricing with no hidden charges for all visa types.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Expert Documentation</h3>
              <p className="text-sm md:text-base">
                Our team helps you prepare all documents properly to maximize
                approval chances.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Tourist & Family Visas</h3>
              <p className="text-sm md:text-base">
                Whether you are traveling solo, with family, or for official
                purposes, we provide tailored solutions.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Trusted Service</h3>
              <p className="text-sm md:text-base">
                Many travelers trust Eminent Travels for smooth Paris visa
                processing.
              </p>
            </div>
          </div>

          {/* Types of Paris Visas */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Types of Paris Visas We Offer
          </h2>
          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold">Tourist Visa</h3>
              <p className="text-sm md:text-base">
                Perfect for exploring attractions like{" "}
                <strong>Eiffel Tower</strong>,{" "}
                <strong>Disneyland Paris</strong>,{" "}
                <strong>Seine River Cruise</strong>, and{" "}
                <strong>Notre-Dame Cathedral</strong>.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Business Visa</h3>
              <p className="text-sm md:text-base">
                For business meetings, exhibitions, and corporate events in
                Paris.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Family Visit Visa</h3>
              <p className="text-sm md:text-base">
                For those visiting relatives or attending family celebrations
                in France.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Student Visa Guidance</h3>
              <p className="text-sm md:text-base">
                Support for students planning to study in Paris with proper
                visa guidance.
              </p>
            </div>
          </div>

          {/* Extra Travel Tips */}
          <h2 className="text-xl md:text-2xl font-semibold mt-10">
            Travel Tips for Paris
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Paris has an excellent <strong>metro system</strong> that makes
            exploring easy. Don’t miss trying French{" "}
            <em>croissants</em>, <em>macarons</em>, and{" "}
            <em>escargots</em>. For shopping lovers,{" "}
            <strong>Champs-Élysées</strong> and{" "}
            <strong>Galeries Lafayette</strong> are must-visits. The city is
            also famous for its romantic spots like{" "}
            <em>Seine River cruises</em> and the artistic streets of{" "}
            <strong>Montmartre</strong>. Weather can vary, so pack
            accordingly, especially if you’re visiting in winter.
          </p>

          {/* Closing */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Apply for Your Paris Visit Visa Today!
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Start your Paris journey with <strong>Eminent Travels</strong>.
            With professional support, affordable pricing, and years of
            expertise, we make your Paris visa application process smooth and
            stress-free.
          </p>
        </div>
      </section>
    </main>
  );
}
