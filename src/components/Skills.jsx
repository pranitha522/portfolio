import { motion } from "framer-motion";

import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaCloud,
  FaBrain,
  FaCode,
  FaTable,
  FaFileExcel,
  FaProjectDiagram,
  FaServer,
} from "react-icons/fa";

const skills = [
  {
    icon: <FaPython className="text-yellow-400 text-5xl" />,
    title: "Python",
    level: 95,
  },
  {
    icon: <FaDatabase className="text-green-400 text-5xl" />,
    title: "SQL",
    level: 95,
  },
  {
    icon: <FaChartBar className="text-yellow-500 text-5xl" />,
    title: "Power BI",
    level: 92,
  },
  {
    icon: <FaTable className="text-blue-400 text-5xl" />,
    title: "Tableau",
    level: 90,
  },
  {
    icon: <FaCloud className="text-cyan-400 text-5xl" />,
    title: "Snowflake",
    level: 90,
  },
  {
    icon: <FaFileExcel className="text-green-500 text-5xl" />,
    title: "Excel",
    level: 95,
  },
  {
    icon: <FaBrain className="text-pink-400 text-5xl" />,
    title: "Machine Learning",
    level: 82,
  },
  {
    icon: <FaChartBar className="text-purple-400 text-5xl" />,
    title: "Business Intelligence",
    level: 93,
  },
  {
    icon: <FaProjectDiagram className="text-orange-400 text-5xl" />,
    title: "Data Visualization",
    level: 90,
  },
  {
    icon: <FaServer className="text-cyan-300 text-5xl" />,
    title: "ETL & Data Pipelines",
    level: 88,
  },
  {
    icon: <FaCode className="text-red-400 text-5xl" />,
    title: "Problem Solving",
    level: 95,
  },
  {
    icon: <FaCloud className="text-sky-400 text-5xl" />,
    title: "Cloud Technologies",
    level: 85,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-black tracking-tight">

            Technical

            <span className="text-cyan-400">
              {" "}Skills
            </span>

          </h2>

          <p className="text-slate-400 mt-6 text-lg max-w-3xl mx-auto">

            A combination of programming, analytics,
            business intelligence, cloud technologies,
            and modern data engineering tools.

          </p>

        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:border-cyan-400 transition duration-300"
            >

              <div className="mb-6">

                {skill.icon}

              </div>

              <h3 className="text-2xl font-bold mb-5">

                {skill.title}

              </h3>

              <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  transition={{
                    duration: 1.4,
                  }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full"
                />

              </div>

              <div className="flex justify-between mt-4">

                <span className="text-slate-400">

                  Proficiency

                </span>

                <span className="text-cyan-400 font-bold">

                  {skill.level}%

                </span>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;