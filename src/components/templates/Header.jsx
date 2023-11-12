import "./templateStyles.css";

const Header = () => {
  return (
    <div>
      <div className="container my-2">
        <div className="top">
          <div>
            <img
              src="/static/images/app/itaLogo.jpg"
              alt="annauniv-logo"
              className="logo-img rounded-circle p-2"
            />
          </div>
          <div className="ms-3 title">
            <span className="h1 text-center title-text">MUTEX '23</span>
            <span className="h5 text-center subtitle-text">
              An Epic Symposium
            </span>
            <span style={{ textAlign: "center" }}>
              Department of Information Technology
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
