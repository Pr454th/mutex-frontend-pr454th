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
      <h1>Event Statistics</h1>
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
          <div className="row text-center align-items-center justify-content-center me-0 py-4">
            <div className="col-6">
              <div className={`mx-auto mb-4 col-6 col-md-4`}>
                <div className="display-3 fw-bold">17</div>
                <div>
                  <span className="fs-6 ms-1">Events</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className={`mx-auto mb-4 col-6 col-md-4`}>
                <div className="display-3 fw-bold">
                  {events.reduce(
                    (acc, event) => acc + event.participants.length,
                    0
                  )}
                </div>
                <div>
                  <span className="fs-6 ms-1">Teams</span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className={`mx-auto mb-4 col-6 col-md-4`}>
                <div className="display-3 fw-bold">
                  {Math.round(
                    events.reduce(
                      (acc, event) => acc + event.participants.length,
                      0
                    ) / events.length
                  )}
                  +
                </div>
                <div>
                  <span className="fs-6 ms-1">Teams per event</span>
                </div>
              </div>
            </div>
          </div>
          <table className="table table-striped mb-2">
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
                  <td>{event.participants.length} teams</td>
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
