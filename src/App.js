import React, {Fragment} from 'react';
import './App.css';
import HomePage from "./pages/home-page";
import {Route, Switch} from "react-router-dom";
import ContactUsPage from "./pages/contact-us-page";
import {Container} from "react-bootstrap";

function App() {
  return (
      <Fragment>
          <Container className="app text-center">
              <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route exact path="/contact" component={ContactUsPage} />
              </Switch>
          </Container>
      </Fragment>

  );
}

export default App;
