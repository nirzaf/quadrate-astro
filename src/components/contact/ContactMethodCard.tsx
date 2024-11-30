import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { type ContactMethod } from '@/data/contactData';

interface ContactMethodCardProps {
  method: ContactMethod;
  isActive: boolean;
  onClick: () => void;
  index: number;
}

const ContactMethodCard = ({ method, isActive, onClick, index }: ContactMethodCardProps) => {
  const Icon = method.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: index * 0.15
        }
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 10 
        }
      }}
      whileTap={{ scale: 0.98 }}
      className="h-full"
    >
      <Card
        className={`relative h-[280px] w-full p-8 cursor-pointer transition-all duration-300 flex flex-col ${
          isActive 
            ? 'border-[#0607E1] shadow-xl bg-[#0607E1]/5' 
            : 'hover:shadow-lg hover:border-[#0607E1]/50'
        }`}
        onClick={onClick}
      >
        <motion.div 
          className={`inline-flex p-4 rounded-xl ${
            isActive ? 'bg-[#0607E1]/10' : method.color + ' bg-opacity-10'
          }`}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
        >
          <Icon className={`h-8 w-8 ${
            isActive ? 'text-[#0607E1]' : method.color.replace('bg-', 'text-')
          }`} />
        </motion.div>
        
        <motion.div
          className="flex-grow flex flex-col justify-between mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { delay: index * 0.15 + 0.2 }
          }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-3">{method.title}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed line-clamp-2">{method.description}</p>
          </div>

          <motion.div
            className="self-end mt-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ 
              x: 5,
              transition: { 
                type: "spring",
                stiffness: 400,
                damping: 10
              }
            }}
          >
            <ArrowRight className={`h-6 w-6 ${
              isActive ? 'text-[#0607E1]' : 'text-[#0607E1]/60'
            } transition-colors`} />
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default ContactMethodCard;
