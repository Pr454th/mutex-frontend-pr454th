const RegistrationInstructions = () => {
  return (
    <div className="container row mx-auto">
      <div className="p-3">
        <h1>Mutex'23 Registration Instructions</h1>
        <hr />
        <div className="my-2">
          <strong className="fs-5">
            Note: It is enough if one member of a team registers for team
            events.
          </strong>
        </div>
        <ol>
          <li>
            Login to your account. If you don't have an account, create one by
            clicking on the sign up button.
          </li>
          <li>
            After logging in, you can view the list of technical and
            non-technical events in the home page.
          </li>
          <li>Click on the event card to view the event details.</li>
          <li>Click on the register button to register for the event.</li>
          <li>
            Join the Whatsapp group for the event by clicking on the Whatsapp
            link in the event details page.
          </li>
          <li>
            You can view the list of events you have registered for in the
            participated events page which can be accessed from the email
            dropdown.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default RegistrationInstructions;
