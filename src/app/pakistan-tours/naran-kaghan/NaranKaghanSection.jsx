"use client";
import Image from "next/image";

export default function NaranKaghanSection() {
  return (
    <main>
      {/* ------------ Banner ------------ */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <Image
          src="/Naran Kaghan Tour Packages.webp"
          alt="Naran Kaghan Tour Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ------------ Content ------------ */}
      <section className="bg-gray-50 text-gray-800 px-[30px] md:px-[150px] py-8">
        <h1 className="text-4xl font-bold text-center text-[#a5375c] mb-10">
          Naran Kaghan Tour Packages 2025 (3 Nights / 4 Days) – Eminent Travels
        </h1>

        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          {/* Day-wise Details */}
          <h2 className="text-2xl font-semibold">Tour Details – ITINERARY</h2>

          <p>
            <strong>Day 01: Islamabad – Shogran</strong><br />
            After breakfast, drive to Shogran via Hazara Motorway with views of lush
            forests and majestic peaks including Malika Parbat (5290m) and
            Koh-i-Marka (3900m). Continue via Mansehra, Balakot Village near the
            Kunhar River, and Kawai. From Kawai take the jeep road to Shogran.
            Upon arrival, transfer to hotel for overnight stay.
          </p>

          <p>
            <strong>Day 02: Shogran – Siri Payee – Shogran – Naran</strong><br />
            Take a jeep ride, hike, or horse ride to Siri Payee Meadows (3000m) and
            Payee Lake, surrounded by Makra Peak, Malika Parbat, and Moosa ka Musalla.
            After sightseeing, return to Shogran and continue the journey to Naran.
            Transfer to hotel for overnight stay.
          </p>

          <p>
            <strong>Day 03: Naran – Lulusar Lake – Babusar Top – Naran</strong><br />
            Early breakfast, full-day excursion to Lulusar Lake and Babusar Pass
            (68 km from Naran). On the way, visit Battakundi, Lalazar Plateau junction,
            Burawai, and Lulusar Lake (largest in Hazara, source of Kunhar River).
            Continue to Gittidas and Babusar Top for breathtaking views.
            Return to Naran for overnight stay.
          </p>

          <p>
            <strong>Day 04: Naran – Saif ul Malook Lake – Islamabad</strong><br />
            Morning jeep excursion to Lake Saif ul Malook (3200m), surrounded by
            Himalayas and Malika Parbat reflecting in the crystal-clear water.
            After sightseeing, drive back to Islamabad. Drop at desired location.
            <em> End of Tour </em>
          </p>

          {/* Includes */}
          <h2 className="text-xl font-semibold mt-6">INCLUDES</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Accommodation (Hotels with Breakfast)</li>
            <li>Luxury Air Transport with Driver</li>
            <li>4WD Jeeps for Shogran, Siri Payee & Saif ul Malook</li>
            <li>All Toll Taxes & Parking Fees</li>
            <li>English-speaking Tour Guide</li>
          </ul>

          {/* Not Includes */}
          <h2 className="text-xl font-semibold mt-6">NOT INCLUDES</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Porters for luggage</li>
            <li>Lunch, Dinner, Beverages, Laundry, Telephone etc.</li>
            <li>Personal Expenses or Extra Activities</li>
            <li>Unexpected costs due to landslides or political issues</li>
          </ul>

          {/* Important Note */}
          <h2 className="text-xl font-semibold mt-6">IMPORTANT NOTE</h2>
          <p>
            Tour plan may vary ±2–3 hours due to traffic/weather. Hotel check-in after 2 PM,
            late checkout charges may apply. Services subject to availability. Peak season
            may affect accommodations and transport. Fuel prices can affect tour cost.
          </p>

          {/* Payments */}
          <h2 className="text-xl font-semibold mt-6">PAYMENTS & CANCELLATION POLICY</h2>
          <p>
            50% advance required for booking. Remaining before departure.
            Cancellation within 72 hrs – 75% charged. 4–7 days – 50% charged.
            More than 7 days – 25% charged. Refund within 7 working days
            (as per SBP rules).
          </p>

          {/* Participants */}
          <h2 className="text-xl font-semibold mt-6">PARTICIPANTS NEED TO BRING</h2>
          <p>Warm Clothes, Raincoat, Sunglasses, Joggers, Sunblock, Personal Medicine.</p>

          {/* Disclaimer */}
          <h2 className="text-xl font-semibold mt-6">DISCLAIMER</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Quotation only, no hotel rooms booked yet.</li>
            <li>Rates & availability may change until final booking.</li>
            <li>Prices may vary with fuel/government policies.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
