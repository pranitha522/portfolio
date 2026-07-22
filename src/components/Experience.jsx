import { motion } from "framer-motion";
import {
  FaChartLine,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa";

const experiences = [
  {
    year: "Jun 2025 - Apr 2026",
    role: "Data Analyst (Volunteer)",
    company: "Community Dreams Foundation",
    icon: <FaChartLine />,
    color: "text-cyan-400",
    points: [
      "Performed data cleansing and quality assurance across reporting systems.",
      "Analyzed 20,000+ records using SQL and Python to identify business trends.",
      "Built interactive Power BI and Tableau dashboards for stakeholder reporting.",
      "Collaborated with cross-functional teams to deliver actionable business insights.",
    ],
  },

  {
    year: "Jul 2021 - Jun 2023",
    role: "Data Analyst",
    company: "Armo Techsolutions Pvt Ltd",
    icon: <FaDatabase />,
    color: "text-green-400",
    points: [
      "Developed interactive Power BI and Tableau dashboards for business reporting.",
      "Wrote optimized SQL queries to analyze datasets of over 50,000 records.",
      "Automated reporting workflows using Python, improving reporting efficiency.",
      "Performed trend analysis and KPI reporting to support business decisions.",
      "Collaborated with cross-functional teams to deliver analytics solutions.",
    ],
  },

  {
    year: "Jul 2020 - Jul 2021",
    role: "Data Analyst Intern",
    company: "Armo Techsolutions Pvt Ltd",
    icon: <FaLaptopCode />,
    color: "text-yellow-400",
    points: [
      "Assisted in data collection, cleaning, and transformation for analytics projects.",
      "Wrote SQL queries to extract and validate data for reporting needs.",
      "Supported maintenance of relational databases and ETL workflows.",
      "Built foundational Power BI dashboards to monitor operational metrics.",
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
          transition={{ duration: 0.7 }}
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
            Business Intelligence, and Data-Driven Decision Making.
          </p>

        </motion.div>

        <div className="relative">

          {/* Vertical Timeline Line */}
          <div className="absolute left-7 top-0 bottom-0 w-1 bg-cyan-500/30"></div>

          <div className="space-y-14">

            {experiences.map((job, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="flex gap-8 items-start"
              >

                {/* Timeline Icon */}
                <div className="relative z-10">

                  <div
                    className={`w-14 h-14 rounded-full bg-slate-900 border-4 border-cyan-400 flex items-center justify-center text-2xl ${job.color}`}
                  >
                    {job.icon}
                  </div>

                </div>

                {/* Experience Card */}

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
