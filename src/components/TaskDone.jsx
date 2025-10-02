import React from "react";
import { toast } from "react-toastify";

const TaskDone = ({ issue, issueDataset, setIssueDataset }) => {
  // console.log (issue);

  return (
    <section className="bg-neutral-300 shadow-lg p-3 rounded-lg">
      <h3 className="mb-2 font-medium text-[#001931] text-lg">{issue.title}</h3>
      <div className="flex justify-center items-center gap-2">
        <button className="w-1/2 text-sm btn btn-soft btn-warning">
          Mark Ongoing
        </button>
        <button className="w-1/2 text-sm btn btn-soft btn-success">
          Mark New
        </button>
      </div>
    </section>
  );
};

export default TaskDone;
