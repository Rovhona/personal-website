const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white via-gray-100 to-white text-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-5xl font-extrabold text-center mb-4 tracking-tight">
           Projects
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg mb-16">
          Real-world, impact-driven projects that combine machine learning, software development, and user-focused design.
        </p>

        <div className="grid grid-cols-1 gap-14">
          {/* Project 1: Health Assistant */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
            <img
              src="/uploads/screenshot-health.png"
              alt="Health Assistant Project"
              className="w-full h-auto rounded-t-2xl object-cover"
            />
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-2xl font-bold text-blue-600">InnovativeHealth — UniHackers Team</h3>
                <p className="text-sm text-gray-500 mt-1 md:mt-0">July 2024 • Standard Bank UniHack</p>
              </div>
              <p className="text-gray-700 mb-4">
                Built a health-tech platform leveraging an AI-powered chatbot to bridge healthcare access gaps in underserved communities.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 text-[15px]">
                <li>Conversational AI for symptom checks and consultations.</li>
                <li>Integrated medication delivery and appointment booking modules.</li>
                <li>Developed in a 48-hour hackathon at Liberty Life, Cape Town.</li>
              </ul>
            </div>
          </div>

          {/* Project 2: Loan Eligibility Prediction System */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <img
                src="/uploads/page1.png"
                alt="Loan Eligibility Dashboard Page 1"
                className="w-full h-auto object-cover rounded-t-2xl md:rounded-tr-none"
              />
              <img
                src="/uploads/page2.png"
                alt="Loan Eligibility Dashboard Page 2"
                className="w-full h-auto object-cover rounded-b-2xl md:rounded-bl-none"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-2xl font-bold text-blue-600">Loan Eligibility Prediction System</h3>
                <p className="text-sm text-gray-500 mt-1 md:mt-0">May 2025 • Personal Project</p>
              </div>
              <p className="text-gray-700 mb-4">
                An intelligent web-based dashboard built with Streamlit that predicts loan approvals using machine learning.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 text-[15px]">
                <li>Implements logistic regression for binary classification.</li>
                <li>Interactive UI supports both batch (CSV) and individual predictions.</li>
                <li>Displays model performance metrics, confidence scores, and visualizations.</li>
              </ul>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="https://github.com/Rovhona/Loan-Eligibility-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 font-medium hover:underline"
                >
                  🔗 GitHub Repository
                </a>
                <a
                  href="https://rovhona-loan-eligibility-system-app-lr6p2d.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 font-medium hover:underline"
                >
                  🔗 Live App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
