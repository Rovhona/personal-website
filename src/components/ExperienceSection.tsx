
const ExperienceSection = () => {
    return (
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">Computer Science Tutor</h3>
                <p className="text-gray-600">Feb 2025 – Nov 2025</p>
              </div>
              <h4 className="text-lg font-medium mb-2">University of the Western Cape</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Assisting students with programming concepts, debugging, and algorithm development.</li>
                <li>Providing support for coding assignments and problem-solving exercises.</li>
              </ul>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">Mathematics Tutor</h3>
                <p className="text-gray-600">Feb 2024 – Nov 2024</p>
              </div>
              <h4 className="text-lg font-medium mb-2">University of the Western Cape</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Tutored first-year MAT105 students, assisting with assignments and mathematical concepts.</li>
                <li>Encouraged student confidence in mathematical problem-solving.</li>
              </ul>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">Machine Learning Intern</h3>
                <p className="text-gray-600">Jan 2024 – Feb 2024</p>
              </div>
              <h4 className="text-lg font-medium mb-2">InternCareer (Remote)</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Developed and evaluated a machine learning model to predict Titanic passenger survival using Python.</li>
                <li>Conducted data preprocessing and exploratory data analysis, including survival rate analysis by gender and other features.</li>
                <li>Delivered high-performing results and gained experience in handling real-world datasets with a focus on improving model robustness.</li>
              </ul>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-xl font-bold text-primary">Treasurer</h3>
                <p className="text-gray-600">Feb 2025 – Jun 2025</p>
              </div>
              <h4 className="text-lg font-medium mb-2">Geekulcha UWC</h4>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Managing financial records, budgets, and expenses for the student tech community.</li>
                <li>Organizing and funding tech-related events, hackathons, and workshops.</li>
                <li>Ensuring transparent financial transactions and reporting to the executive board.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ExperienceSection;