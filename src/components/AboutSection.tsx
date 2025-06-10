const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white text-gray-900">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-5xl font-extrabold text-center mb-8 tracking-tight">
          About Me
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
          Developer • Researcher • Technologist
        </p>
        <div className="text-[17px] leading-relaxed text-gray-800 space-y-6 text-justify">
          <p>
            I'm a Computer Science Honours student at the University of the Western Cape with a strong foundation in full-stack development, machine learning, and cloud computing. My journey has been shaped by real-world experience — from building intelligent systems during internships to tutoring core computer science and mathematics concepts.
          </p>

          <p>
            In 2024, I was part of the <span className="font-semibold text-blue-600">Standard Bank UniHack</span> team that designed an AI-powered health platform to improve healthcare access in underserved communities. This reinforced my belief in using technology for impact — solutions that are not only functional but also meaningful.
          </p>

          <p>
            As the <span className="font-semibold text-blue-600">Treasurer of Geekulcha UWC</span>, I help foster a thriving student tech ecosystem through events, workshops, and collaboration. My leadership and teamwork experiences have taught me how to balance code with communication.
          </p>

          <p>
            I'm driven by curiosity, community, and a commitment to building software that solves real problems. Looking ahead, I aim to grow into a globally-minded engineer who blends innovation, ethics, and impact in every line of code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
