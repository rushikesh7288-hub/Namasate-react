import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Headers from "./components/Headers";
import Footer from "./components/Footer"

const AppLayout = () => {
  return (
    <div className="app">
      <Headers />
      <Body />
      {/* <Footer/> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
