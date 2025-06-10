const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-5xl font-extrabold text-center mb-8 tracking-tight">
          Education
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16">
          Academically grounded with a strong emphasis on real-world applications of Computer Science.
        </p>

        <div className="space-y-10">
          {/* Honours */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-2xl font-bold text-blue-600">
                BSc Honours in Computer Science
              </h3>
              <p className="text-sm text-gray-500">Feb 2025 – Present</p>
            </div>
            <h4 className="text-lg font-medium mb-1">
              University of the Western Cape — Cape Town, South Africa
            </h4>
            <p className="text-gray-700 mb-4">
              A postgraduate program focused on advanced theoretical and applied topics in computing.
            </p>
            <h5 className="font-medium text-gray-800 mb-1">Key Coursework:</h5>
            <ul className="list-disc pl-5 text-gray-700 text-[15px]">
              <li>Artificial Intelligence</li>
              <li>Cybersecurity</li>
              <li>Internet of Things (IoT)</li>
              <li>Advanced Software Engineering</li>
              <li>Big Data</li>
              <li>4th Industrial Revolution (4IR)</li>
            </ul>
          </div>

          {/* Bachelor's */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <h3 className="text-2xl font-bold text-blue-600">
                BSc in Computer Science
              </h3>
              <p className="text-sm text-gray-500">Feb 2022 – Nov 2024</p>
            </div>
            <h4 className="text-lg font-medium mb-1">
              University of the Western Cape — Cape Town, South Africa
            </h4>
            <p className="text-gray-700 mb-4">
              Undergraduate foundation covering theory, systems design, and core computational thinking.
            </p>
            <h5 className="font-medium text-gray-800 mb-1">Key Coursework:</h5>
            <ul className="list-disc pl-5 text-gray-700 text-[15px]">
              <li>Machine Learning</li>
              <li>Operating Systems</li>
              <li>Computer Networks</li>
              <li>Database Management Systems</li>
              <li>Software Engineering</li>
              <li>Algorithms and Data Structures</li>
              <li>Mathematical Statistics</li>
              <li>Calculus I & II</li>
              <li>Discrete Mathematics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
