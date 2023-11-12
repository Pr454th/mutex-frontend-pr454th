import React from "react";
import "./templateStyles.css";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="mt-3 p-2 ps-5">
      <div>
        <p className="h2 title-text">MUTEX '23</p>
        <div className="small text-muted">
          Designed by: <BsGithub />{" "}
          <span>
            <a href="https://github.com/PragadeshBS" target="_blank">
              @PragadeshBS
            </a>
          </span>
          ,{" "}
          <span>
            <a href="https://github.com/Pr454th" target="_blank">
              @Pr454th
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
