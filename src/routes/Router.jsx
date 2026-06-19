import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CoursesPage from '../pages/CoursesPage';
import About from '../pages/About';
import Teachers from '../pages/Teachers';
import Contact from '../pages/Contact';

const AppRouter = ({ onEnroll, enrolledIds, courses }) => {
  return (
    <Routes>

      {/* HOME ROUTE */}
      <Route
        path="/"
        element={
          <Home
            courses={courses}
            onEnroll={onEnroll}
            enrolledIds={enrolledIds}
          />
        }
      />

      {/* COURSES PAGE */}
      <Route
        path="/courses"
        element={
          <CoursesPage
            courses={courses}
            onEnroll={onEnroll}
            enrolledIds={enrolledIds}
          />
        }
      />

      <Route path="/about" element={<About />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
};

export default AppRouter;