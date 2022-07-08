import React, { Suspense } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { Routes } from "./routes";

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes />
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
