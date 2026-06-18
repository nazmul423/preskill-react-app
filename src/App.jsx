import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRouter from './routes/Router'; 
import coursesData from './data/courseData';


  function App() {
  const [enrolledIds, setEnrolledIds] = useState([]);

  const handleEnroll = (id) => {
    if (!enrolledIds.includes(id)) {
      setEnrolledIds([...enrolledIds, id]);
    }
  };

  return (
    <>
      <Navbar
        courses={coursesData}
        enrolledIds={enrolledIds}
      />

      <main className="min-h-screen pt-20">
        <AppRouter
          onEnroll={handleEnroll}
          enrolledIds={enrolledIds}
          courses={coursesData}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;