
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications using latest technologies like React, Angular, and Node.js.',
      features: ['Responsive Design', 'E-commerce Sites', 'CMS Development', 'API Integration'],
      price: '₹15,000 - ₹1,50,000'
    },
    {
      icon: '📱',
      title: 'Mobile App Development',
      description: 'Native and hybrid mobile applications for Android and iOS platforms.',
      features: ['Android Apps', 'iOS Apps', 'React Native', 'Flutter Apps'],
      price: '₹25,000 - ₹2,50,000'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and user-friendly designs that convert visitors into customers.',
      features: ['Web Design', 'App Design', 'Logo Design', 'Brand Identity'],
      price: '₹8,000 - ₹80,000'
    },
    {
      icon: '📊',
      title: 'Digital Marketing',
      description: 'Complete digital marketing solutions to grow your business online.',
      features: ['SEO Services', 'Social Media', 'Google Ads', 'Content Marketing'],
      price: '₹10,000 - ₹50,000/month'
    },
    {
      icon: '⚡',
      title: 'WordPress Development',
      description: 'Custom WordPress websites and plugin development for businesses.',
      features: ['Custom Themes', 'Plugin Development', 'WooCommerce', 'Site Optimization'],
      price: '₹5,000 - ₹75,000'
    },
    {
      icon: '🛒',
      title: 'E-commerce Solutions',
      description: 'Complete online store setup with payment gateway integration.',
      features: ['Shopify Stores', 'WooCommerce', 'Payment Gateway', 'Inventory Management'],
      price: '₹20,000 - ₹2,00,000'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">
            Freelance Services in Hyderabad
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional freelance services at competitive rates. Get quality work delivered on time by experienced professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="text-primary-600 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
