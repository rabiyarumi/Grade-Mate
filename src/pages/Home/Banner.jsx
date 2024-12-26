import { easeIn, easeInOut } from "motion";
import { motion } from "motion/react"
import banner from "../../assets/banner.webp"

const Banner = () => {
    return (
        <div
      className="relative h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center text-white"
        >
          <h1 className="text-4xl font-bold">Welcome to <span className="text-accent">Grade Mate</span></h1>
          <p className="mt-4 text-lg">
            Collaborate, complete assignments, and grade your friends in a dynamic online study group!
          </p>
        </motion.div>
      </div>
    </div>
    );

};

export default Banner;