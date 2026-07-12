import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/10 shadow-lg">

      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#hero"
          className="text-3xl font-black tracking-tight"
        >
          <span className="text-white">
            Pranithavya
          </span>

          <span className="text-cyan-400">
            {" "}Sri
          </span>
        </a>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-10">

          {navLinks.map((link) => (

            <li key={link.name}>

              <a
                href={link.href}
                className="relative text-slate-300 hover:text-cyan-400 font-medium duration-300 group"
              >

                {link.name}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>

              </a>

            </li>

          ))}

        </ul>

        {/* Resume Button */}

        <a
          href="/resume.pdf"
          download
          className="hidden lg:block bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 duration-300 shadow-lg hover:shadow-cyan-500/40"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-4xl"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="lg:hidden bg-black/80 backdrop-blur-xl border-t border-white/10">

          <div className="flex flex-col px-8 py-8 gap-6">

            {navLinks.map((link) => (

              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg hover:text-cyan-400 duration-300"
              >
                {link.name}
              </a>

            ))}

            <a
              href="/resume.pdf"
              download
              className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-center py-3 rounded-xl font-semibold"
            >
              Download Resume
            </a>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;