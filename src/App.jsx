import { Suspense } from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const fetchIssuesJSON = async () => {
  const resp = await fetch("/ticket-data.json");
  return resp.json();
};

function App() {
  const promiseIssuesData = fetchIssuesJSON();
  // console.log (promiseIssuesData);

  return (
    <>
      <div style={{ fontFamily: "Inter, sans-serif" }}>
        <Navbar />

        <Suspense
          fallback={
            <div className="flex justify-center items-center my-20">
              <progress className="w-56 progress progress-primary"></progress>
            </div>
          }
        >
          <Dashboard promiseIssuesData={promiseIssuesData} />
        </Suspense>

        <Footer />
      </div>
    </>
  );
}

export default App;
