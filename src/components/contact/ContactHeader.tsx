import { motion } from 'framer-motion';

const ContactHeader = () => {
  return (
    <motion.div 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-4">
        Let's Create Something
        <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"> Amazing</span>
      </h1>
      <p className="text-muted-foreground text-lg">
        Choose how you'd like to connect with us
      </p>
    </motion.div>
  );
};

export default ContactHeader;
