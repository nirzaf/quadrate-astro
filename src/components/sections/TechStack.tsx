import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHeading from '@/components/ui/AnimatedHeading';

const technologies = [
  {
    name: "React",
    icon: "https://ik.imagekit.io/quadrate/TechStack/react-logo-svgrepo-com.svg?updatedAt=1732693690192"
  },
  {
    name: "Node.js",
    icon: "https://ik.imagekit.io/quadrate/TechStack/nodejs-1-logo-svgrepo-com.svg?updatedAt=1732693823409"
  },
  {
    name: "TypeScript",
    icon: "https://ik.imagekit.io/quadrate/TechStack/typescript-2.svg?updatedAt=1732693896683"
  },
  {
    name: "Python",
    icon: "https://ik.imagekit.io/quadrate/TechStack/python-5.svg?updatedAt=1732693924586"
  },
  {
    name: "Azure",
    icon: "https://ik.imagekit.io/quadrate/TechStack/azure-2.svg?updatedAt=1732693944653"
  },
  {
    name: "AWS",
    icon: "https://ik.imagekit.io/quadrate/TechStack/aws-2.svg?updatedAt=1732694019057"
  },
  {
    name: "Astro",
    icon: "https://ik.imagekit.io/quadrate/TechStack/astrojs.svg?updatedAt=1732694268449"
  },
  {
    name: "C#",
    icon: "https://ik.imagekit.io/quadrate/TechStack/c--4.svg?updatedAt=1732694268284"
  },
  {
    name: "Angular",
    icon: "https://ik.imagekit.io/quadrate/TechStack/angular-icon.svg?updatedAt=1732694268247"
  },
  {
    name: "Kubernetes",
    icon: "https://ik.imagekit.io/quadrate/TechStack/kubernets.svg?updatedAt=1732694268196"
  },
  {
    name: "Next.js",
    icon: "https://ik.imagekit.io/quadrate/TechStack/nextjs-2.svg?updatedAt=1732694268210"
  },
  {
    name: ".NET Core",
    icon: "https://ik.imagekit.io/quadrate/TechStack/dot-net-core-7.svg?updatedAt=1732694268186"
  },
  {
    name: "Docker",
    icon: "https://ik.imagekit.io/quadrate/TechStack/docker-4.svg?updatedAt=1732694267725"
  },
  {
    name: "TailwindCSS",
    icon: "https://ik.imagekit.io/quadrate/TechStack/tailwind-css-2.svg?updatedAt=1732694716411"
  }
];

const TechCard: React.FC<{ tech: typeof technologies[0]; index: number }> = ({ tech, index }) => {
  return (
    <motion.div
      className="relative aspect-square w-40 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      <div className="absolute inset-0 bg-[#98CCF8]/5 backdrop-blur-xl rounded-3xl shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:bg-[#98CCF8]/10" />
      
      <div className="relative h-full w-full flex flex-col items-center justify-center p-6">
        <div className="relative w-20 h-20 mb-4">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <span className="text-sm font-medium text-center tracking-wide text-[#010000]">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
};

export const TechStack: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container">
        <AnimatedHeading 
          text="Technologies We Use" 
          className="mb-8"
        />
        <div className="relative">
          <motion.div
            className="flex gap-8 py-8"
            animate={{
              x: [-1200, 0],
              transition: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <TechCard key={`row1-${index}`} tech={tech} index={index} />
            ))}
          </motion.div>

          <motion.div
            className="flex gap-8 py-8 mt-8"
            animate={{
              x: [0, -1200],
              transition: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop"
              }
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <TechCard key={`row2-${index}`} tech={tech} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
