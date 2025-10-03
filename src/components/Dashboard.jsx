import React, { useState } from "react";
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
  const arrivedIssues = issueDataset.filter((issue) => issue.status === "New");
  const ongoingIssues = issueDataset.filter(
    (issue) => issue.status === "Ongoing"
  );
  const resolvedIssues = issueDataset.filter(
    (issue) => issue.status === "Resolved"
  );

  const activeListsTooltip =
    activeIssues.length === 0
      ? "No active ticket; lets check the data source.."
      : `Showing ${arrivedIssues.length} new n ${
          ongoingIssues.length
        } progressive ticket${
          activeIssues.length > 1 ? "s" : ""
        }; click to put one to the next stage..`;

  const ongoingListsTooltip =
    ongoingIssues.length === 0
      ? "None in progress; click a new ticket on left pane.."
      : `Showing ${ongoingIssues.length} ticket${
          ongoingIssues.length > 1 ? "s" : ""
        }; use buttons below to alter status..`;

  const resolvedListsTooltip =
    resolvedIssues.length === 0
      ? "Nothing found; use other pane to mark completions.."
      : `Completed ${resolvedIssues.length} ticket${
          resolvedIssues.length > 1 ? "s" : ""
        }; can set one back to active though..`;

  return (
    <div className="bg-slate-300 px-1 py-20">
      <div className="mx-auto w-11/12">
        {/* HERO SECTION*/}
        <Statbox
          cOngoingIssues={ongoingIssues.length}
          cResolvedIssues={resolvedIssues.length}
        />

        <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* TICKETS GRID SECTION */}
          <section className="col-span-1 lg:col-span-3">
            <div
              className="tooltip-right tooltip tooltip-open tooltip-primary"
              data-tip={activeListsTooltip}
            >
              <h2 className="mb-4 font-semibold text-[#34485A] text-2xl">
                Active Tickets
              </h2>
            </div>

            <div>
              {activeIssues.length > 0 ? (
                // splitting into 2 colums to display issue cards...
                <div className="gap-2 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
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
          </section>

          {/* RIGHT PANE */}
          <aside className="grid-span-1">
            {/* RIGHT PANE - ONGOING TASKS */}
            <div className="flex flex-col gap-4">
              <section className="mt-12 sm:mt-0 -full">
                <div
                  className="tooltip tooltip-primary"
                  data-tip={ongoingListsTooltip}
                >
                  <h2 className="mb-4 font-semibold text-[#34485A] text-2xl">
                    Ongoing Tickets
                  </h2>
                </div>

                <div>
                  {ongoingIssues.length > 0 ? (
                    <div className="flex flex-col gap-2">
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
                      <span>
                        &nbsp;Click a new ticket to mark it's kick off.
                      </span>
                    </div>
                  )}
                </div>
              </section>

              {/* RIGHT PANE - COMPLETED TASKS SECTION */}
              <section className="mt-12 w-full">
                <div
                  className="tooltip tooltip-primary"
                  data-tip={resolvedListsTooltip}
                >
                  <h2 className="mb-4 font-semibold text-[#34485A] text-2xl">
                    Resolved Tickets
                  </h2>
                </div>

                <div>
                  {resolvedIssues.length > 0 ? (
                    <div className="flex flex-col gap-2">
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
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
