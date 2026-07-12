import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {

  return (

<footer className="bg-black border-t border-white/10 py-12">

<div className="max-w-7xl mx-auto px-8">

<div className="flex flex-col md:flex-row justify-between items-center">

<div>

<h2 className="text-3xl font-black text-cyan-400">

Pranithavya Sri Dhanekula

</h2>

<p className="text-slate-400 mt-2">

Data Analyst • Business Analyst • BI Analyst

</p>

</div>

<div className="flex gap-6 text-3xl mt-8 md:mt-0">

<a
href="https://github.com/pranitha522"
target="_blank"
className="hover:text-cyan-400 duration-300">

<FaGithub/>

</a>

<a
href="https://www.linkedin.com/in/dhanekula-pranithavya"
target="_blank"
className="hover:text-cyan-400 duration-300">

<FaLinkedin/>

</a>

<a
href="mailto:Pranithadhanekula.1@gmail.com"
className="hover:text-cyan-400 duration-300">

<FaEnvelope/>

</a>

</div>

</div>

<hr className="my-8 border-white/10"/>

<p className="text-center text-slate-500">

© 2026 Pranithavya Sri Dhanekula.
Built using React, Tailwind CSS & Framer Motion.

</p>

</div>

</footer>

)

}

export default Footer;