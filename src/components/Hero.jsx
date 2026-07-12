import profile from "../assets/images/profile.png";

import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";

import {
  FaGithub,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";

function Hero() {
  return (
    <section
  id="hero"
  className="relative min-h-screen flex items-center overflow-hidden bg-slate-950 pt-24 md:pt-28"
>
      {/* Animated Background */}

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
        }}
        className="absolute w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[150px] top-10 left-0"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute w-[450px] h-[450px] bg-blue-600/20 rounded-full blur-[150px] bottom-0 right-0"
      />

     <div className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-xl font-semibold mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
            Pranithavya Sri
            <span className="block text-cyan-400">
              Dhanekula
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold mt-8 h-14 text-white">

            <TypeAnimation
              sequence={[
                "Data Analyst",
                2000,
                "Business Analyst",
                2000,
                "Business Intelligence Analyst",
                2000,
                "Power BI Developer",
                2000,
                "SQL Developer",
                2000,
                "Python Developer",
                2000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />

          </div>

          <p className="mt-8 text-slate-300 text-lg leading-9 max-w-xl">

            Data Analyst and Business Analyst with expertise in SQL,
            Python, Power BI, Tableau, Snowflake, and Business
            Intelligence. Passionate about transforming complex
            data into actionable insights, building interactive
            dashboards, automating reporting processes, and helping
            organizations make data-driven decisions.

          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/resume.pdf"
              download
              className="bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 duration-300 shadow-lg hover:shadow-cyan-500/40"
            >
              Download Resume
            </a>

            <a
              href="#projects"
              className="border border-cyan-400 px-8 py-4 rounded-xl hover:bg-cyan-500 hover:scale-105 duration-300"
            >
              View Projects
            </a>

          </div>

          <div className="flex gap-8 mt-10">

            <a
              href="https://github.com/pranitha522"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-cyan-400 hover:scale-110 duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/dhanekula-pranithavya"
              target="_blank"
              rel="noreferrer"
              className="text-4xl hover:text-cyan-400 hover:scale-110 duration-300"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-30 animate-pulse"></div>

            <img
              src={profile}
              alt="Pranithavya Sri Dhanekula"
              className="relative w-80 h-80 md:w-[430px] md:h-[430px] rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,.45)]"
            />

          </div>

        </motion.div>

      </div>

      {/* Scroll Down */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

        <a href="#about">

          <FaArrowDown className="text-cyan-400 text-3xl" />

        </a>

      </div>

    </section>
  );
}

export default Hero;