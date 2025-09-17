"use client";
import Image from "next/image";

export default function MalaysiaSection() {
  return (
    <main>
      {/* ------------ Main Banner Section ------------ */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <Image
          src="/malaysiapic.webp"
          alt="Malaysia Visa Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ------------ Info Bar Section ------------ */}
      <section className="bg-gray-50 text-gray-800 px-[30px] md:px-[150px] py-8">
        <h2 className="text-4xl font-bold text-center text-[#a5375c] mb-10">
          Malaysia Visit Visa – Eminent Travels
        </h2>

        <div className="w-full text-center space-y-6">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold">
            Hassle-Free Malaysia Visa Application – Quick & Trusted
          </h1>

          {/* Intro */}
          <p className="text-sm md:text-base leading-relaxed">
            Planning a trip to <strong>Malaysia</strong>? At{" "}
            <strong>Eminent Travels</strong>, we provide fast and reliable
            Malaysia visit visa services for tourists, students, family visits,
            and business travelers. From the iconic{" "}
            <em>Petronas Twin Towers</em> in <strong>Kuala Lumpur</strong> to
            the beautiful beaches of <strong>Langkawi</strong> and the cultural
            heritage of <strong>Penang</strong>, Malaysia offers a perfect mix
            of modernity, culture, and natural beauty.
          </p>

          {/* Why Choose Us */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Why Apply for Malaysia Visa with Us?
          </h2>

          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold">Fast Processing</h3>
              <p className="text-sm md:text-base">
                Get your Malaysia visa approved quickly with our professional
                guidance and support.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Affordable Pricing</h3>
              <p className="text-sm md:text-base">
                Cost-effective visa services with transparent fees.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Expert Documentation</h3>
              <p className="text-sm md:text-base">
                We assist with accurate documentation to ensure smooth visa
                approvals.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Tourist & Family Visas</h3>
              <p className="text-sm md:text-base">
                Whether it’s for holidays, family reunions, or cultural trips –
                we’ve got you covered.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Trusted Services</h3>
              <p className="text-sm md:text-base">
                Many travelers rely on Eminent Travels for hassle-free Malaysia
                visa processing.
              </p>
            </div>
          </div>

          {/* Types of Malaysia Visas */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Types of Malaysia Visas We Offer
          </h2>
          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold">Tourist Visa</h3>
              <p className="text-sm md:text-base">
                Ideal for sightseeing at attractions like{" "}
                <strong>Petronas Towers</strong>,{" "}
                <strong>Batu Caves</strong>, and{" "}
                <strong>Langkawi Islands</strong>.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Business Visa</h3>
              <p className="text-sm md:text-base">
                For trade fairs, corporate meetings, and business events in
                Malaysia.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Family Visit Visa</h3>
              <p className="text-sm md:text-base">
                Best for travelers visiting relatives or attending family
                occasions.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Student Visa Guidance</h3>
              <p className="text-sm md:text-base">
                Support for students applying to universities and institutions
                in Malaysia.
              </p>
            </div>
          </div>

          {/* Travel Tips */}
          <h2 className="text-xl md:text-2xl font-semibold mt-10">
            Travel Tips for Malaysia
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Malaysia is famous for its diverse culture and amazing street food.
            Don’t miss{" "}
            <em>Nasi Lemak</em>, <em>Satay</em>, and <em>Teh Tarik</em>. Public
            transport like LRT, buses, and Grab taxis make traveling easy. The
            weather is tropical, so carry light clothes and stay hydrated while
            exploring beaches and rainforests.
          </p>

          {/* Closing */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Apply for Your Malaysia Visit Visa Today!
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Start your journey to Malaysia with <strong>Eminent Travels</strong>
            . With expert guidance, affordable pricing, and years of experience,
            we ensure a smooth and stress-free visa application process.
          </p>
        </div>
      </section>
    </main>
  );
}
