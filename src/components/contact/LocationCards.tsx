import { type FC } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { lazy, Suspense } from 'react';

const MapEmbed = lazy(() => import('./MapEmbed'));

interface Location {
  title: string;
  address: string;
  mapUrl: string;
}

const locations: Location[] = [
  {
    title: 'Al MAMOORA Branch',
    address: 'Dubai, United Arab Emirates',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7390776.694315359!2d41.75165042500002!3d25.2444119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45d1002d1f29b5%3A0xf16439d8460b5b7f!2sQuadrate%20Tech%20Solutions%20-%20Al%20MAMOORA%20Branch!5e0!3m2!1sen!2sae!4v1732952488753!5m2!1sen!2sae'
  },
  {
    title: 'Doha Branch',
    address: 'Doha, Qatar',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7390776.694315359!2d41.75165042500002!3d25.2444119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db62bf10ec0f%3A0x2345926a5113cbd5!2sQuadrate%20Tech%20Solutions%20-%20Doha!5e0!3m2!1sen!2sae!4v1732952507587!5m2!1sen!2sae'
  },
  {
    title: 'Sri Lanka Branch',
    address: 'Colombo, Sri Lanka',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8103761.539122115!2d70.86233172500002!3d7.363445500000023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25903d9ba7603%3A0x3bd657d71032e35a!2sQuadrate%20Tech%20Solutions!5e0!3m2!1sen!2sae!4v1732952523771!5m2!1sen!2sae'
  }
];

const LocationCards: FC = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Global Presence</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <motion.div
            key={location.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: index * 0.2,
                duration: 0.5
              }
            }}
            whileHover={{ 
              scale: 1.02,
              transition: {
                duration: 0.3,
                ease: "easeOut"
              }
            }}
            className="h-full relative group"
          >
            {/* Animated border background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0607E1] via-[#0A25C9] to-[#0B48D0] rounded-2xl opacity-75 group-hover:opacity-100 transition duration-300 blur-sm group-hover:blur"></div>
            
            {/* Card content */}
            <Card className="relative h-full overflow-hidden bg-white dark:bg-gray-900 rounded-xl">
              <div className="relative">
                <div className="aspect-video w-full overflow-hidden">
                  <Suspense fallback={
                    <div className="w-full h-full bg-gray-100 dark:bg-gray-800 animate-pulse" />
                  }>
                    <MapEmbed
                      src={location.mapUrl}
                      title={location.title}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </Suspense>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#0607E1] mb-2 group-hover:text-[#0A25C9] transition-colors duration-300">
                    {location.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{location.address}</p>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#0607E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#0607E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#0607E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#0607E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LocationCards;
