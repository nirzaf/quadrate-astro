import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code2, Briefcase, Heart } from 'lucide-react';

const stats = [
  {
    name: 'Happy Clients',
    value: '100+',
    description: 'Worldwide clients',
    icon: Users,
    label: 'Happy Clients',
  },
  {
    name: 'Projects Completed',
    value: '200+',
    description: 'Successful project deliveries',
    icon: Code2,
    label: 'Projects Completed',
  },
  {
    name: 'Client Satisfaction',
    value: '98%',
    description: 'Happy customers',
    icon: Heart,
    label: 'Client Satisfaction Rate',
  },
  {
    name: 'Years Experience',
    value: '8+',
    description: 'In digital solutions',
    icon: Briefcase,
    label: 'Years Experience',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const iconVariants = {
  initial: { scale: 0.8, rotate: -10 },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const StatsSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/3 right-1/3 w-1/4 h-1/4 bg-gradient-to-bl from-[#0607E1]/5 to-transparent rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute bottom-1/3 left-1/3 w-1/4 h-1/4 bg-gradient-to-tr from-[#0607E1]/5 to-transparent rounded-full"
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#000000]">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-[#000000]/70 max-w-2xl mx-auto">
            Measurable results that speak for themselves
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              className="relative group perspective-1000"
            >
              {/* Floating Background Effect */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.03, scale: 1 }}
                whileHover={{ opacity: 0.05, scale: 1.1 }}
                className="absolute inset-0 bg-[#0607E1] rounded-[2rem] blur-2xl transition-all duration-500"
              />
              
              {/* Card Container */}
              <motion.div
                className="relative transform-gpu transition-all duration-500 group-hover:scale-[1.02]"
                whileHover={{
                  rotateX: 5,
                  rotateY: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative p-8 rounded-[2rem] border border-[#000000]/10 bg-white backdrop-blur-xl shadow-xl hover:shadow-2xl hover:border-[#0607E1]/5 transition-all duration-500">
                  {/* Animated Corner Accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#000000]/10 rounded-tl-[2rem] opacity-30 group-hover:opacity-100 group-hover:border-[#0607E1]/5 transition-all duration-500" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#000000]/10 rounded-br-[2rem] opacity-30 group-hover:opacity-100 group-hover:border-[#0607E1]/5 transition-all duration-500" />
                  
                  {/* Icon Container */}
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    className="relative mb-6 inline-flex"
                  >
                    {/* Icon Background */}
                    <div className="absolute inset-0 bg-[#0607E1]/5 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative h-16 w-16 flex items-center justify-center rounded-2xl bg-[#000000]/5 group-hover:bg-[#0607E1]/5 transition-all duration-500">
                      {React.createElement(stat.icon, { className: "h-8 w-8 text-[#000000] transform group-hover:scale-110 transition-transform duration-500" })}
                    </div>
                  </motion.div>

                  {/* Stat Value with Floating Animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="relative"
                  >
                    <div className="absolute -inset-1 bg-[#0607E1]/5 opacity-30 blur group-hover:opacity-40 transition-opacity duration-500" />
                    <h3 className="relative font-bold text-5xl mb-3 text-[#000000] transform group-hover:scale-110 transition-transform duration-500">
                      {stat.value}
                    </h3>
                  </motion.div>

                  {/* Stat Name with Underline */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="relative z-10"
                  >
                    <h4 className="text-xl font-semibold text-[#000000] mb-2 relative inline-block">
                      {stat.name}
                      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0607E1]/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    </h4>
                  </motion.div>

                  {/* Description with Fade-in */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="text-[#000000]/70 text-sm mt-2 leading-relaxed group-hover:text-[#000000] transition-colors duration-500"
                  >
                    {stat.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
