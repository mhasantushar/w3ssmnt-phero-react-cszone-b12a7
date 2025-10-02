import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ticket = () => {
  return (
    <section className="bg-white shadow-lg p-3 rounded-lg">
      <div className="flex justify-between items-center gap-4 mb-3">
        <h3 className="font-medium text-[#001931] text-lg">
          Login Issues - Can't Access Account
        </h3>
        <div className="badge badge-soft badge-success">
          <FontAwesomeIcon icon="fa-solid fa-circle" />
          Open
        </div>
      </div>

      <p className="mb-4 text-[#627382]">
        Customer is unable to log in to their account. They've tried resetting
        their password multiple times but still...
      </p>

      <div  className="flex justify-between items-center gap-4">
        <div className="flex justify-start items-center gap-4">
          <p className="text-[#627382] text-sm">#1111</p>
          <div className="badge-outline text-sm badge badge-secondary">
            HIGH PRIORITY
          </div>
        </div>

        <div className="flex justify-end items-center gap-4">
          <p className="text-[#627382] text-sm">John Smith</p>
          <p className="text-[#627382] text-sm">
            <FontAwesomeIcon icon="fa-regular fa-calendar" /> 1/15/2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
