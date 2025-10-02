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
            <p className="mb-3 text-[#A1A1AA] link link-hover">About Us</p>
            <p className="mb-3 text-[#A1A1AA] link link-hover">Our Mission</p>
            <p className="mb-3 text-[#A1A1AA] link link-hover">Contact Saled</p>
          </div>

          <div className="col-span-2 pt-2">
            <h3 className="mb-4 font-medium text-white text-xl">Services</h3>
            <p className="mb-3 text-[#A1A1AA] link link-hover">
              Products & Services
            </p>
            <p className="mb-3 text-[#A1A1AA] link link-hover">
              Customer Stories
            </p>
            <p className="mb-3 text-[#A1A1AA] link link-hover">Download Apps</p>
          </div>

          <div className="col-span-2 pt-2">
            <h3 className="mb-4 font-medium text-white text-xl">Information</h3>
            <p className="mb-3 text-[#A1A1AA] link link-hover">
              Privacy Policy
            </p>
            <p className="mb-3 text-[#A1A1AA] link link-hover">
              Terms & Conditions
            </p>
            <p className="mb-3 text-[#A1A1AA] link link-hover">Join Us</p>
          </div>

          <div className="col-span-2 pt-2">
            <h3 className="mb-4 font-medium text-white text-xl">
              Social Links
            </h3>
            <p className="mb-3 text-[#A1A1AA] link link-hover">
              <FontAwesomeIcon icon="fa-brands fa-square-x-twitter" />
              <span>@CS — Ticket System</span>
            </p>
            <p className="mb-3 text-[#A1A1AA] link link-hover">
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
              <span>@CS — Ticket System</span>
            </p>
            <p className="mb-3 text-[#A1A1AA] link link-hover">
              <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
              <span>@CS — Ticket System</span>
            </p>
            <p className="mb-3 text-[#A1A1AA] link link-hover">
              <FontAwesomeIcon icon="fa-solid fa-envelope" />
              <span>support@cst.com</span>
            </p>
          </div>
        </section>

        <p className="mt-18 pt-6 border-gray-800 border-t-1 font-light text-[#FAFAFA] text-center">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
