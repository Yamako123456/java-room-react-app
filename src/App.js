import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from "./components/HomePage";
import AdminPage from "./components/AdminPage";
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <div class="container">

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>

      <HomePage />

      <br />
      <div data-pym-src="https://www.jdoodle.com/embed/v1/b9bf2201f4485f2a"></div>

      <FooterSection />

    </div>
  );
}

export default App;
