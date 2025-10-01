import React from "react";
import bgimgStripeL from "../assets/stripes-l.png";
import bgimgStripeR from "../assets/stripes-r.png";

const Statbox = () => {
  return (
    <div className="flex sm:flex-row flex-col gap-4 my-20">
      <section className="relative bg-gradient-to-r from-[#632ee3] to-[#9f62f2] p-10 rounded-xl w-full">
        <div className="flex flex-col justify-center items-center gap-6 h-42">
          <h3 className="text-white text-4xl text-center">In-Progress</h3>
          <h2 className="font-bold text-white text-6xl text-center">0</h2>
        </div>
        <img
          className="bottom-0 left-0 absolute"
          src={bgimgStripeL}
          alt="Bg Image Left"
        />
        <img
          className="right-0 bottom-0 absolute"
          src={bgimgStripeR}
          alt="Bg Image Left"
        />
      </section>

      <section className="relative bg-gradient-to-r from-[#54cf67] to-[#00827a] p-10 rounded-xl w-full">
        <div className="flex flex-col justify-center items-center gap-6 h-42">
          <h3 className="text-white text-4xl text-center">Resolved</h3>
          <h2 className="font-bold text-white text-6xl text-center">0</h2>
        </div>
        <img
          className="bottom-0 left-0 absolute"
          src={bgimgStripeL}
          alt="Bg Image Left"
        />
        <img
          className="right-0 bottom-0 absolute"
          src={bgimgStripeR}
          alt="Bg Image Left"
        />
      </section>
    </div>
  );
};

export default Statbox;
