"use client";
import Image from "next/image";

export default function ThailandSection() {
  return (
    <main>
      {/* ------------ Main Banner Section ------------ */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <Image
          src="/thailandpic.webp"
          alt="Thailand Visa Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ------------ Info Bar Section ------------ */}
      <section className="bg-gray-50 text-gray-800 px-[30px] md:px-[150px] py-8">
        <h2 className="text-4xl font-bold text-center text-[#a5375c] mb-10">
          Thailand Visit Visa – Eminent Travels
        </h2>

        <div className="w-full text-center space-y-6">
          {/* Heading */}
          <h1 className="text-2xl md:text-3xl font-bold">
            Hassle-Free Thailand Visa Application – Quick & Reliable
          </h1>

          {/* Intro */}
          <p className="text-sm md:text-base leading-relaxed">
            Planning a trip to <strong>Thailand</strong>? At{" "}
            <strong>Eminent Travels</strong>, we offer fast and trusted visa
            services for tourists, families, students, and business travelers.
            From the vibrant city life of <em>Bangkok</em> to the beautiful
            beaches of <strong>Phuket</strong> and <strong>Krabi</strong>, and
            the cultural charm of <strong>Chiang Mai</strong>, Thailand has
            something for everyone.
          </p>

          {/* Why Choose Us */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Why Apply for Thailand Visa with Us?
          </h2>

          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold">Quick Processing</h3>
              <p className="text-sm md:text-base">
                Get your Thailand visa approved without delays.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Affordable Packages</h3>
              <p className="text-sm md:text-base">
                Transparent and budget-friendly visa services.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Expert Support</h3>
              <p className="text-sm md:text-base">
                We guide you through the entire documentation process.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Tourist & Family Visas</h3>
              <p className="text-sm md:text-base">
                Whether for holidays or family visits, we provide complete
                solutions.
              </p>
            </div>
          </div>

          {/* Types of Thailand Visas */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Types of Thailand Visas We Offer
          </h2>
          <div className="space-y-4 text-left">
            <div>
              <h3 className="font-bold">Tourist Visa</h3>
              <p className="text-sm md:text-base">
                Perfect for exploring <strong>Bangkok temples</strong>,{" "}
                <strong>Phuket beaches</strong>, and{" "}
                <strong>Chiang Mai night markets</strong>.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Business Visa</h3>
              <p className="text-sm md:text-base">
                For trade shows, corporate meetings, and official work in
                Thailand.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Family Visit Visa</h3>
              <p className="text-sm md:text-base">
                Ideal for visiting loved ones or attending family gatherings.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Student Visa Guidance</h3>
              <p className="text-sm md:text-base">
                Support for students applying to universities or study programs
                in Thailand.
              </p>
            </div>
          </div>

          {/* Travel Tips */}
          <h2 className="text-xl md:text-2xl font-semibold mt-10">
            Travel Tips for Thailand
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Don’t miss Thai food like <em>Pad Thai</em>, <em>Tom Yum Soup</em>,
            and <em>Mango Sticky Rice</em>. Tuk-tuks and BTS Skytrain make city
            travel fun and easy. Thailand has a tropical climate, so carry light
            clothes and sunscreen when exploring beaches and islands.
          </p>

          {/* Closing */}
          <h2 className="text-xl md:text-2xl font-semibold">
            Apply for Your Thailand Visit Visa Today!
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Begin your Thailand adventure with <strong>Eminent Travels</strong>.
            With expert support, affordable pricing, and years of trusted
            service, we make your Thailand visa process simple and stress-free.
          </p>
        </div>
      </section>
    </main>
  );
}
