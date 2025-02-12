import { motion } from "framer-motion";
import { FaUserPlus, FaUsers, FaTasks, FaGraduationCap } from "react-icons/fa";


const HowItWorks = () => {

    const steps = [
        { icon: <FaUserPlus className="text-4xl text-blue-500" />, title: "Sign Up & Log In", description: "Create an account and access your study group." },
        { icon: <FaUsers className="text-4xl text-green-500" />, title: "Connect with Friends", description: "Automatically connect with all registered users." },
        { icon: <FaTasks className="text-4xl text-yellow-500" />, title: "Create or Attempt Assignments", description: "Collaborate on tasks with ease." },
        { icon: <FaGraduationCap className="text-4xl text-purple-500" />, title: "Grade & Improve", description: "Give and receive feedback to improve skills." },
      ];

    return (
        <section className="bg-base-100 py-16 md:w-[85%] mx-auto">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">How <span className="text-accent">GradeMate</span> Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-base-200 p-6 rounded-lg shadow-md"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-base opacity-65">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default HowItWorks;