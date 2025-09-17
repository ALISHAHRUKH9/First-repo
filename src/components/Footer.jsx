// src/components/ContactSection.jsx
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";


const ContactSection = () => {
    return (
        <div className="bg-black text-white w-full py-10 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
                {/* Left Container: Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <div className="flex items-center">
                        <img
                            src="/eminent-logo.svg"
                            alt="Eminent Logo"
                            className="h-40 w-auto"
                        />
                    </div>
                </div>

                {/* Right Container: Contact Info */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4" style={{ color: '#a5375c' }}>
                        Contact Us
                    </h2>
                    <p className="mb-2 flex items-center gap-2">
                        <FaPhoneAlt className="text-green-400" />
                        Phone: +92 322 8378735
                    </p>
                    <p className="mb-2 flex items-center gap-2">
                        <FaWhatsapp className="text-green-500" />
                        WhatsApp: +92 322 8378735
                    </p>
                    <p className="mb-2">✉️ Email: eminenttravels2019@gmail.com</p>
                    <p className="mb-2 flex items-center gap-2">
                        <FaMapMarkerAlt className="text-red-500" />
                        Address: 15 F2 Wapda Town Phase 1 Lahore Near Abu Baker Round About
                    </p>
                    <p className="mb-2">🕒 Hours: Mon–Sat, 11AM – 10PM</p>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="border-t border-gray-700 mt-10 pt-4">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

                    {/* Left Side: Text */}
                    <div className="text-center md:text-left">
                        © 2020 Eminent Travelsℯm. All Rights Reserved.
                    </div>

                    {/* Right Side: Social Icons */}
                    <div className="flex gap-4 text-white text-lg">
                        <a href="#" aria-label="Instagram">
                            <FaInstagram className="hover:text-pink-500 transition duration-300" />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <FaFacebookF className="hover:text-blue-500 transition duration-300" />
                        </a>
                        <a href="#" aria-label="Pinterest">
                            <FaPinterest className="hover:text-red-600 transition duration-300" />
                        </a>
                        <a href="#" aria-label="Twitter">
                            <FaTwitter className="hover:text-sky-400 transition duration-300" />
                        </a>
                        <a href="#" aria-label="YouTube">
                            <FaYoutube className="hover:text-red-500 transition duration-300" />
                        </a>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ContactSection;
