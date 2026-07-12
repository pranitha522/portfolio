import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaBookOpen,
  FaAward,
} from "react-icons/fa";

const education = [
  {
    degree: "Master of Science",
    field: "Information Technology Management",
    school: "Florida Atlantic University",
    location: "Boca Raton, Florida",
    year: "May 2025",
    gpa: "3.48 / 4.0",
    icon: <FaUniversity />,
    color: "text-cyan-400",
    coursework: [
      "Data Analytics",
      "Business Intelligence",
      "Artificial Intelligence",
      "Machine Learning",
      "Cloud Computing",
      "Database Systems",
    ],
  },

  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    school: "Jawaharlal Nehru Technological University, Kakinada",
    location: "India",
    year: "2021",
    gpa: "",
    icon: <FaGraduationCap />,
    color: "text-yellow-400",
    coursework: [
      "Programming",
      "Data Structures",
      "Algorithms",
      "Database Management",
      "Software Engineering",
      "Computer Networks",
    ],
  },
];

function Education() {
  return (
    <section
      id="education"
      className="py-28 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            Education
          </h2>

          <p className="text-slate-400 mt-6 text-lg max-w-3xl mx-auto">
            My academic background has provided a strong foundation in
            analytics, business intelligence, software development,
            cloud computing, and modern data technologies.
          </p>

        </motion.div>

        <div className="space-y-10">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-10 hover:border-cyan-400 transition duration-300"
            >

              <div className="flex flex-col md:flex-row justify-between gap-8">

                {/* Left */}

                <div className="flex gap-6">

                  <div
                    className={`text-5xl mt-1 ${item.color}`}
                  >
                    {item.icon}
                  </div>

                  <div>

                    <h3 className="text-3xl font-bold">

                      {item.degree}

                    </h3>

                    <h4 className="text-xl text-cyan-400 mt-2">

                      {item.field}

                    </h4>

                    <p className="text-slate-300 mt-4">

                      {item.school}

                    </p>

                    <p className="text-slate-500">

                      {item.location}

                    </p>

                  </div>

                </div>

                {/* Right */}

                <div className="text-left md:text-right">

                  <div className="flex items-center justify-start md:justify-end gap-3">

                    <FaAward className="text-cyan-400" />

                    <span className="font-semibold">

                      {item.year}

                    </span>

                  </div>

                  {item.gpa && (

                    <p className="mt-4 text-slate-300">

                      GPA

                      <span className="text-cyan-400 font-bold">

                        {" "}{item.gpa}

                      </span>

                    </p>

                  )}

                </div>

              </div>

              <div className="mt-10">

                <div className="flex items-center gap-3 mb-6">

                  <FaBookOpen className="text-cyan-400" />

                  <h4 className="text-xl font-bold">

                    Relevant Coursework

                  </h4>

                </div>

                <div className="flex flex-wrap gap-4">

                  {item.coursework.map((course) => (

                    <span
                      key={course}
                      className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/20 text-cyan-300"
                    >
                      {course}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;