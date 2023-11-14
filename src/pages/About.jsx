const About = () => {
  const organizers = [
    { name: "Madeshwaran K", designation: "ITA Chairman", phone: "7868008688" },
    {
      name: "Shriya S",
      designation: "Events Head",
      phone: "93617789362",
    },
  ];

  return (
    <div className="container row mx-auto">
      <div className="p-3">
        <h1>Mutex'23</h1>
        <p className="lead">
          The Madras Institute of Technology's Department of Information
          Technology's Information Technology Association (ITA) hosts MUTEX, an
          intra-college technological festival. MUTEX's primary goal is to teach
          the juniors the numerous technical and analytical abilities necessary
          to thrive in the current IT sector. In light of this, technical
          activities and events will be held as well as guest lectures on
          personality development and leadership. It is accessible to students
          from all disciplines and grade levels. This event includes a wide
          variety of non-technical events like connections and Rubik's cube
          solving as well as technical events like various forms of coding and
          workshops.
        </p>
        <div>
          <h3>People</h3>
          <ul>
            {organizers.map((organizer, index) => (
              <li key={index}>
                <span>
                  <strong>{organizer.name}</strong>, {organizer.designation}{" "}
                  {organizer.phone ? `(Ph: ${organizer.phone})` : ""}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
