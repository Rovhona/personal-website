const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-white via-gray-100 to-white text-gray-900"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-5xl font-extrabold text-center mb-4 tracking-tight">
          Projects
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg mb-16">
          Real-world, impact-driven projects that combine machine learning,
          software development, and user-focused design.
        </p>

        <div className="grid grid-cols-1 gap-14">
          {/* Project 1: InnovativeHealth */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
            <img
              src="/uploads/screenshot-health.png"
              alt="InnovativeHealth Project"
              className="w-full h-auto rounded-t-2xl object-cover"
            />
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-2xl font-bold text-blue-600">
                  InnovativeHealth - UniHackers Team
                </h3>
                <p className="text-sm text-gray-500 mt-1 md:mt-0">
                  July 2024 • Standard Bank UniHack
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                Health-tech platform leveraging an AI-powered chatbot to bridge
                healthcare access gaps in underserved communities.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 text-[15px]">
                <li>Conversational AI for symptom checks and consultations.</li>
                <li>Medication delivery and appointment booking modules.</li>
                <li>
                  Built in 48 hours during a hackathon at Liberty Life, Cape Town.
                </li>
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
                <h3 className="text-2xl font-bold text-blue-600">
                  Loan Eligibility Prediction System
                </h3>
                <p className="text-sm text-gray-500 mt-1 md:mt-0">
                  May 2025 • Personal Project
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                Web-based dashboard that predicts loan approvals using machine
                learning, built with Streamlit.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 text-[15px]">
                <li>Logistic regression for binary classification.</li>
                <li>Interactive UI supports batch (CSV) and single predictions.</li>
                <li>
                  Displays model metrics, confidence scores, and visualizations.
                </li>
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

          {/* Project 3: AI Resume Reviewer */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <img
                src="/uploads/Screenshot (222).png"
                alt="AI Resume Reviewer Screenshot 1"
                className="w-full h-auto object-cover rounded-t-2xl md:rounded-tr-none"
              />
              <img
                src="/uploads/Screenshot (223).png"
                alt="AI Resume Reviewer Screenshot 2"
                className="w-full h-auto object-cover rounded-b-2xl md:rounded-bl-none"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-2xl font-bold text-blue-600">
                  AI Resume Reviewer
                </h3>
                <p className="text-sm text-gray-500 mt-1 md:mt-0">
                  Sept 2025 • Personal Project
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                Full-stack app that provides AI-powered resume analysis, keyword
                extraction, and tailored feedback to help candidates improve
                their applications.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 text-[15px]">
                <li>Built with Next.js frontend and FastAPI backend.</li>
                <li>
                  Uses <code>pdfplumber</code> and <code>python-docx</code> for
                  parsing resumes in PDF/DOCX.
                </li>
                <li>
                  Generates keyword relevance scoring and structured feedback
                  reports.
                </li>
              </ul>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="https://github.com/Rovhona/ai-resume-reviewer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 font-medium hover:underline"
                >
                  🔗 GitHub Repository
                </a>
                <a
                  href="https://ai-resume-reviewer-eight.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 font-medium hover:underline"
                >
                  🔗 Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project 4: QuizMaster */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <img
                src="/uploads/Screenshot (225).png"
                alt="QuizMaster Screenshot 1"
                className="w-full h-auto object-cover rounded-t-2xl md:rounded-tr-none"
              />
              <img
                src="/uploads/Screenshot (227).png"
                alt="QuizMaster Screenshot 2"
                className="w-full h-auto object-cover rounded-b-2xl md:rounded-bl-none"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <h3 className="text-2xl font-bold text-blue-600">
                  QuizMaster - Trivia Game
                </h3>
                <p className="text-sm text-gray-500 mt-1 md:mt-0">
                  Sept 2025 • Personal Project
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                A modern, fast-paced trivia quiz game built with React and
                TypeScript. Play across multiple categories with customizable
                difficulty levels, timed questions, and competitive scoring.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-800 text-[15px]">
                <li>8 categories including Technology, Science, Sports & more.</li>
                <li>Customizable game settings with streak-based scoring.</li>
                <li>Responsive design with animations and real-time statistics.</li>
              </ul>
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="https://github.com/Rovhona/Quiz-Master"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 font-medium hover:underline"
                >
                  🔗 GitHub Repository
                </a>
                <a
                  href="https://quiz-master-sooty.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 font-medium hover:underline"
                >
                  🔗 Live Demo
                </a>
              </div>

            </div>
          </div>
        </div>
        {/* Project 5: Evolutionary Password Generator */}
<div className="bg-white border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
  <div className="p-6 md:p-8">
    <div className="flex flex-col md:flex-row md:justify-between mb-2">
      <h3 className="text-2xl font-bold text-blue-600">
        Evolutionary Password Generator
      </h3>
      <p className="text-sm text-gray-500 mt-1 md:mt-0">
        2025 • Cybersecurity & AI Project
      </p>
    </div>
    <p className="text-gray-700 mb-4">
      A cybersecurity system that uses evolutionary computing and AI-generated
      code to create strong, unique password generators with custom encryption logic.
    </p>
    <ul className="list-disc pl-5 space-y-1 text-gray-800 text-[15px]">
      <li>Custom cryptographic functions generated using TuringBot.</li>
      <li>Tkinter desktop GUI with copy, validation, and real-time updates.</li>
      <li>JavaScript web-based version of the generator.</li>
    </ul>
    <div className="flex flex-wrap gap-4 mt-6">
      <a
        href="https://github.com/Rovhona/COS738-Strong-Password-Generator"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-600 font-medium hover:underline"
      >
        🔗 GitHub Repository
      </a>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default ProjectsSection;
