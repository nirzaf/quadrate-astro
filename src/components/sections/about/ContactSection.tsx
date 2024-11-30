import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section className="container py-12 sm:py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <Card className="p-8 bg-muted/50">
          <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">
            Contact us today to discuss your project and discover how we can help your business grow.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 mb-8">
            <div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-sm text-muted-foreground">
                19/2/9, Market Complex,<br />
                Matale Road, Akurana,<br />
                Kandy: 20850
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-sm text-muted-foreground">
                Phone: +94814242615<br />
                Email: info@quadrate.lk
              </p>
            </div>
          </div>
          <Button className="group">
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Card>
      </motion.div>
    </section>
  );
};
