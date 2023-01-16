import React from "react";

function Footer() {
  return (
    <div>
      <footer class="h-fit bg-gray-100 shadow-sm flex items-center justify-center  p-2">
        <span class=" text-gray-700  italic flex ">
          by
          <a
            href="https://www.linkedin.com/in/halil-ibrahim-kamay/"
            className="font-semibold flex ml-1"
          >
            ibrahimkamay
          </a>
          •
          <a
            href="https://github.com/ibrahimkamay"
            className="font-semibold flex  ml-1"
          >
            github
          </a>
        </span>
      </footer>
    </div>
  );
}

export default Footer;
