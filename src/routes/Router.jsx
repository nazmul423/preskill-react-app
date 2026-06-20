import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CoursesPage from '../pages/CoursesPage';
import About from '../pages/About';
import Teachers from '../pages/Teachers';
import Contact from '../pages/Contact';
import Expertise from '../pages/canal/Expertise';
import OngoingProjects from '../pages/canal/OngoingProjects';
import ProjectAnalysis from '../pages/canal/ProjectAnalysis';
import Implementation from '../pages/canal/Implementation';


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
       {/* --- Canal to Crop Routing --- */}
      <Route path="/canal/expertise" element={<Expertise />} />
      <Route path="/canal/projects" element={<OngoingProjects />} />
      <Route path="/canal/analysis" element={<ProjectAnalysis />} />
      <Route path="/canal/implement" element={<Implementation />} />

      <Route path="/about" element={<About />} />
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
};

export default AppRouter;