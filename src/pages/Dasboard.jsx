const Dasboard = ({ courses, enrolledIds }) => {
  // এনরোল করা কোর্সগুলো ফিল্টার করা
  const enrolledCourses = courses.filter(course => enrolledIds.includes(course.id));

  return (
    <div className="min-h-screen bg-[#030712] pt-32 px-10 text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black">
          Welcome to your <span className="text-cyan-500">Dasboard</span>
        </h1>
        <p className="mt-4 text-slate-400 mb-10">You are currently enrolled in {enrolledCourses.length} courses.</p>

        {/* এনরোল করা কোর্সের লিস্ট */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map(course => (
            <div key={course.id} className="bg-slate-900/50 border border-white/5 p-5 rounded-2xl flex gap-4">
              <img src={course.image} className="w-20 h-20 rounded-xl object-cover" alt="" />
              <div>
                <h3 className="font-bold text-white">{course.title}</h3>
                <button className="mt-3 text-xs text-cyan-500 font-bold uppercase tracking-wider hover:underline">
                  Continue Lesson →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dasboard;