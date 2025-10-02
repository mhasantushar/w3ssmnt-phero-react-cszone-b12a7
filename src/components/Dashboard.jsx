import React, { useState } from "react";
import { toast } from "react-toastify";
import { use } from "react";
import Statbox from "./Statbox";
import Ticket from "./Ticket";
import TaskOngo from "./TaskOngo";
import TaskDone from "./TaskDone";

const Dashboard = ({ promiseIssuesData }) => {
  // const listofIssues = use(promiseIssuesData);
  const [issueDataset, setIssueDataset] = useState(use(promiseIssuesData));
  // console.log (issueDataset);

  const activeIssues = issueDataset.filter(
    (issue) => issue.status === "New" || issue.status === "Ongoing"
  );
  // const arrivedIssues = issueDataset.filter((issue) => issue.status === "New");
  const ongoingIssues = issueDataset.filter(
    (issue) => issue.status === "Ongoing"
  );
  const resolvedIssues = issueDataset.filter(
    (issue) => issue.status === "Resolved"
  );

  return (
    <div className="bg-slate-300 px-1 py-20">
      <div className="mx-auto w-11/12">
        {/* HERO SECTION*/}
        <Statbox
          cOngoingIssues={ongoingIssues.length}
          cResolvedIssues={resolvedIssues.length}
        />

        <div className="gap-4 grid grid-cols-4">
          {/* TICKETS GRID SECTION */}
          <article className="col-span-3">
            <h2 className="mb-4 font-semibold text-[#34485A] text-2xl">
              Active Tickets
            </h2>

            <div>
              {activeIssues.length > 0 ? (
                // splitting into 2 colums to display issue cards...
                <div className="gap-2 grid grid-cols-2">
                  {activeIssues.map((issue) => (
                    <Ticket
                      key={issue.id}
                      issue={issue}
                      issueDataset={issueDataset}
                      setIssueDataset={setIssueDataset}
                    />
                  ))}
                </div>
              ) : (
                // prints a message if nothing found to list...
                <div>
                  <div className="animate-bounce status status-info"></div>
                  <span>&nbsp;No active ticket found.</span>
                </div>
              )}
            </div>
          </article>

          <aside>
            {/* ONGOING TASKS SECTION (RIGHT PANE)*/}
            <section className="col-span-1">
              <h2 className="mb-4 font-semibold text-[#34485A] text-2xl">
                Ongoing Tickets
              </h2>

              <div>
                {ongoingIssues.length > 0 ? (
                  <div className="gap-2 grid grid-cols-1">
                    {ongoingIssues.map((issue) => (
                      <TaskOngo
                        key={issue.id}
                        issue={issue}
                        issueDataset={issueDataset}
                        setIssueDataset={setIssueDataset}
                      />
                    ))}
                  </div>
                ) : (
                  // prints a message if nothing found to list...
                  <div>
                    <div className="animate-bounce status status-info"></div>
                    <span>&nbsp;Click an active ticket to mark it's kick off.</span>
                  </div>
                )}
              </div>
            </section>

            {/* COMPLETED TASKS SECTION (RIGHT BELOW)*/}
            <section className="col-span-1 mt-12">
              <h2 className="mb-4 font-semibold text-[#34485A] text-2xl">
                Resolved Tickets
              </h2>

              <div>
                {ongoingIssues.length > 0 ? (
                  <div className="gap-2 grid grid-cols-1">
                    {resolvedIssues.map((issue) => (
                      <TaskDone
                        key={issue.id}
                        issue={issue}
                        issueDataset={issueDataset}
                        setIssueDataset={setIssueDataset}
                      />
                    ))}
                  </div>
                ) : (
                  // prints a message if nothing found to list...
                  <div>
                    <div className="animate-bounce status status-info"></div>
                    <span>&nbsp;No resolved ticket yet.</span>
                  </div>
                )}
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
