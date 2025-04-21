
const ProjectsSection = () => {
    return (
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-1 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary">InnovativeHealth UniHackers Team</h3>
                  <p className="text-gray-600">July 2024</p>
                </div>
                <h4 className="text-lg font-medium mb-2">Standard Bank UniHack</h4>
                <p className="text-gray-700 mb-4">Liberty Life Building, Century City, Cape Town</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Designed and developed a health tech platform with an AI-powered chatbot to improve accessibility to healthcare services in underserved communities.</li>
                  <li>Integrated features for symptom consultation, medication delivery, and online appointment booking.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectsSection;