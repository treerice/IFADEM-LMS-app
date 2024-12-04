import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/:courseId" element={<CourseDetail />} />
          <Route path="community" element={<div className="text-white">Community Content Coming Soon</div>} />
          <Route path="calendar" element={<div className="text-white">Calendar Content Coming Soon</div>} />
          <Route path="messages" element={<div className="text-white">Messages Content Coming Soon</div>} />
          <Route path="settings" element={<div className="text-white">Settings Content Coming Soon</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;