import Courses from "../components/home/Courses";

const CoursesPage = ({ courses, onEnroll, enrolledIds }) => {
  return (
    <Courses
      courses={courses}
      onEnroll={onEnroll}
      enrolledIds={enrolledIds}
      limit={null}
      showSeeAll={false}
    />
  );
};

export default CoursesPage;