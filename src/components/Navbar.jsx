// src/components/Navbar.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaWhatsapp, FaChevronDown } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisaOpen, setIsVisaOpen] = useState(false); 
  const [isWorldOpen, setIsWorldOpen] = useState(false); 
  const [isPakistanOpen, setIsPakistanOpen] = useState(false); 
  const pathname = usePathname();
  const currentPath = pathname.replace(/\/$/, "");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Flights", path: "/flights" },
    { name: "Umrah", path: "/umrah" },
    { name: "Study", path: "/study" },
    {
      name: "Visa",
      path: "/visa",
      submenu: [
        { name: "Dubai Visa", path: "/visa/dubai" },
        { name: "UK Visa", path: "/visa/uk" },
        { name: "Saudi Arabia Visa", path: "/visa/saudi" },
        { name: "Turkey Visa", path: "/visa/turkey" },
      ],
    },
    {
      name: "World Tours",
      path: "/world-tours",
      submenu: [
        { name: "Paris Tour", path: "/world-tours/paris" },
        { name: "Malaysia Tour", path: "/world-tours/malaysia" },
        { name: "Turkey Tour", path: "/world-tours/turkey" },
        { name: "Thailand Tour Package", path: "/world-tours/thailand" },
      ],
    },
    {
      name: "Pakistan Tours",
      path: "/pakistan-tours",
      submenu: [
        { name: "Naran-Hunza-Khunjrab-Pass", path: "/pakistan-tours/naran-hunza-khunjarab" },
        { name: "Swat Chitral Kalash Valley Tour Packages / 10 Nights, 11 Days", path: "/pakistan-tours/swat-chitral-kalash" },
        { name: "Naran Kaghan Tour", path: "/pakistan-tours/naran-kaghan" },
        { name: "3 Days Naran Shogran Tour - Eminent Travels", path: "/pakistan-tours/naran-shogran" },
      ],
    },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  //  Function to close menu after clicking link
  const handleLinkClick = () => {
    setIsOpen(false);
    setIsVisaOpen(false);
    setIsWorldOpen(false);
    setIsPakistanOpen(false);
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-white">
      {/* Top Logo Bar */}
      <div className="w-full py-4 shadow">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/eminent-logo.svg"
              alt="Eminent Logo"
              className="h-20 w-auto"
            />
          </div>

          {/* Contact Info */}
          <div className="hidden md:flex flex-col items-start text-left">
            <h1 className="text-2xl font-bold" style={{ color: "#a5375c" }}>
              Eminent Travels
            </h1>
            <p className="text-sm text-gray-600 flex items-center gap-1">
              <FaPhoneAlt className="text-green-400 mr-1" /> |{" "}
              <FaWhatsapp className="text-green-500 mx-1" /> | +92 322 8378735
            </p>
            <p className="text-sm text-gray-600">
              ✉️ Eminenttravels2019@gmail.com
            </p>
          </div>

          {/* Mobile Toggle */}
          <div
            className="md:hidden text-black text-2xl cursor-pointer ml-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="w-full bg-black border-t-2 border-white">
        <div
          className={`max-w-7xl mx-auto px-4 py-3 text-white font-bold flex-col md:flex md:flex-row md:justify-center gap-10 ${isOpen ? "flex" : "hidden"
            } md:flex`}
        >
          {navLinks.map(({ name, path, submenu }) => (
            <div key={name} className="relative group">
              {!submenu ? (
                <Link
                  href={path}
                  className="inline-block relative"
                  onClick={handleLinkClick}
                >
                  <span
                    className={`pb-[2px] border-b-2 ${(path === "/" && pathname === "/") ||
                        (path !== "/" && currentPath === path)
                        ? "border-white"
                        : "border-transparent"
                      } hover:border-white transition-all duration-200`}
                  >
                    {name}
                  </span>
                </Link>
              ) : (
                <>
                  {/* Dropdown Button */}
                  <button
                    onClick={() =>
                      name === "Visa"
                        ? setIsVisaOpen(!isVisaOpen)
                        : name === "World Tours"
                          ? setIsWorldOpen(!isWorldOpen)
                          : setIsPakistanOpen(!isPakistanOpen)
                    }
                    className="flex items-center gap-1 pb-[2px] border-b-2 border-transparent hover:border-white transition-all duration-200"
                  >
                    {name}{" "}
                    <FaChevronDown
                      className={`transition-transform duration-200 ${(name === "Visa" && isVisaOpen) ||
                          (name === "World Tours" && isWorldOpen) ||
                          (name === "Pakistan Tours" && isPakistanOpen)
                          ? "rotate-180"
                          : ""
                        }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {((name === "Visa" && isVisaOpen) ||
                    (name === "World Tours" && isWorldOpen) ||
                    (name === "Pakistan Tours" && isPakistanOpen)) && (
                      <div className="absolute left-0 mt-2 w-64 bg-white text-black rounded-lg shadow-lg">
                        <ul className="flex flex-col">
                          {submenu.map((sub) => (
                            <li key={sub.name}>
                              <Link
                                href={sub.path}
                                className="block px-4 py-2 hover:bg-gray-200"
                                onClick={handleLinkClick} // ✅ Close after submenu click
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
