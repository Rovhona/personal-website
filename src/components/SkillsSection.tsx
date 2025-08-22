import {
  Code2,
  Database,
  GitBranch,
  Github,
  Globe,
  Layout,
  Server,
  Terminal,
  Cloud,
  Cpu,
  Shield,
  Binary,
  Settings,
  Brain,
  Box,       // Docker
  Layers,    // Vite
  Atom,      // React.js
  Workflow,  // CI/CD
  LineChart, // Matplotlib
  Sigma,     // NumPy
  Layers3,   // CNN
  BookOpen,  // SDLC
  HardDrive, // MariaDB
  Leaf,      // MongoDB
} from "lucide-react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skills = {
    "Core Programming Languages": [
      { name: "Python", icon: <Code2 className="w-8 h-8" /> },
      { name: "JavaScript", icon: <Binary className="w-8 h-8" /> },
      { name: "Java", icon: <Terminal className="w-8 h-8" /> },
      { name: "C/C++", icon: <Cpu className="w-8 h-8" /> },
      { name: "SQL", icon: <Database className="w-8 h-8" /> },
      { name: "HTML/CSS", icon: <Layout className="w-8 h-8" /> },
      { name: "Object-Oriented Programming (OOP)", icon: <Settings className="w-8 h-8" /> },
    ],
    "Technologies & Frameworks": [
      { name: "Git & GitHub", icon: <Github className="w-8 h-8" /> },
      { name: "Web Development", icon: <Globe className="w-8 h-8" /> },
      { name: "Frontend Deployment", icon: <Globe className="w-8 h-8" /> },
      { name: "React.js", icon: <Atom className="w-8 h-8" /> },
      { name: "Vite", icon: <Layers className="w-8 h-8" /> },
      { name: "Docker", icon: <Box className="w-8 h-8" /> },
      { name: "DbGate", icon: <Server className="w-8 h-8" /> },
      { name: "MariaDB", icon: <HardDrive className="w-8 h-8" /> },  // ✅ Added
      { name: "MongoDB", icon: <Leaf className="w-8 h-8" /> },       // ✅ Added
      { name: "CI/CD", icon: <Workflow className="w-8 h-8" /> },
      { name: "Software Development Life Cycle (SDLC)", icon: <BookOpen className="w-8 h-8" /> },
      { name: "TensorFlow.js", icon: <Brain className="w-8 h-8" /> },
      { name: "jsPDF / html2canvas", icon: <Settings className="w-8 h-8" /> },
      { name: "Cybersecurity Principles", icon: <Shield className="w-8 h-8" /> },
      { name: "Database Systems", icon: <Database className="w-8 h-8" /> },
      { name: "Version Control", icon: <GitBranch className="w-8 h-8" /> },
    ],
    "Advanced Competencies": [
      { name: "Machine Learning", icon: <Brain className="w-8 h-8" /> },
      { name: "SciKit-Learn", icon: <Brain className="w-8 h-8" /> },
      { name: "NumPy", icon: <Sigma className="w-8 h-8" /> },
      { name: "Matplotlib", icon: <LineChart className="w-8 h-8" /> },
      { name: "Convolutional Neural Networks (CNN)", icon: <Layers3 className="w-8 h-8" /> },
      { name: "Image Classification", icon: <Cpu className="w-8 h-8" /> },
      { name: "Computer Vision", icon: <Brain className="w-8 h-8" /> },
      { name: "Process Automation", icon: <Settings className="w-8 h-8" /> },
      { name: "Matlab", icon: <Code2 className="w-8 h-8" /> },
      { name: "R Programming", icon: <Binary className="w-8 h-8" /> },
    ],
  };

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center mb-6 tracking-tight">
          Technical Expertise
        </h2>
        <p className="text-center text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed mb-20">
          A refined and continually expanding toolset built through academic rigor,
          research, and real-world impact. Focused on writing clean, scalable code,
          building systems with purpose, and solving problems that matter.
        </p>

        {Object.entries(skills).map(([category, skillsList]) => (
          <div key={category} className="mb-20">
            <h3 className="text-2xl font-semibold text-blue-400 mb-10 text-center uppercase tracking-wide">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {skillsList.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center p-5 bg-gray-850 rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all"
                  whileHover={{ scale: 1.06 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="text-blue-400 mb-3">{skill.icon}</div>
                  <span className="text-sm font-medium tracking-tight text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-10">
          <a
            href="https://github.com/Rovhona"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-medium shadow-xl transition"
          >
            Explore My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
