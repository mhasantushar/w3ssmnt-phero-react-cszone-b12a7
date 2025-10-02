import React from "react";
import Statbox from "./Statbox";
import Ticket from "./Ticket";
import { use } from "react";

const Dashboard = ({ promiseIssuesData }) => {
  // Coverting JSON promise to data list...
  const listofIssues = use(promiseIssuesData);
  // console.log (listofIssues);

  return (
    <div className="bg-[#E9E9E9]">
      <div className="mx-auto px-1 py-4 w-11/12">
        <Statbox />

        {/* ISSUE GRID PANEL */}
        <section>
          <div className="gap-4 grid grid-cols-4">
            <div className="col-span-3">
              <h2 className="mb-4 font-semibold text-[#34485A] text-2xl">
                Customer Tickets
              </h2>

              {/* Polulating Cards... */}
              {listofIssues.length > 0 ? (
                // if there are issues to list...
                <section className="gap-2 grid grid-cols-2">
                  {listofIssues.map((issue) => (
                    <Ticket key={issue.id} issue={issue} />
                  ))}
                </section>
              ) : (
                // if there are no issue to list...
                <div>
                  <div className="inline-grid *:[grid-area:1/1]">
                    <div className="animate-ping status status-error"></div>
                    <div className="status status-error"></div>
                  </div>{" "}
                  No issues found!
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
