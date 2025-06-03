
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 bg-accent-500 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-32 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold font-poppins leading-tight">
                Top Freelancers in
                <span className="block text-accent-500">Hyderabad</span>
              </h1>
              <p className="text-xl text-primary-100 leading-relaxed max-w-lg">
                Connect with skilled freelancers in Hyderabad for web development, mobile apps, design, and digital marketing. Quality work at competitive rates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600 text-white font-semibold">
                <Link to="/hire-us">
                  Hire Freelancers
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-700">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-500">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500">200+</div>
                <div className="text-primary-200 text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500">100+</div>
                <div className="text-primary-200 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-500">₹5L+</div>
                <div className="text-primary-200 text-sm">Revenue Generated</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Freelancers working in Hyderabad"
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-white p-4 rounded-lg shadow-lg animate-bounce">
                <div className="text-2xl">🇮🇳</div>
                <div className="text-sm font-semibold text-gray-700">Made in India</div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg animate-bounce delay-1000">
                <div className="text-2xl">💰</div>
                <div className="text-sm font-semibold text-gray-700">Best Rates</div>
              </div>
              <div className="absolute top-1/2 -right-12 bg-accent-500 text-white p-4 rounded-lg shadow-lg animate-bounce delay-500">
                <div className="text-2xl">⚡</div>
                <div className="text-sm font-semibold">Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
