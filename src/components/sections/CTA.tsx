
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent-500 rounded-full mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white rounded-full mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white mb-6">
            Ready to Transform Your
            <span className="block text-accent-500">Digital Presence?</span>
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Let's work together to create something amazing. Get in touch today and let's discuss how we can help your business grow and succeed in the digital world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600 text-white font-semibold">
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-700">
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-500">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">48h</div>
              <div className="text-primary-200">Quick Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">100%</div>
              <div className="text-primary-200">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">24/7</div>
              <div className="text-primary-200">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
