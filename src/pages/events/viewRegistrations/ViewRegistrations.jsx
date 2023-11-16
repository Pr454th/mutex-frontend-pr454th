import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EventInformation from "../eventDetails/eventInformation";
import { useAuthContext } from "../../../hooks/useAuthContext";
import Loading from "../../loader/loading.svg";

const ViewRegistrations = () => {
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [participants, setParticipants] = useState([]);
  const { token } = useAuthContext();

  useEffect(() => {
    axios.get("/api/events/" + id).then((res) => {
      const temp = res.data;
      temp.eventStartDate = temp.eventStartDate.substr(0, 16);
      temp.eventEndDate = temp.eventEndDate.substr(0, 16);
      setEvent(temp);
      axios
        .get("/api/events/participants/" + id, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setParticipants(res.data);
          setLoading(false);
        });
    });
  }, [id, token]);

  const backGroundStyles = {
    backgroundColor: "#f8f9fa",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  };

  if (loading) {
    return (
      <div className="container d-block mx-auto">
        <h1 className="display-5 mt-5">Events</h1>
        <div className="row mt-5 mb-5">
          <div className="col d-flex justify-content-center">
            <img src={Loading} alt="..." />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={backGroundStyles}>
      <h1 className="display-3">Participants</h1>
      <div className="text-muted">
        <a href="#" className="text-reset">
          <h3>{event.eventName}</h3>
        </a>
      </div>
      <EventInformation detail={event} />
      {participants.length === 0 && (
        <div className="text-center my-3 pb-2">
          <h6 className="display-6">No participants yet</h6>
        </div>
      )}
      {participants.length > 0 && (
        <div className="p-2">
          <div>
            <h2>Participants</h2>
            <div>
              <div>
                Total participants: <strong>{participants.length}</strong>
              </div>
              <div>
                First years:{" "}
                <strong>
                  {
                    participants.filter(
                      (p) => 2024 - parseInt(p.regNo.substring(0, 4)) === 1
                    ).length
                  }
                </strong>
              </div>
              <div>
                Second years:{" "}
                <strong>
                  {
                    participants.filter(
                      (p) => 2024 - parseInt(p.regNo.substring(0, 4)) === 2
                    ).length
                  }
                </strong>
              </div>
              <div>
                Third years:{" "}
                <strong>
                  {
                    participants.filter(
                      (p) => 2024 - parseInt(p.regNo.substring(0, 4)) === 3
                    ).length
                  }
                </strong>
              </div>
              <div>
                Final years:{" "}
                <strong>
                  {
                    participants.filter(
                      (p) => 2024 - parseInt(p.regNo.substring(0, 4)) === 4
                    ).length
                  }
                </strong>
              </div>
            </div>
          </div>
          <table
            className="table table-striped"
            style={{
              display: "block",
              overflowX: "auto",
            }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Reg. no.</th>
                <th scope="col">Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Year of Study</th>
                <th scope="col">Department</th>
              </tr>
            </thead>
            <tbody>
              {participants &&
                participants.map((p, idx) => {
                  return (
                    <tr key={p._id}>
                      <td>{idx + 1}</td>
                      <td>{p.regNo}</td>
                      <td>{p.userName}</td>
                      <td>{p.mobile}</td>
                      <td>{2024 - parseInt(p.regNo.substring(0, 4))}</td>
                      <td>{p.dept}</td>
                      <td></td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default ViewRegistrations;
