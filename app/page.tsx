import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: 'url("/sorces/blue.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        aaaaa
      </motion.div>
    </main>
  );
}
