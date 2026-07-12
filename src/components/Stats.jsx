import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import {
  FaBriefcase,
  FaProjectDiagram,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaBriefcase />,
    number: 3,
    suffix: "+",
    title: "Professional Experience",
  },
  {
    icon: <FaProjectDiagram />,
    number: 15,
    suffix: "+",
    title: "Projects Completed",
  },
  {
    icon: <FaCode />,
    number: 20,
    suffix: "+",
    title: "Technical Skills",
  },
  {
    icon: <FaGraduationCap />,
    number: 2025,
    suffix: "",
    title: "M.S. Graduate",
  },
];

function Stats() {

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className="py-24 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -10,
              }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-10 text-center hover:border-cyan-400 transition"
            >

              <div className="text-cyan-400 text-5xl flex justify-center mb-6">

                {item.icon}

              </div>

              <h2 className="text-5xl font-black">

                {item.number}

                {item.suffix}

              </h2>

              <p className="text-slate-400 mt-4">

                {item.title}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;