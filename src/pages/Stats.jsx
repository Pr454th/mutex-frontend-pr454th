import { useState, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import loadingAnimation from "./loader/loading.svg";

const Stats = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getStats = () => {
      axios.get("/api/events/").then((res) => {
        const events = res.data;
        events.sort((a, b) => b.participants.length - a.participants.length);
        setLoading(false);
        setEvents(events);
      });
    };
    getStats();
  }, []);

  return (
    <div className="row container mx-auto">
      <h1>Statistics</h1>
      {loading ? (
        <div className="text-center">
          <img
            src={loadingAnimation}
            style={{ backgroundColor: "white" }}
            className="img-fluid"
            alt="..."
          />
        </div>
      ) : (
        <div>
          <h2>Events</h2>
          <p>Total no. of events: {events.length}</p>
          <p>
            Total no. of registrations:{" "}
            {events.reduce((acc, event) => acc + event.participants.length, 0)}{" "}
            teams
          </p>
          <p>
            Average no. of team registrations per event:{" "}
            {Math.round(
              events.reduce(
                (acc, event) => acc + event.participants.length,
                0
              ) / events.length
            )}
          </p>
          <table className="table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Event Name</th>
                <th>Registrations</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{event.eventName}</td>
                  <td>{event.participants.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Stats;
