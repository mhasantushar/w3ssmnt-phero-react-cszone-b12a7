import React from "react";
import { toast } from "react-toastify";

const TaskOngo = ({ issue, issueDataset, setIssueDataset }) => {
  // console.log (issue);

  const handleUpdateIssueStatus = (newStatus) => {
    const updatedIssueDataset = issueDataset.map((elem) =>
      elem.id === issue.id ? { ...elem, status: newStatus } : elem
    );
    // console.log (updatedIssueDataset);
    setIssueDataset(updatedIssueDataset);
    toast(
      `Done marking ticket #${issue.id}, "${issue.title}", as "${newStatus}".`
    );
  };

  return (
    <section className="bg-yellow-500 shadow-lg p-3 rounded-lg">
      <h3 className="mb-2 font-medium text-[#001931] text-lg">{issue.title}</h3>
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => handleUpdateIssueStatus("Resolved")}
          className="w-1/2 font-normal text-sm btn btn-soft"
        >
          Close
        </button>
        <button
          onClick={() => handleUpdateIssueStatus("New")}
          className="w-1/2 font-normal text-sm w:full btn btn-soft btn-success"
        >
          Renew
        </button>
      </div>
    </section>
  );
};

export default TaskOngo;