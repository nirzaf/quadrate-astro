import { motion } from "framer-motion";
import { CheckCircle2, Code2, Gem, HeartHandshake, Lightbulb, Rocket } from "lucide-react";

const features = [
  {
    title: "Innovation First",
    description: "We stay ahead of the curve with cutting-edge technologies and innovative solutions.",
    icon: Lightbulb,
    color: "from-yellow-500/10 to-amber-500/10",
    iconColor: "text-yellow-500",
  },
  {
    title: "Expert Team",
    description: "Our team of seasoned professionals brings years of industry expertise to every project.",
    icon: Code2,
    color: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-[#0607E1]",
  },
  {
    title: "Quality Focused",
    description: "We maintain the highest standards of quality in every solution we deliver.",
    icon: Gem,
    color: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-500",
  },
  {
    title: "Client Success",
    description: "Your success is our priority. We're committed to delivering results that matter.",
    icon: Rocket,
    color: "from-red-500/10 to-rose-500/10",
    iconColor: "text-red-500",
  },
  {
    title: "Reliable Support",
    description: "Count on our dedicated support team for timely assistance and solutions.",
    icon: CheckCircle2,
    color: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-500",
  },
  {
    title: "Partnership Approach",
    description: "We build lasting partnerships by understanding and growing with your business.",
    icon: HeartHandshake,
    color: "from-indigo-500/10 to-violet-500/10",
    iconColor: "text-indigo-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-[#0607E1]/5 px-4 py-1.5 mb-6"
          >
            <span className="text-sm font-semibold text-[#0607E1]">
              Why Choose Us
            </span>
          </motion.div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            We combine expertise with innovation
          </h2>
          <p className="text-lg text-gray-600">
            Discover why leading businesses trust us to deliver exceptional results
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
                <div className="relative h-full p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:border-gray-300 transition-colors duration-300">
                  <div className="space-y-6">
                    <div className={`inline-block rounded-2xl bg-gradient-to-br ${feature.color} p-3`}>
                      <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#0607E1] to-violet-500 group-hover:w-full transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
