// App.js
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
    <>
    <Topbar/>
      <Navbar />
      
      {/* এখান থেকে Courses সেকশনটি সরিয়ে দেওয়া হয়েছে */}
      
     <main className="pt-[100px]">
        <AppRouter
          onEnroll={handleEnroll}
          enrolledIds={enrolledIds}
          courses={coursesData}
        />
      </main>
      

      <Footer />
       <BottomContactBar />
    </>
  );
}

export default App;