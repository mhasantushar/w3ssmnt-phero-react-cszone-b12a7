import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import "./App.css";

import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

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

        <Suspense fallback={<Loader />}>
          <Dashboard promiseIssuesData={promiseIssuesData} />
        </Suspense>

        <Footer />
      </div>

      <ToastContainer/>
    </>
  );
}

export default App;
