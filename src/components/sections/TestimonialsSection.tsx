import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: React.ReactNode;
}

const testimonials: Testimonial[] = [
  {
    quote: "Working with Quadrate Tech Solutions transformed our business. Their innovative solutions helped us achieve remarkable growth.",
    name: "Sarah Johnson",
    title: "CEO, TechCorp",
    avatar: <div className="w-full h-full bg-gradient-to-br from-[#5B7CCA] to-[#373FEC]" />,
  },
  {
    quote: "The team's expertise and dedication to quality delivered results that exceeded our expectations.",
    name: "Michael Chen",
    title: "CTO, InnovateTech",
    avatar: <div className="w-full h-full bg-gradient-to-br from-[#5B7CCA] to-[#373FEC]" />,
  },
  {
    quote: "Their commitment to excellence and innovative approach sets them apart in the industry.",
    name: "Emily Rodriguez",
    title: "Director, FutureScale",
    avatar: <div className="w-full h-full bg-gradient-to-br from-[#5B7CCA] to-[#373FEC]" />,
  },
];

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tr from-[#ECF1F5] via-[#98CCF8]/5 to-[#C0F0F9]/10 py-24">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-gradient-to-bl from-[#98CCF8]/20 via-[#A6ECFA]/10 to-transparent rounded-full transform rotate-45 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-tr from-[#C0F0F9]/20 via-[#98CCF8]/10 to-transparent rounded-full transform -rotate-45 animate-pulse" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-[#040BAB]">
            Client Success Stories
          </h2>
          <p className="text-[#768EB4] text-lg max-w-2xl mx-auto">
            See what our clients have to say about their experience working with us
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#98CCF8]/10 to-[#C0F0F9]/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative p-8 rounded-3xl border border-[#768EB4]/10 bg-white/50 backdrop-blur-sm hover:border-[#5B7CCA]/30 transition-colors duration-300">
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#373FEC]">★</span>
                  ))}
                </div>
                <blockquote className="mb-6 text-[#768EB4]">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[#040BAB]">{testimonial.name}</div>
                    <div className="text-sm text-[#768EB4]">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
