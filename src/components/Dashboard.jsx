import React from "react";
import Statbox from "./Statbox";
import Ticket from "./Ticket";


function Dashboard() {
  return (
    <div className="bg-[#E9E9E9]">
      <div className="mx-auto px-1 py-4 w-11/12">
      <Statbox/>

      <section>
        <h2 className="mb-4 font-semibold text-[#34485A] text-2xl">Customer Tickets</h2>

        <div className="gap-4 grid grid-cols-3">
          <div>
            <Ticket/>
          </div>
        </div>
      </section>


      </div>
    </div>
  );
}

export default Dashboard;