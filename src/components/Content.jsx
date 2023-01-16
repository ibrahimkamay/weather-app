import React from "react";
import Days from "./Days";
import Dropdown from "./Dropdown";
import Footer from "./Footer";

// Burası bizim main kısmımız.

function Content() {
  return (
    <div className="mx-auto max-w-screen-md h-screen justify-between">
      <Dropdown />
      <Days />
      <Footer />
    </div>
  );
}

export default Content;
