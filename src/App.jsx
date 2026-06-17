import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRouter from './routes/Router'; // Router ফাইলটি ইমপোর্ট করুন
import coursesData from './data/courseData';

function App() {
  const [enrolledIds, setEnrolledIds] = useState([]);

  const handleEnroll = (id) => {
    if (!enrolledIds.includes(id)) {
      setEnrolledIds([...enrolledIds, id]);
    }
  };

  return (
    <Router>
      <Navbar enrolledCount={enrolledIds.length} />
      <main className="min-h-screen pt-20">
        {/* Router component-এ ডাটা পাস করুন */}
        <AppRouter 
          onEnroll={handleEnroll} 
          enrolledIds={enrolledIds} 
          courses={coursesData} 
        />
      </main>
      <Footer />
    </Router>
  );
}

export default App;