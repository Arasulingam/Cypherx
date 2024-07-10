import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import "./App.css";
import { Comp1 } from "./components/comp1";
import { Features } from "./components/features";

function App() {
  const features = [
    {
      title: "Easily manage data",
      desc: "Anyone can easily access & manage data with the authentic user permission.",
    },
    {
      title: "Make projections",
      desc: "Understand your financial situation and discover your profit potential.",
    },
    {
      title: "Calculate commission",
      desc: "Devise a strong business plan and enhance team performance.",
    },
    {
      title: "Analyze Data",
      desc: "Devise a strong business plan and enhance team performance.",
    },
  ];

  return (
    <div className="App">
      <NavBar />
      <Comp1 />
      <Features features={features} />
      <Footer />
    </div>
  );
}

export default App;
