import React from "react";
import { toast } from "react-toastify";

const TaskOngo = ({ issue, issueDataset, setIssueDataset }) => {
  // console.log (issue);

  const handleUpdateIssueStatus = (issueId, newStatus) => {
    // console.log({ issueId, newStatus });
    const updatedIssueDataset = issueDataset.map((elem) =>
      elem.id === issueId ? { ...elem, status: newStatus } : elem
    );
    // console.log (updatedIssueDataset);
    setIssueDataset(updatedIssueDataset);
  };

  return (
    <section className="bg-yellow-500 shadow-lg p-3 rounded-lg">
      <h3 className="mb-2 font-medium text-[#001931] text-lg">{issue.title}</h3>
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => handleUpdateIssueStatus(issue.id, "Resolved")}
          className="w-1/2 text-sm btn btn-soft"
        >
          Mark Resolved
        </button>
        <button
          onClick={() => handleUpdateIssueStatus(issue.id, "New")}
          className="w-1/2 text-sm btn btn-soft btn-success"
        >
          Mark New
        </button>
      </div>
    </section>
  );
};

export default TaskOngo;
