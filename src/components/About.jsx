import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaDatabase,
  FaChartLine,
  FaBrain,
  FaCloud,
  FaLaptopCode,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-28 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-5xl md:text-6xl font-black tracking-tight">

            About

            <span className="text-cyan-400">
              {" "}Me
            </span>

          </h2>

          <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto leading-8">

            Passionate about solving business problems through
            analytics, visualization and intelligent data solutions.

          </p>

        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold mb-8">

              Data Analyst &
              <span className="text-cyan-400">
                {" "}Business Analyst
              </span>

            </h3>

            <p className="text-slate-300 leading-9 text-lg">

              I recently completed my Master's in Information Technology
              Management from Florida Atlantic University. My passion
              lies in transforming raw data into meaningful business
              insights using SQL, Python, Power BI, Tableau, Snowflake,
              and Business Intelligence tools.

            </p>

            <p className="text-slate-300 leading-9 text-lg mt-8">

              I enjoy designing dashboards, automating reporting,
              performing exploratory data analysis, building ETL
              workflows, and helping organizations make better
              data-driven decisions through analytics and visualization.

            </p>

            <p className="text-slate-300 leading-9 text-lg mt-8">

              My goal is to contribute to organizations by solving
              real-world business problems using analytics, cloud
              technologies, artificial intelligence, and modern
              reporting platforms.

            </p>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <div className="grid sm:grid-cols-2 gap-6">

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:border-cyan-400 hover:-translate-y-2 duration-300">

                <FaUserGraduate className="text-cyan-400 text-5xl mb-6"/>

                <h4 className="text-xl font-bold mb-3">

                  Education

                </h4>

                <p className="text-slate-400">

                  M.S.
                  Information Technology
                  Management

                </p>

              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:border-cyan-400 hover:-translate-y-2 duration-300">

                <FaDatabase className="text-green-400 text-5xl mb-6"/>

                <h4 className="text-xl font-bold mb-3">

                  Data Analytics

                </h4>

                <p className="text-slate-400">

                  SQL, Snowflake,
                  Excel,
                  Data Modeling

                </p>

              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:border-cyan-400 hover:-translate-y-2 duration-300">

                <FaChartLine className="text-yellow-400 text-5xl mb-6"/>

                <h4 className="text-xl font-bold mb-3">

                  Business Intelligence

                </h4>

                <p className="text-slate-400">

                  Power BI,
                  Tableau,
                  Dashboards

                </p>

              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:border-cyan-400 hover:-translate-y-2 duration-300">

                <FaBrain className="text-pink-400 text-5xl mb-6"/>

                <h4 className="text-xl font-bold mb-3">

                  AI & Machine Learning

                </h4>

                <p className="text-slate-400">

                  Python,
                  AI,
                  Predictive Analytics

                </p>

              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:border-cyan-400 hover:-translate-y-2 duration-300">

                <FaCloud className="text-sky-400 text-5xl mb-6"/>

                <h4 className="text-xl font-bold mb-3">

                  Cloud

                </h4>

                <p className="text-slate-400">

                  Snowflake,
                  Azure,
                  Cloud Analytics

                </p>

              </div>

              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl hover:border-cyan-400 hover:-translate-y-2 duration-300">

                <FaLaptopCode className="text-purple-400 text-5xl mb-6"/>

                <h4 className="text-xl font-bold mb-3">

                  Development

                </h4>

                <p className="text-slate-400">

                  Python,
                  React,
                  SQL,
                  Automation

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;