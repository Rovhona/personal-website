
const EducationSection = () => {
    return (
      <section id="education" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">Bachelor of Science Honours in Computer Science</h3>
                <p className="text-gray-600">Feb 2025 - Present</p>
              </div>
              <h4 className="text-lg font-medium mb-2">University of the Western Cape</h4>
              <p className="text-gray-700 mb-2">Cape Town, South Africa</p>
              <h5 className="font-medium text-gray-800 mt-4 mb-2">Coursework:</h5>
              <p className="text-gray-700">Artificial Intelligence, Cybersecurity, IoT, Advanced Software Engineering, Big Data, 4IR</p>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-600">Feb 2022 - Nov 2024</p>
              </div>
              <h4 className="text-lg font-medium mb-2">University of the Western Cape</h4>
              <p className="text-gray-700 mb-2">Cape Town, South Africa</p>
              <h5 className="font-medium text-gray-800 mt-4 mb-2">Coursework:</h5>
              <p className="text-gray-700">Machine Learning, Operating Systems, Computer Networks, Database Systems, Software Engineering, Algorithms and Data Structures, Mathematical Statistics, Calculus I-II, Discrete Mathematics</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default EducationSection;