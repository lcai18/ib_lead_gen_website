import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import Clients from "./components/clients";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import "./App.css";

const Home = ({ data }) => (
  <>
    <Header data={data.Header} />
    <Features data={data.Features} />
    <About data={data.About} />
    <Services data={data.Services} />
    <Gallery data={data.Gallery} />
    <Clients data={data.Clients} />
    <Team data={data.Team} />
    <Contact data={data.Contact} />
  </>
);

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <Home data={landingPageData} />} />
        <Route
          path="/about"
          render={() => (
            <>
              <About data={landingPageData.About} />
              <Team data={landingPageData.Team} />
            </>
          )}
        />
        <Route
          path="/services"
          render={() => <Services data={landingPageData.Services} />}
        />
        <Route path="/clients" render={() => <Clients />} />
        <Route
          path="/team"
          render={() => <Team data={landingPageData.Team} />}
        />
        <Route
          path="/contact"
          render={() => <Contact data={landingPageData.Contact} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
