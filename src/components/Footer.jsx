import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto px-1 pt-20 pb-8 w-11/12">
        <section className="gap-4 grid grid-cols-1 sm:grid-cols-11">
          <div className="col-span-3">
            <h2 className="mb-4 font-bold text-white text-2xl">
              CS — Ticket System
            </h2>
            <p className="xl:pr-12 text-[#A1A1AA]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="col-span-2 pt-2">
            <h3 className="mb-4 font-medium text-white text-xl">Company</h3>
            <p className="mb-3 text-[#A1A1AA]">About Us</p>
            <p className="mb-3 text-[#A1A1AA]">Our Mission</p>
            <p className="mb-3 text-[#A1A1AA]">Contact Saled</p>
          </div>

          <div className="col-span-2 pt-2">
            <h3 className="mb-4 font-medium text-white text-xl">Services</h3>
            <p className="mb-3 text-[#A1A1AA]">Products & Services</p>
            <p className="mb-3 text-[#A1A1AA]">Customer Stories</p>
            <p className="mb-3 text-[#A1A1AA]">Download Apps</p>
          </div>

          <div className="col-span-2 pt-2">
            <h3 className="mb-4 font-medium text-white text-xl">Information</h3>
            <p className="mb-3 text-[#A1A1AA]">Privacy Policy</p>
            <p className="mb-3 text-[#A1A1AA]">Terms & Conditions</p>
            <p className="mb-3 text-[#A1A1AA]">Join Us</p>
          </div>

          <div className="col-span-2 pt-2">
            <h3 className="mb-4 font-medium text-white text-xl">
              Social Links
            </h3>
            <p className="mb-3 text-[#A1A1AA]">
              <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" /> @CS —
              Ticket System
            </p>
            <p className="mb-3 text-[#A1A1AA]">
              <FontAwesomeIcon icon="fa-brands fa-linkedin" /> @CS — Ticket
              System
            </p>
            <p className="mb-3 text-[#A1A1AA]">
              <FontAwesomeIcon icon="fa-brands fa-square-facebook" /> @CS —
              Ticket System
            </p>
            <p className="mb-3 text-[#A1A1AA]">
              <FontAwesomeIcon icon="fa-solid fa-envelope" /> support@cst.com
            </p>
          </div>
        </section>
        
        <p className="mt-18 pt-6 border-gray-800 border-t-1 font-light text-[#FAFAFA] text-center">© 2025 CS — Ticket System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
