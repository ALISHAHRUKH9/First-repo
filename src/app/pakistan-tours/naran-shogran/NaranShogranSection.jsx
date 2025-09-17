"use client";
import Image from "next/image";

export default function NaranShogranSection() {
  return (
    <main>
      {/* ------------ Banner ------------ */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <Image
          src="/sogran1122.jpg"
          alt="3 Days Naran Shogran Tour Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ------------ Content ------------ */}
      <section className="bg-gray-50 text-gray-800 px-[30px] md:px-[150px] py-8">
        <h1 className="text-4xl font-bold text-center text-[#a5375c] mb-10">
          3 Days Naran Shogran Tour Packages 2025 – Eminent Travels
        </h1>

        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          {/* Tour Details */}
          <h2 className="text-2xl font-semibold">Tour Details</h2>
          <p>
            <strong>Naran The Truly Amazing Beautiful Valley</strong>
          </p>
          <p>
            <strong>Duration:</strong> 2 Nights & 3 Days <br />
            <strong>Group Size:</strong> 20 PERSON <br />
            <strong>Tentative Starting:</strong> EVERY FRIDAY
          </p>

          {/* Tour Summary */}
          <h2 className="text-xl font-semibold mt-6">Tour Summary</h2>
          <p>
            The scenic Naran beauty, which makes anyone spellbound, Naran valley
            is blessed with amazing countless locations and spots. Naran Kaghan
            Valley Tour Package is a simple, smooth, interactive tour plan ideal
            for families and couples. Especially for those with less time to
            explore the beauty of Northern Areas like Kaghan region. This short
            trip gives families a relaxing period to explore the splendor of
            Lake Saif Ul Malook, Lulusar Lake, and Babusar Top. Other beautiful
            places in Kaghan valley make this a bonus for nature lovers. Pakistan
            tourism is rapidly growing compared to other Asian countries, with
            travelers worldwide visiting this region. Airlines like Airblue, PIA,
            Serene Air, and AirSial make traveling easier with multiple options.
          </p>

          {/* ITINERARY */}
          <h2 className="text-xl font-semibold mt-6">ITINERARY</h2>

          <p>
            <strong>Day 1: Islamabad – Kaghan Valley</strong><br />
            Meet & Greet at Islamabad (7:00 am) … Departure for Naran (282km – 6/7hrs) … 
            Stopovers at Mansehra, Balakot & Kiwai waterfall … Arrive at Naran in the evening … 
            Evening walk at Naran Bazaar … Overnight stay at hotel.
          </p>

          <p>
            <strong>Day 2: Naran – Babusar Top</strong><br />
            Breakfast … Jeep ride to Saif ul Malook Lake (3hrs return) … Proceed to Babusar Top (13,700ft) … 
            Stopovers at Batakundi, Besal, Lulusar Lake … Enjoy panoramic views at Babusar Top … 
            Return to Naran … Overnight stay at hotel.
          </p>

          <p>
            <strong>Day 3: Kaghan Valley – Shogran</strong><br />
            Drive to Shogran (76km – 2.5hrs) … Jeep ride to Sri Paye Meadows … Visit lush green valleys … 
            Drive back to Islamabad via Balakot, Mansehra, Hazara Express Way … 
            Arrive Islamabad in late evening … Drop at Eminent Travels, Blue Area.  
            <em>End of Tour</em>
          </p>

          {/* Hotel */}
          <h2 className="text-xl font-semibold mt-6">Hotel</h2>
          <p>HOTEL HOME</p>

          {/* Includes */}
          <h2 className="text-xl font-semibold mt-6">INCLUDES</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Accommodation (Quad Sharing Basis)</li>
            <li>02 Pakistani Breakfast</li>
            <li>Coaster (Fuel, Toll Taxes, Parking)</li>
            <li>Dedicated Driver</li>
            <li>4WD Jeeps for Saif ul Malook & Shogran Sri Paye Meadows</li>
          </ul>

          {/* Not Includes */}
          <h2 className="text-xl font-semibold mt-6">NOT INCLUDES</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Entry Fee/Tickets & Porters</li>
            <li>Extra expenses due to landslides/roadblocks</li>
            <li>Expenses due to nature/political reasons</li>
            <li>Lunch, Dinner, Mineral Water, Laundry, etc.</li>
          </ul>

          {/* Child Policy */}
          <h2 className="text-xl font-semibold mt-6">CHILD POLICY</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Below 7 years sharing parents’ room – Free (Max 2)</li>
            <li>7–12 years – 50% of adult cost</li>
            <li>Above 12 years – Adult cost (Breakfast not included)</li>
          </ul>

          {/* Terms & Conditions */}
          <h2 className="text-xl font-semibold mt-6">TERMS & CONDITIONS</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Tour cost may change if plan is altered.</li>
            <li>3/4 hrs ± possible in hilly areas due to conditions.</li>
            <li>Respect local environment – dispose garbage properly.</li>
            <li>Organizers not responsible for unforeseen events.</li>
            <li>AC may be off during steep ascends to prevent overheating.</li>
            <li>Organizers not liable for accidents, theft, or damage.</li>
            <li>Itinerary may change due to local/political/weather reasons.</li>
            <li>Photos may be used for media purposes.</li>
            <li>Smoking in transport strictly prohibited.</li>
            <li>Organizers reserve right to terminate participant for indiscipline.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
