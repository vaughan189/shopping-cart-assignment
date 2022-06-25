import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
// import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Routes } from "./routes";

function App() {
  return (
    <Router>
      <React.StrictMode>
        <Header />
        <div>
          <Routes />
        </div>
        {/* <Footer /> */}
      </React.StrictMode>
    </Router>
  );
}

export default App;
