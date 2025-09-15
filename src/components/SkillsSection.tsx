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
  FileText,  // pdfplumber / docx parsing
  Zap,       // FastAPI
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
      { name: "FastAPI", icon: <Zap className="w-8 h-8" /> },            // ✅ New
      { name: "React.js", icon: <Atom className="w-8 h-8" /> },
      { name: "Vite", icon: <Layers className="w-8 h-8" /> },
      { name: "Docker", icon: <Box className="w-8 h-8" /> },
      { name: "Git & GitHub", icon: <Github className="w-8 h-8" /> },
      { name: "Frontend Deployment", icon: <Globe className="w-8 h-8" /> },
      { name: "DbGate", icon: <Server className="w-8 h-8" /> },
      { name: "MariaDB", icon: <HardDrive className="w-8 h-8" /> },
      { name: "MongoDB", icon: <Leaf className="w-8 h-8" /> },
      { name: "CI/CD", icon: <Workflow className="w-8 h-8" /> },
      { name: "Software Development Life Cycle (SDLC)", icon: <BookOpen className="w-8 h-8" /> },
      { name: "TensorFlow.js", icon: <Brain className="w-8 h-8" /> },
      { name: "jsPDF / html2canvas", icon: <Settings className="w-8 h-8" /> },
      { name: "Cybersecurity Principles", icon: <Shield className="w-8 h-8" /> },
      { name: "Database Systems", icon: <Database className="w-8 h-8" /> },
      { name: "Version Control", icon: <GitBranch className="w-8 h-8" /> },
    ],
    "Advanced Competencies": [
      { name: "Resume Parsing (pdfplumber, python-docx)", icon: <FileText className="w-8 h-8" /> }, // ✅ New
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
      {/* ...rest unchanged */}
    </section>
  );
};

export default SkillsSection;
