import React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from "./components/HomePage";
import AdminPage from "./components/AdminPage";

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

    </div>
  );
}

export default App;
