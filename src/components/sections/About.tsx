
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="space-y-6 animate-slide-in-left">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
              alt="Team collaboration"
              className="rounded-2xl shadow-lg"
            />
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300&h=200&fit=crop"
                alt="Creative workspace"
                className="rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=300&h=200&fit=crop"
                alt="Team meeting"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold font-poppins text-gray-900">
                We're Passionate About
                <span className="block text-primary-600">Creating Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 5 years of experience, we've helped businesses transform their digital presence and achieve remarkable growth through innovative solutions.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-gray-600">Skilled professionals with diverse expertise in modern technologies.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Quality Focus</h4>
                  <p className="text-gray-600">We deliver high-quality solutions that exceed expectations and drive results.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                  <p className="text-gray-600">Round-the-clock support to ensure your business never stops growing.</p>
                </div>
              </div>
            </div>

            <Button asChild className="bg-primary-600 hover:bg-primary-700">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
