import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CourseOfferedPage from './pages/CourseOfferedPage';
import AboutUsPage from './pages/AboutUsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/course-offered" element={<CourseOfferedPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </Router>
  );
};


export default App;
