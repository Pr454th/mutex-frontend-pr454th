import { format } from "date-fns";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Markdown from "react-markdown";
import "./eventDetail.css";

const EventInformation = (props) => {
  const [link, setLink] = useState(props.detail.link);
  const tableStyles = {
    backgroundColor: "#f8f9fa",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    marginTop: "20px",
    overflowX: "scroll",
    display: "block",
    scrollbarWidth: "none",
  };
  if (link && !link.startsWith("http")) setLink("https://" + link);
  return (
    <div>
      <h1 className="display-6">Event Particulars</h1>
      <table className="table table-border" style={tableStyles}>
        <tbody>
          <tr>
            <td>Date & Time </td>
            <td>
              {format(
                new Date(props.detail.eventStartDate),
                "dd MMM yyyy h:mm a"
              )}{" "}
              -{" "}
              {format(
                new Date(props.detail.eventEndDate),
                "dd MMM yyyy h:mm a"
              )}
            </td>
          </tr>
          <tr>
            <td>Event type</td>
            <td>{props.detail.eventType}</td>
          </tr>
          <tr>
            <td>Venue</td>
            <td>
              <strong>{props.detail.venue}</strong>
            </td>
          </tr>
          <tr>
            <td>Organizers</td>
            <td>{props.detail.contactName}</td>
          </tr>
          <tr>
            <td>Contact Number</td>
            <td>{props.detail.contactPhone}</td>
          </tr>
          {props.detail.contactEmail && (
            <tr>
              <td>Contact Email</td>
              <td>
                <a href={`mailto:${props.detail.contactEmail}`}>
                  <MdEmail className="me-1 fs-4" />
                  {props.detail.contactEmail}
                </a>
              </td>
            </tr>
          )}
          {link && (
            <tr>
              <td>WhatsApp Group</td>
              <td>
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "green" }}
                >
                  <FaWhatsapp className="me-1 fs-4" />
                  {link}
                </a>
              </td>
            </tr>
          )}
          <tr>
            <td>Other Info</td>
            <td>
              <Markdown>{props.detail.otherInfo}</Markdown>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EventInformation;
