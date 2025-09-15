const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white text-gray-900"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-5xl font-extrabold text-center mb-8 tracking-tight">
          About Me
        </h2>
        <p className="text-center text-gray-600 text-lg mb-16 max-w-3xl mx-auto">
          Developer • Researcher • Technologist
        </p>
        <div className="text-[17px] leading-relaxed text-gray-800 space-y-6 text-justify">
          <p>
            I’m a Computer Science Honours student at the University of the
            Western Cape with a strong foundation in software engineering and
            machine learning. My journey spans building intelligent systems,
            academic research, and tutoring core computer science and
            mathematics.
          </p>

        

          <p>
            I’m driven by curiosity and a commitment to building scalable,
            ethical, and impactful software solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
