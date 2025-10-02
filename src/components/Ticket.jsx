import React from "react";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as faCircleRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleHalfStroke,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const Ticket = ({ issue, issueDataset, setIssueDataset }) => {
  // console.log(issue);

  return (
    <section className="bg-white shadow-lg p-3 rounded-lg">
      <div className="flex justify-between items-top gap-4 mb-3">
        <h3 className="font-medium text-[#001931] text-lg">{issue?.title}</h3>
        <div
          className={`badge 
            ${issue?.status === "New" && "badge-success"}
            ${issue?.status === "Ongoing" && "badge-warning"}
            ${issue?.status === "Resolved" && "badge-ghost text-gray-400"}
          `}
        >
          <FontAwesomeIcon
            icon={
              issue?.status === "New"
                ? faCircleRegular
                : issue?.status === "Ongoing"
                ? faCircleHalfStroke
                : issue?.status === "Resolved"
                ? faCircle
                : null // fallback icon if no status matches
            }
          />
          <span>{issue?.status}</span>
        </div>
      </div>

      <p className="mb-4 text-[#627382]">{issue?.desc}</p>

      <div className="flex justify-between items-center gap-4">
        <div className="flex justify-start items-center gap-2">
          <p className="text-[#627382] text-xs">{issue?.id}</p>
          <div className="text-[#627382] text-xs">
            <div
              className={`text-xs badge badge-soft badge-outline
                ${issue?.priority === "HIGH" && "badge-error"}
                ${issue?.priority === "MEDIUM" && "badge-info"}
                ${issue?.priority === "LOW" && "badge-ghost"}          
                ${issue?.priority === null && "hidden"}          
              `}
            >
              {issue?.priority}
            </div>
          </div>
        </div>

        <div className="flex justify-end items-center gap-2">
          <p className="text-[#627382] text-xs">{issue?.raisedby}</p>
          <p className="text-[#627382] text-xs">
            <FontAwesomeIcon icon="fa-solid fa-calendar" />
            <span>
              {issue?.raisedon} {issue?.raisedat}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
