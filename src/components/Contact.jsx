import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "Pranithadhanekula.1@gmail.com",
    link: "mailto:Pranithadhanekula.1@gmail.com",
  },

  {
    icon: <FaPhone />,
    title: "Phone",
    value: "+1 (561) 875-2570",
    link: "tel:+15618752570",
  },

  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "linkedin.com/in/dhanekula-pranithavya",
    link: "https://www.linkedin.com/in/dhanekula-pranithavya",
  },

  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "github.com/pranitha522",
    link: "https://github.com/pranitha522",
  },

  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Delray Beach, Florida, USA",
    link: null,
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <h2 className="text-5xl md:text-6xl font-black tracking-tight">

            Get In

            <span className="text-cyan-400">
              {" "}Touch
            </span>

          </h2>

          <p className="text-slate-400 mt-6 text-lg max-w-3xl mx-auto leading-8">

            I'm actively seeking opportunities as a
            <span className="text-cyan-400 font-semibold">
              {" "}Data Analyst
            </span>,
            <span className="text-cyan-400 font-semibold">
              {" "}Business Analyst
            </span>,
            or
            <span className="text-cyan-400 font-semibold">
              {" "}Business Intelligence Analyst
            </span>.
            Feel free to connect with me for full-time opportunities,
            collaborations, or professional networking.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {contacts.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8 hover:border-cyan-400 transition duration-300"
            >

              <div className="text-cyan-400 text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              {item.link ? (

                <a
                  href={item.link}
                  target={
                    item.link.startsWith("http")
                      ? "_blank"
                      : "_self"
                  }
                  rel="noreferrer"
                  className="text-slate-300 hover:text-cyan-400 break-all transition"
                >
                  {item.value}
                </a>

              ) : (

                <p className="text-slate-300">
                  {item.value}
                </p>

              )}

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Contact;