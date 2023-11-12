import { HashRouter } from "react-router-dom";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import { useAuthContext } from "./hooks/useAuthContext";

import Navbar from "./components/navbar/Navbar";
import Loading from "./pages/loader/loading.svg";
import Header from "./components/templates/Header";
import Router from "./Router";
import Footer from "./components/templates/Footer";

function App() {
  const authContext = useAuthContext();
  const { loading } = authContext;

  if (loading) {
    return (
      <div className="container row d-block mx-auto">
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
    <div className="App">
      <ReactNotifications />
      <HashRouter>
        <Header />
        <Navbar />
        <Router authContext={authContext} />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
