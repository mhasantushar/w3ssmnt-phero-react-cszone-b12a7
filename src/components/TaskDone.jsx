import React from "react";
import { toast } from "react-toastify";

const TaskDone = ({ issue, issueDataset, setIssueDataset }) => {
  // console.log (issue);

  const handleUpdateIssueStatus = (newStatus) => {
    const updatedIssueDataset = issueDataset.map((elem) =>
      elem.id === issue.id ? { ...elem, status: newStatus } : elem
    );
    // console.log (updatedIssueDataset);
    setIssueDataset(updatedIssueDataset);
  };

  return (
    <section className="bg-slate-400 shadow-lg p-3 rounded-lg">
      <h3 className="mb-2 font-medium text-[#001931] text-lg">{issue.title}</h3>
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={() => handleUpdateIssueStatus("Ongoing")}
          className="w-1/2 text-sm btn btn-soft btn-warning"
        >
          Mark Ongoing
        </button>
        <button
          onClick={() => handleUpdateIssueStatus("New")}
          className="w-1/2 text-sm btn btn-soft btn-success"
        >
          Mark New
        </button>
      </div>
    </section>
  );
};

export default TaskDone;
