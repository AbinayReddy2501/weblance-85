
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Secure']
    },
    {
      icon: '📱',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS & Android', 'Cross-platform', 'User-friendly', 'Scalable']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that provide excellent user experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Testing']
    },
    {
      icon: '🚀',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and growth.',
      features: ['SEO', 'Social Media', 'Content Marketing', 'Analytics']
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Optimize your digital assets for maximum speed, efficiency, and user satisfaction.',
      features: ['Speed Optimization', 'Code Review', 'Performance Monitoring', 'Scalability']
    },
    {
      icon: '🛡️',
      title: 'Security Solutions',
      description: 'Comprehensive security measures to protect your digital assets and user data.',
      features: ['Data Protection', 'SSL Certificates', 'Security Audits', 'Compliance']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business succeed in the modern digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
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
