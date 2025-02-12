import { motion } from "framer-motion";

const Features = () => {

    const features = [
        {
          id: 1,
          title: "Create Assignments",
          description:
            "Easily create assignments for group studies and share them with your friends.",
          icon: "📄",
        },
        {
          id: 2,
          title: "Grade Assignments",
          description:
            "Review and grade your friends' assignments in a collaborative environment.",
          icon: "⭐",
        },
        {
          id: 2,
          title: "Take Assignments",
          description:
            "Review and grade your friends' assignments in a collaborative environment.",
          icon: "📑",
        },
        {
          id: 3,
          title: "Track Progress",
          description:
            "Monitor your study progress and check assignments completed by your friends.",
          icon: "📈",
        },
      ];

    return (
        <section className="py-12 md:w-[85%] mx-auto">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl font-bold text-center mb-8"
          >
            <span className="text-accent">Features of</span> Our Application
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className=" shadow-md bg-base-200 p-6 rounded-lg text-center"
              >
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Features;