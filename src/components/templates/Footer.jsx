import React from "react";
import "./templateStyles.css";
import { BsGithub } from "react-icons/bs";
import axios from "axios";
import { useEffect } from "react";

const Footer = () => {
  const [visitorCount, setVisitorCount] = React.useState(0);
  const [counter, setCounter] = React.useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter < 100) {
        axios.get("/api/logs/page-views").then((res) => {
          setVisitorCount(res.data.pageViews);
          setCounter(counter + 1);
        });
      } else {
        clearInterval(intervalId);
      }
    }, 10000);
    return () => clearInterval(intervalId);
  }, [counter]);

  return (
    <footer className="mt-3 p-2 ps-5">
      <div>
        <div className="h2 title-text">MUTEX '23</div>
        {visitorCount > 0 && (
          <div>
            <div className="small text-muted mb-3">
              Experience Mutex: {parseInt(visitorCount / 8)}+ Visitors Joining
              the Excitement!
            </div>
          </div>
        )}
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
