import { AnimatePresence,motion } from "framer-motion";

export default function Home() {
  return (
      <motion.div
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
      >
      <button className="btn">Hello daisyUI</button>

      </motion.div>
  );
}
