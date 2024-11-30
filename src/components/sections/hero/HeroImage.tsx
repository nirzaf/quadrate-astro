import { motion } from 'framer-motion';
import { useState } from 'react';

interface HeroImageProps {
  src: string;
  alt: string;
}

const HeroImage = ({ src, alt }: HeroImageProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return null;
  }

  return (
    <motion.div
      className="relative mx-auto max-w-xl lg:mx-0"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full rounded-lg shadow-2xl"
        onError={handleImageError}
      />
    </motion.div>
  );
};

export default HeroImage;
