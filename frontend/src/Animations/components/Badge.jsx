import { motion } from "framer-motion";
export default function Badge({ caption }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ scale: [1, 1.2, 1], opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="badge"
    >
      {caption}
    </motion.span>
  );
}
