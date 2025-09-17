"use client";
import Image from "next/image";

export default function SwatChitralKalashSection() {
  return (
    <main>
      {/* ------------ Banner ------------ */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <Image
          src="/swatchitaral.jpg"
          alt="Swat Chitral Kalash Valley Tour Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ------------ Content ------------ */}
      <section className="bg-gray-50 text-gray-800 px-[30px] md:px-[150px] py-8">
        <h1 className="text-4xl font-bold text-center text-[#a5375c] mb-10">
          Swat – Chitral – Kalash Valley Tour Packages 2025 (10 Nights / 11 Days) – Eminent Travels
        </h1>

        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          {/* Day-wise Details */}
          <h2 className="text-2xl font-semibold">Tour Details – ITINERARY</h2>

          <p><strong>Day 01 :</strong><br />
          Meet & Greet at Islamabad Airport … Transfer to Hotel in Islamabad … Free time for own activities … Night Stay at Hotel, Islamabad.</p>

          <p><strong>Day 02 :</strong><br />
          Early Breakfast … Depart for Swat Valley through Motorway M-1/Swat Express Way (237km-4.5hrs) … Drive through Barikot & Mingora City … Arrive Saidu Sharif & transfer to hotel … Visit White Palace Marghazar … Night stay at Hotel.</p>

          <p><strong>Day 03 :</strong><br />
          Breakfast … Depart for Malamjabba (48km-2hrs) … Enjoy Zip Line & Chairlift (full day excursion) … Night stay at Malamjabba.</p>

          <p><strong>Day 04 :</strong><br />
          Breakfast … Depart for Kalam (123km-4.15hrs) … Visit Madiyan, Chalyana Trout Farm, Bahrain … Arrive Kalam & transfer to Hotel … Night stay.</p>

          <p><strong>Day 05 :</strong><br />
          Breakfast … 4WD jeep excursion to Upper Swat … Visit Mahodand Lake, Mataltan Waterfall, Ushu Dense Forest … Back to Kalam for Night stay.</p>

          <p><strong>Day 06 :</strong><br />
          Breakfast … Explore nearby Kalam Valley … Full-day excursion to Miandam (65km-2.15hrs) … Drive back to Saidu Sharif (47km-1.25hrs) … Night stay at Saidu Sharif.</p>

          <p><strong>Day 07 :</strong><br />
          Breakfast … Depart for Chitral (239km-6.5hrs) … Drive via Chakdara, Temargarah, Lower Dir, Upper Dir, Lowari tunnels … Arrive Chitral & transfer to Hotel … Night stay.</p>

          <p><strong>Day 08 :</strong><br />
          Breakfast … Depart for Garam Chashma (87km-3hrs) … Hot water bath, sightseeing … Back to Chitral, visit Polo Ground, Shahi Mosque, Chitral Fort, Old Bazaar … Drive to Ayun Valley (Gateway to Kalash, 50min-43km) … Night stay at Ayun.</p>

          <p><strong>Day 09 :</strong><br />
          Breakfast … Full day excursion to Kalash Valley (1.5hrs-43km) … Visit Bamburet Village, Kalasha Graveyard, Museum, Traditions … Visit Rambur Village … Back to Ayun for Night stay.</p>

          <p><strong>Day 10 :</strong><br />
          Breakfast … Drive back to Islamabad (415km-10hrs) … Drive via Lowari tunnels, Upper Dir, Chakdara, Swat Express Way … Night stay in Islamabad Hotel.</p>

          <p><strong>Day 11 :</strong><br />
          Breakfast … Islamabad City Tour – Visit Faisal Mosque, Lok Virsa Museum, Pakistan Monument … Drop at Islamabad Airport. <br /><em>End of Tour</em></p>

          {/* Includes */}
          <h2 className="text-xl font-semibold mt-6">INCLUDES</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Accommodation (Single/Double/Twin Rooms with Breakfast)</li>
            <li>Luxury Air Transport (with Fuel, Toll Taxes, Parking)</li>
            <li>Dedicated Driver</li>
            <li>4WD Jeeps for Upper Swat, Kalash Valley & Garam Chashma</li>
            <li>Kalasha Museum, Lok Virsa Museum, Pakistan Monument Entry Tickets</li>
            <li>English-speaking Tour Guide</li>
            <li>First Aid Medical Kit</li>
          </ul>

          {/* Not Includes */}
          <h2 className="text-xl font-semibold mt-6">NOT INCLUDES</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Porters for luggage</li>
            <li>Extra expenses due to landslides, political or natural issues</li>
            <li>Lunch, Dinner, Mineral Water, Laundry, Telephone etc.</li>
          </ul>

          {/* Important Note */}
          <h2 className="text-xl font-semibold mt-6">IMPORTANT NOTE</h2>
          <p>
            In case of any change in tour plan, cost will be adjusted accordingly.  
            Travel in hilly areas may vary ±3 hours.  
            Hotel check-in 14:00 hrs, late checkout charges apply.  
            Accommodations & vehicles subject to availability.  
            Peak season may cause changes in hotels/vehicles.  
            Fuel price variation may affect cost.  
            Unutilized services are non-refundable.
          </p>

          {/* Payments */}
          <h2 className="text-xl font-semibold mt-6">PAYMENTS & CANCELLATION POLICY</h2>
          <p>
            50% advance for booking … Remaining before departure.  
            Cancellation within 72hrs – 75% charged.  
            4–7 days before departure – 50% charged.  
            7+ days before departure – 25% charged.  
            Refund within 7 working days by Eminent Travels (as per SBP rules).
          </p>

          {/* Participants */}
          <h2 className="text-xl font-semibold mt-6">PARTICIPANTS NEED TO BRING</h2>
          <p>
            Day Bag, Rain Coat, Sunglasses, Warm Clothes, Joggers, Sunblock.
          </p>

          {/* Disclaimer */}
          <h2 className="text-xl font-semibold mt-6">DISCLAIMER</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Quotation only, no room booked yet.</li>
            <li>Rates & availability subject to change until final booking.</li>
            <li>Prices may change due to fuel/government policies.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
