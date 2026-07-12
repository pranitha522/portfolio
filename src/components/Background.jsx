import { motion } from "framer-motion";

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">

      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[140px] top-20 left-10"
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[160px] bottom-10 right-10"
      />

      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute w-[350px] h-[350px] rounded-full bg-purple-600/20 blur-[120px] top-1/2 left-1/2"
      />

    </div>
  );
}

export default Background;