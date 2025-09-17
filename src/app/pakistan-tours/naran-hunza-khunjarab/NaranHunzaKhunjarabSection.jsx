"use client";
import Image from "next/image";

export default function NaranHunzaKhunjarabSection() {
  return (
    <main>
      {/* ------------ Banner ------------ */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <Image
          src="/naran-kaghan-packages.jpg"
          alt="Naran Hunza Khunjarab Pass Tour Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ------------ Content ------------ */}
      <section className="bg-gray-50 text-gray-800 px-[30px] md:px-[150px] py-8">
        <h1 className="text-4xl font-bold text-center text-[#a5375c] mb-10">
          Naran – Hunza – Khunjarab Pass Tour – Eminent Travels
        </h1>

        <div className="space-y-8 text-sm md:text-base leading-relaxed">
          {/* Day-wise Details */}
          <h2 className="text-2xl font-semibold">Tour Details</h2>

          <p><strong>Day 1 :</strong><br />
          Meet & Greet at Eminent Travels (Blue Area, Islamabad) at 7:00 am …  
          • Departure for Naran at 7:30 am (282km – 6/7 hrs) …  
          • Stopovers at Mansehra, Balakot, Kiwai waterfall …  
          • Arrive at Naran (7,904 ft elevation, lush green mountains) …  
          • Evening walk in Naran bazaar … Overnight stay at hotel.</p>

          <p><strong>Day 2 : Kaghan Valley – Hunza</strong><br />
          • Breakfast, then journey towards Karimabad Hunza (320km – 7hrs) …  
          • Visit Batakundi, Besal, Lulusar Lake, Babusar Top (13,690ft) …  
          • Stopovers at Chilas, Raikot Bridge, Nanga Parbat View Point, 3M Junction, Rakaposhi View Point …  
          • Arrive Karimabad, check-in hotel.</p>

          <p><strong>Day 3 : Hunza Valley</strong><br />
          • Visit Baltit Fort (700 yrs old, iconic landmark) …  
          • Half-day excursion to Hooper Valley & Glacier …  
          • Visit Ganesh Village & Eagle’s Nest (10,000ft) sunset point …  
          • Overnight stay in Karimabad.</p>

          <p><strong>Day 4 : Upper Hunza & Pak-China Border</strong><br />
          • Breakfast, proceed to Khunjerab Pass (15,397ft) …  
          • Enroute Attabad Lake, Gulmit, Hussaini Bridge, Passu Glacier, Passu Cones, Sost …  
          • Enter Khunjerab National Park, reach Pak-China Border …  
          • Head back to Karimabad for night stay.</p>

          <p><strong>Day 5 : Off-Road Adventure</strong><br />
          • Jeep trek to Naltar Valley (95km – 2.5hrs) …  
          • Explore Naltar Lakes & beauty …  
          • Drive back to Gilgit (Danyor/Grand Continental Hotel) …  
          • Evening visit Gilgit City … Overnight stay.</p>

          <p><strong>Day 6 : Kaghan Valley</strong><br />
          • Breakfast, drive back to Naran via Babusar Top (235km – 5.5hrs) …  
          • Free day for families to explore Naran … Overnight stay at hotel.</p>

          <p><strong>Day 7 : Kaghan Valley – Islamabad</strong><br />
          • Breakfast, jeep excursion to Lake Saif-ul-Malook (3hrs) …  
          • Drive back via Balakot, Mansehra, Hazara Expressway, Motorway …  
          • Arrive Islamabad, drop at designated place. <br />
          <em>End of the Tour</em></p>

          {/* Hotel Info */}
          <h2 className="text-xl font-semibold mt-6">Hotel Names</h2>
          <ul className="list-disc list-inside">
            <li>Rose Valley or similar @ Naran</li>
            <li>Hunza Embassy or similar @ Karimabad</li>
            <li>Danyor Hotel (Gilgit) or Grand Continental Hotel @ Gilgit</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
