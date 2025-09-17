"use client";
import Image from "next/image";

export default function UmrahSection() {
  return (
    <main>
      {/* ------------ Main Banner Section ------------ */}
      <section className="w-full h-[400px] md:h-[500px] relative">
        <Image
          src="/makkahpic2.jpg"
          alt="Home Banner"
          fill
          className="object-cover"
          priority
        />
      </section>

      <section className="bg-gray-100 text-gray-800 px-[30px] md:px-[150px] py-8">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-center text-[#a5375c] mb-10">
          Welcome to Eminent Travels
        </h2>

        {/* Inner Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 border border-gray-200 shadow-xl rounded-lg p-6">

          {/* Left Side - Image (30% width) */}
          <div className="flex justify-center w-full md:w-[30%]">
            <img
              src="/makkahpic.jpg"
              alt="Travel Destination"
              className="w-full h-auto max-w-[350px] md:max-w-[400px] rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right Side - Heading & Description (70% width) */}
          <div className="w-full md:w-[70%]">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#a5375c]">
              Customized Umrah packages From Pakistan
            </h3>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              <h5 className="font-bold text-[#a5375c]">Custom Umrah Package</h5>
              Umrah is a blessed act of worship, and since there is no fixed time for performing it, you can benefit from our specially designed Umrah packages all year round. Eminent Travels offers a wide range of Umrah packages — from premium to budget-friendly — tailored to your needs and comfort.
              <br /><br />
              We also give you the flexibility to customize your own Umrah package — choosing the facilities according to your budget, requirements, and preferences, ensuring your journey is a perfect blend of peace and devotion.
              <br /><br />
              Let us share the details of our Umrah packages with you and show you how you can choose the one that’s perfect for you.
            </p>
          </div>
        </section>
      </section>


      <section className="bg-gray-100 text-gray-800 px-[30px] md:px-[150px] py-8">
        {/* Heading */}
        <h3 className="text-4xl font-bold text-center text-[#a5375c] mb-10">
          Economy Umrah Packages From Pakistan 2025
        </h3>

        {/* Outer Card */}
        <section className="flex flex-col bg-gray-50 border border-gray-200 shadow-xl rounded-lg p-6">
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            Eminent Travels provides the Economy Umrah Packages and it also lies in the category of cheap Umrah package or Sasta Umrah. Perform the religious ritual with all the comforts at a low price. In the Economy Umrah Package accommodation, and transport are covered. You will definitely experience the best services related to traveling, cuisine, and accommodation. Travel with Eminent Travels and book Economy Umrah Package which is very affordable and cheap.
          </p>

          {/* Package Info Table */}
          <section className="bg-gray-50 border border-gray-200 shadow-xl rounded-lg p-6">
            <div className="overflow-x-auto mb-0">
              <table className="table-auto w-full border border-gray-400 text-[10px] sm:text-xs md:text-sm lg:text-base">
                <thead>
                  <tr className="bg-[#a5375c] text-white">
                    <th className="p-1 sm:p-2 border border-gray-400 w-1/4">Package</th>
                    <th className="p-1 sm:p-2 border border-gray-400 w-3/4">
                      Abraj Al Kiswa (  Shuttle Service  ), Makkah 1500M || Diamond Rose Hotel, Madinah 900M
                    </th>
                  </tr>
                </thead>
              </table>
            </div>


            <table className="w-full text-center border border-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-base">
              <thead className="bg-[#a5375c] text-white">
                <tr>
                  <th className="border border-gray-400 p-1 sm:p-2">Duration</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Makkah</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Madinah</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Quint</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Quad</th>
                  {/* <th className="border border-gray-400 p-1 sm:p-2">Triple</th> */}
                  <th className="border border-gray-400 p-1 sm:p-2">Double</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 p-1 sm:p-2">15 Days</td>
                  <td className="border border-gray-400 p-1 sm:p-2">7</td>
                  <td className="border border-gray-400 p-1 sm:p-2">7</td>
                  <td className="border border-gray-400 p-1 sm:p-2">202 700</td>
                  <td className="border border-gray-400 p-1 sm:p-2">205 400</td>
                  {/* <td className="border border-gray-400 p-1 sm:p-2">218 400</td> */}
                  <td className="border border-gray-400 p-1 sm:p-2">234 500</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-400 p-1 sm:p-2">20 Days</td>
                  <td className="border border-gray-400 p-1 sm:p-2">5+5</td>
                  <td className="border border-gray-400 p-1 sm:p-2">9</td>
                  <td className="border border-gray-400 p-1 sm:p-2">210 600</td>
                  <td className="border border-gray-400 p-1 sm:p-2">214 400</td>
                  {/* <td className="border border-gray-400 p-1 sm:p-2">232 200</td> */}
                  <td className="border border-gray-400 p-1 sm:p-2">255 000</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Package Includes */}
          <h5 className="font-bold text-[#a5375c] mt-6 mb-2">Package Includes:</h5>
          <ul className="list-disc list-inside mb-4 text-base sm:text-lg">
            <li>Return Air Ticket (Isb-Jed-Isb)</li>
            <li>Umrah Visa</li>
            <li>Medical Insurance</li>
            <li>Transport By Shared Bus (JED-MAK-MED-MAK-JED APT)</li>
          </ul>

          {/* Package Not Includes */}
          <h5 className="font-bold text-[#a5375c] mb-2">Package Not Includes:</h5>
          <ul className="list-disc list-inside mb-4 text-base sm:text-lg">
            <li>Food</li>
            <li>Ziarat</li>
          </ul>

          {/* Terms & Conditions */}
          <h5 className="font-bold text-[#a5375c] mb-2">Terms & Conditions:</h5>
          <ul className="list-disc list-inside text-base sm:text-lg">
            <li>All the above rates are in PKR. PER PERSON</li>
            <li>Any additional Tax imposed by Pakistan or Saudi Govt MAY be applicable.</li>
            <li>Visa and Booking will start after 100% payment.</li>
            <li>Eminent Travels will not be responsible for any Loss/Visa delay due to late payment.</li>
            <li>Overstay / Escape fine is 25,000 SAR</li>
            <li>The rates quoted above are a price guide only.</li>
            <li>Rates and Availability may change without prior notice at the time of definite booking.</li>
          </ul>
        </section>
      </section>



      <section className="bg-gray-100 text-gray-800 px-[30px] md:px-[150px] py-8">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-center text-[#a5375c] mb-10">
          Eminent Travels – Executive Umrah Packages 2025
        </h2>

        {/* Package Wrapper */}
        <div className="flex flex-col gap-12">

          {/* Package 1 */}
          <section className="bg-gray-50 border border-gray-200 shadow-xl rounded-lg p-6 overflow-x-auto">
            <h3 className="text-2xl font-bold text-[#a5375c] mb-4">Package 1</h3>
            <p className="mb-4 text-sm sm:text-base">
              <strong>Makkah Hotel:</strong> Movenpick Hajar Tower with Breakfast <br />
              <strong>Madinah Hotel:</strong> Dar Al Eiman Al Haram Hotel with Breakfast
            </p>

            <table className="w-full text-center border border-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-base">
              <thead className="bg-[#a5375c] text-white">
                <tr>
                  <th className="border border-gray-400 p-1 sm:p-2">Makkah</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Madinah</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Total Nights</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Double</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Triple</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Quad</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 p-1 sm:p-2">3 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">3 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">6 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">3750 SAR</td>
                  <td className="border border-gray-400 p-1 sm:p-2">3000 SAR</td>
                  <td className="border border-gray-400 p-1 sm:p-2">2650 SAR</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-400 p-1 sm:p-2">5 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">4 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">9 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">5300 SAR</td>
                  <td className="border border-gray-400 p-1 sm:p-2">4300 SAR</td>
                  <td className="border border-gray-400 p-1 sm:p-2">3650 SAR</td>
                </tr>
              </tbody>
            </table>

            <h1 className="text-base sm:text-lg mt-4">Please note</h1>
            <ul className="list-disc pl-6 text-gray-800 text-xs sm:text-sm md:text-base">
              <li>Umrah visa included.</li>
              <li>The above price is per person in Saudi Riyal (SAR).</li>
              <li>Air ticket is not included in the package.</li>
              <li>Airport to hotel one-way pick-up is included.</li>
            </ul>
          </section>


          {/* Package 2 */}
          <section className="bg-gray-50 border border-gray-200 shadow-xl rounded-lg p-6 overflow-x-auto">
            <h3 className="text-2xl font-bold text-[#a5375c] mb-4">Package 2</h3>
            <p className="mb-4 text-sm sm:text-base">
              <strong>Makkah:</strong> Al Massa Grand / Shohada Hotel / Sheraton Makkah <br />
              <strong>Madinah:</strong> Saja Al Medinah / Rawda Al Aqeeq
            </p>

            <table className="w-full text-center border border-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-base">
              <thead className="bg-[#a5375c] text-white">
                <tr>
                  <th className="border border-gray-400 p-1 sm:p-2">Makkah</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Madinah</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Total Nights</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Double</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Triple</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Quad</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 p-1 sm:p-2">3 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">3 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">6 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">2600 SAR</td>
                  <td className="border border-gray-400 p-1 sm:p-2">2100 SAR</td>
                  <td className="border border-gray-400 p-1 sm:p-2">1950 SAR</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-400 p-1 sm:p-2">5 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">4 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">9 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">3475 SAR</td>
                  <td className="border border-gray-400 p-1 sm:p-2">2800 SAR</td>
                  <td className="border border-gray-400 p-1 sm:p-2">2450 SAR</td>
                </tr>
              </tbody>
            </table>

            <h1 className="text-base sm:text-lg mt-4">Please note</h1>
            <ul className="list-disc pl-6 text-gray-800 text-xs sm:text-sm md:text-base">
              <li>Umrah visa included.</li>
              <li>The above price is per person in Saudi Riyal (SAR).</li>
              <li>Air ticket is not included in the package.</li>
              <li>Airport to hotel one-way pick-up is included.</li>
            </ul>
          </section>


          {/* Package 3 */}
          <section className="bg-gray-50 border border-gray-200 shadow-xl rounded-lg p-6 overflow-x-auto">
            <h3 className="text-2xl font-bold text-[#a5375c] mb-4">Package 3</h3>
            <p className="mb-4 text-sm sm:text-base">
              <strong>Makkah:</strong> Makkah Towers RO / Makarem Ajyad BB <br />
              <strong>Madinah:</strong> Saja Al Madinah RO / Al Saha RO
            </p>

            <table className="w-full text-center border border-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-base">
              <thead className="bg-[#a5375c] text-white">
                <tr>
                  <th className="border border-gray-400 p-1 sm:p-2">Makkah</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Madinah</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Total Nights</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Double</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Triple</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Quad</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 p-1 sm:p-2">3 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">3 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">6 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">SAR</td>
                  <td className="border border-gray-400 p-1 sm:p-2">SAR</td>
                  <td className="border border-gray-400 p-1 sm:p-2">SAR</td>
                </tr>
                <tr className="bg-gray-100">
                  <td className="border border-gray-400 p-1 sm:p-2">4 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">4 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">8 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">SAR</td>
                  <td className="border border-gray-400 p-1 sm:p-2">SAR</td>
                  <td className="border border-gray-400 p-1 sm:p-2">SAR</td>
                </tr>
              </tbody>
            </table>

            <h1 className="text-base sm:text-lg mt-4">Please note</h1>
            <ul className="list-disc pl-6 text-gray-800 text-xs sm:text-sm md:text-base">
              <li>Umrah visa included.</li>
              <li>The above price is per person in Saudi Riyal (SAR).</li>
              <li>Air ticket is not included in the package.</li>
              <li>Airport to hotel one-way pick-up is included.</li>
            </ul>
          </section>


          {/* Package 4 */}
          <section className="bg-gray-50 border border-gray-200 shadow-xl rounded-lg p-6 overflow-x-auto">
            <h3 className="text-2xl font-bold text-[#a5375c] mb-4">Package 4</h3>
            <p className="mb-4 text-sm sm:text-base">
              <strong>Makkah:</strong> Double Tree By Hilton BB / Marriott Jabal E Umar BB <br />
              <strong>Madinah:</strong> Saja Al Madinah RO / Al Saha RO
            </p>

            <table className="w-full text-center border border-gray-300 text-[10px] sm:text-xs md:text-sm lg:text-base">
              <thead className="bg-[#a5375c] text-white">
                <tr>
                  <th className="border border-gray-400 p-1 sm:p-2">Makkah</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Madinah</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Total Nights</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Double</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Triple</th>
                  <th className="border border-gray-400 p-1 sm:p-2">Quad</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50">
                  <td className="border border-gray-400 p-1 sm:p-2">3 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">3 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">6 Nights</td>
                  <td className="border border-gray-400 p-1 sm:p-2">SAR</td>
                  <td className="border border-gray-400 p-1 sm:p-2">SAR</td>
                  <td className="border border-gray-400 p-1 sm:p-2">SAR</td>
                </tr>
              </tbody>
            </table>

            <h1 className="text-base sm:text-lg mt-4">Please note</h1>
            <ul className="list-disc pl-6 text-gray-800 text-xs sm:text-sm md:text-base">
              <li>Umrah visa included.</li>
              <li>The above price is per person in Saudi Riyal (SAR).</li>
              <li>Air ticket is not included in the package.</li>
              <li>Airport to hotel one-way pick-up is included.</li>
            </ul>
          </section>


        </div>
      </section>

<section className="bg-gray-100 text-gray-800 px-[20px] md:px-[150px] py-8">
  {/* Main Heading */}
  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#a5375c] mb-10">
    Eminent Umrah Package 2025
  </h2>

  <div className="flex flex-col gap-8">

    {/* Package Intro */}
    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6">
      <h3 className="text-xl md:text-2xl font-bold text-[#a5375c] mb-2">
        Eminent Umrah Package
      </h3>
      <p className="text-sm md:text-base text-gray-700">
        In Eminent Umrah Package you can stay at 3 star hotels of Makkah and Madinah. 
        Hotels are close to Khana Kaba and Masjid Nabawi so you can easily perform your religious journey 
        without walking too many kilometers.
      </p>
    </div>

    {/* Hotels in Makkah */}
    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold text-[#a5375c] mb-2">Hotels in Makkah</h3>
      <p className="text-sm md:text-base text-gray-700">
        In Makkah, you can stay at Nasamaat Ajyad Hotel, Reef Global Hotel, Al Bayraq Hotel, 
        White Palace Hotel, Albostan Almasi Hotel and Riyadh Al Diyafah Hotel.
      </p>
    </div>

    {/* Hotels in Madinah */}
    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold text-[#a5375c] mb-2">Hotels in Madinah</h3>
      <p className="text-sm md:text-base text-gray-700">
        In Madinah, you can stay at Dar Al Shohadaa Hotel, Platinum The First, Rotana Al Mesk Hotel, 
        Rose Diamond Hotel, and Anwar Al Habib Hotel. These hotels are close to Masjid Nabawi. 
        You can also book according to your choice or budget.
      </p>
    </div>

    {/* Umrah Visa */}
    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold text-[#a5375c] mb-2">Umrah Visa</h3>
      <p className="text-sm md:text-base text-gray-700">
        Eminent Travels provides the Umrah Visa facility. You can book the package online and get your 
        Umrah Visa at your doorstep after completing the requirements.
      </p>
    </div>

    {/* Umrah Transport */}
    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold text-[#a5375c] mb-2">Umrah Transport Facility</h3>
      <p className="text-sm md:text-base text-gray-700">
        Eminent Travels offers the best transport services with air-conditioned cars included in the package. 
        VIP cars are also available at your hotel doorstep.
      </p>
    </div>

    {/* Umrah Ziyarat */}
    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6">
      <h3 className="text-xl font-bold text-[#a5375c] mb-2">Umrah Ziyarat Facility</h3>
      <p className="text-sm md:text-base text-gray-700">
        Explore the holy places of Makkah and Madinah with Eminent Travels. You can also suggest additional ziyarat places.
      </p>
    </div>

  </div>
</section>








    </main>
  );
}

