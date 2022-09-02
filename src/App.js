import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from "./components/Signup";
//importing Authprovider form inside Authcontext page
import {AuthProvider} from "./contexts/AuthContext"

function App() {
  return (
    <AuthProvider>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Signup />
      </div>
    </Container>
    </AuthProvider>
  );
}

export default App;
