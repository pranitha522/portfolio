import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaPython,
  FaChartBar,
  FaDatabase,
} from "react-icons/fa";

const projects = [
  {
    title: "Medical AI Assistant",
    icon: <FaReact className="text-cyan-400 text-6xl" />,
    description:
      "AI-powered healthcare assistant developed using React, FastAPI, Python, and Snowflake Cortex AI. Provides intelligent responses from healthcare datasets with a modern chat interface.",
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "Snowflake",
      "REST API",
    ],
    github: "https://github.com/pranitha522",
    demo: "#",
  },

  {
    title: "Power BI Sales Dashboard",
    icon: <FaChartBar className="text-yellow-400 text-6xl" />,
    description:
      "Interactive dashboard for sales analytics, KPI monitoring, forecasting, and executive reporting using Power BI, SQL, Excel, and DAX.",
    technologies: [
      "Power BI",
      "SQL",
      "Excel",
      "DAX",
    ],
    github: "https://github.com/pranitha522",
    demo: "#",
  },

  {
    title: "Blockchain Medical Data Sharing",
    icon: <FaDatabase className="text-green-400 text-6xl" />,
    description:
      "Blockchain-based healthcare application enabling secure sharing of medical records between doctors and patients with role-based access.",
    technologies: [
      "Python",
      "Django",
      "Blockchain",
      "HTML",
      "CSS",
    ],
    github: "https://github.com/pranitha522",
    demo: "#",
  },

  {
    title: "Social Media Analytics",
    icon: <FaPython className="text-blue-400 text-6xl" />,
    description:
      "Marketing analytics project leveraging Google Analytics, SimilarWeb, SQL, and Python to improve customer engagement and campaign performance.",
    technologies: [
      "Python",
      "Google Analytics",
      "SQL",
      "Visualization",
    ],
    github: "https://github.com/pranitha522",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            Featured{" "}
            <span className="text-cyan-400">
              Projects
            </span>
          </h2>

          <p className="text-slate-400 mt-6 text-lg max-w-3xl mx-auto">
            A collection of projects demonstrating my experience in
            Data Analytics, Business Intelligence, Artificial Intelligence,
            Dashboard Development, and Software Engineering.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8 hover:border-cyan-400 transition duration-300"
            >

              <div className="mb-8">
                {project.icon}
              </div>

              <h3 className="text-3xl font-bold mb-5">
                {project.title}
              </h3>

              <p className="text-slate-300 leading-8 mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm font-medium border border-cyan-400/20"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="flex gap-5">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 duration-300 shadow-lg hover:shadow-cyan-500/40"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-500 duration-300"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;