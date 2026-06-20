import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRouter from './routes/Router';
import coursesData from './data/courseData';
import Topbar from './components/layout/Topbar';
import BottomContactBar from './components/common/BottomContactBar';

function App() {
  const [enrolledIds, setEnrolledIds] = useState([]);

  const handleEnroll = (id) => {
    if (!enrolledIds.includes(id)) {
      setEnrolledIds([...enrolledIds, id]);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#030712] dark:text-slate-200 transition-colors duration-300">
      <Topbar />

      <Navbar />

      <main className="pt-[100px]">
        <AppRouter
          onEnroll={handleEnroll}
          enrolledIds={enrolledIds}
          courses={coursesData}
        />
      </main>

      <Footer />

      <BottomContactBar />
    </div>
  );
}

export default App;