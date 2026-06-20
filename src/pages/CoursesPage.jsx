// যদি ফাইলটি home ফোল্ডারে থাকে
import CareerAI from "../components/course/CareerAI"; 
import Courses from "../components/home/Courses";

const CoursesPage = ({ courses, onEnroll, enrolledIds }) => {
  return (
    <div className="min-h-screen pt-20 bg-white dark:bg-[#030712]">
      {/* ১. পেজের একদম উপরে AI সেকশন */}
      <CareerAI />

      {/* ২. তার নিচে আপনার অল কোর্স লিস্ট */}
      <div className="mt-10">
        <Courses
          courses={courses}
          onEnroll={onEnroll}
          enrolledIds={enrolledIds}
          limit={null}
          showSeeAll={false}
        />
      </div>
    </div>
  );
};

export default CoursesPage;