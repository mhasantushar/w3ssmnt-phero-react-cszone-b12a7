import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className="mx-auto px-1 py-4 w-11/12">
        <section className="flex sm:flex-row flex-col justify-between items-center gap-12">
          <h1 className="font-bold text-3xl sm:text-left text-center">CS — Ticket System</h1>
          <ul className="flex flex-wrap justify-center items-center gap-8 font-medium text-lg">
            <li>
              <a className="link link-hover" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="link link-hover" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="link link-hover" href="#">
                Changelog
              </a>
            </li>
            <li>
              <a className="link link-hover" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="link link-hover" href="#">
                Download
              </a>
            </li>
            <li>
              <a className="link link-hover" href="#">
                Contact
              </a>
            </li>
            <button className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] rounded-sm btn-outline font-medium text-white btn btn-primary">
              + New Ticket
            </button>
          </ul>
        </section>
      </div>
    </nav>
  );
};

export default Navbar;
