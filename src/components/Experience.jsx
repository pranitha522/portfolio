import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaChartLine,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa";

const experiences = [
  {
    year: "Jun 2025 - Present",
    role: "Data Analyst (Volunteer)",
    company: "Community Dreams Foundation",
    icon: <FaChartLine />,
    color: "text-cyan-400",
    points: [
      "Developed interactive dashboards using Power BI and Tableau.",
      "Performed data analysis using SQL and Python.",
      "Automated reporting processes to improve efficiency.",
      "Generated business insights through KPI reporting and visualization.",
    ],
  },

  {
    year: "Jun 2022 - Jun 2023",
    role: "Data Analyst",
    company: "Develop Trees",
    icon: <FaDatabase />,
    color: "text-green-400",
    points: [
      "Analyzed business data using SQL and Python.",
      "Built dashboards for executive reporting.",
      "Performed data cleaning and validation.",
      "Collaborated with business teams to identify KPIs.",
    ],
  },

  {
    year: "Jan 2022 - Jun 2022",
    role: "Software Developer Intern",
    company: "WorksBot",
    icon: <FaLaptopCode />,
    color: "text-yellow-400",
    points: [
      "Developed Academic Management System using Django.",
      "Designed MongoDB database collections.",
      "Implemented role-based authentication.",
      "Participated in testing and deployment.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <h2 className="text-5xl md:text-6xl font-black tracking-tight">

            Professional

            <span className="text-cyan-400">
              {" "}Experience
            </span>

          </h2>

          <p className="text-slate-400 mt-6 text-lg max-w-3xl mx-auto">

            My professional journey in Data Analytics,
            Business Intelligence, and Software Development.

          </p>

        </motion.div>

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-7 top-0 bottom-0 w-1 bg-cyan-500/30"></div>

          <div className="space-y-14">

            {experiences.map((job, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: .6,
                  delay: index * .2,
                }}
                viewport={{ once: true }}
                className="flex gap-8 items-start"
              >

                {/* Timeline Circle */}

                <div className="relative z-10">

                  <div className={`w-14 h-14 rounded-full bg-slate-900 border-4 border-cyan-400 flex items-center justify-center text-2xl ${job.color}`}>

                    {job.icon}

                  </div>

                </div>

                {/* Card */}

                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="flex-1 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:border-cyan-400 transition"
                >

                  <p className="text-cyan-400 font-semibold mb-2">

                    {job.year}

                  </p>

                  <h3 className="text-3xl font-bold">

                    {job.role}

                  </h3>

                  <p className="text-slate-400 text-xl mb-6">

                    {job.company}

                  </p>

                  <ul className="space-y-3">

                    {job.points.map((point) => (

                      <li
                        key={point}
                        className="flex items-start gap-3 text-slate-300 leading-7"
                      >

                        <span className="text-cyan-400 mt-1">

                          ●

                        </span>

                        {point}

                      </li>

                    ))}

                  </ul>

                </motion.div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;