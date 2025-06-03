
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Security First', 'CMS Integration', 'E-commerce Ready'],
      technologies: ['React', 'Node.js', 'Python', 'PHP', 'WordPress', 'Shopify']
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Optimization', 'Push Notifications', 'Offline Functionality'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic']
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that provide excellent experiences.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing', 'Brand Identity', 'Design Systems'],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'After Effects']
    },
    {
      icon: '🚀',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'PPC Campaigns', 'Email Marketing', 'Analytics & Reporting'],
      technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'Mailchimp', 'SEMrush', 'Hootsuite']
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      features: ['Cloud Migration', 'DevOps', 'CI/CD Pipelines', 'Monitoring', 'Scalability', 'Security'],
      technologies: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      icon: '🛡️',
      title: 'Security & Maintenance',
      description: 'Comprehensive security measures and ongoing maintenance.',
      features: ['Security Audits', 'Regular Updates', 'Backup Solutions', 'Performance Monitoring', '24/7 Support', 'Compliance'],
      technologies: ['SSL Certificates', 'Firewalls', 'Monitoring Tools', 'Backup Systems', 'Security Scanning', 'GDPR Compliance']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive strategy and project roadmap tailored to your needs.'
    },
    {
      step: '03',
      title: 'Design',
      description: 'Our designers create beautiful, user-friendly interfaces that align with your brand.'
    },
    {
      step: '04',
      title: 'Development',
      description: 'Our developers bring the designs to life with clean, efficient, and scalable code.'
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Rigorous testing ensures everything works perfectly across all devices and browsers.'
    },
    {
      step: '06',
      title: 'Launch',
      description: 'We deploy your project and provide ongoing support to ensure continued success.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-bold font-poppins mb-6">Our Services</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              We offer comprehensive digital solutions to help your business succeed in the modern digital landscape. From web development to digital marketing, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                                <div className="w-2 h-2 bg-primary-600 rounded-full mr-2"></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a proven process that ensures project success and client satisfaction every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center space-y-4 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold font-poppins text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss your project and see how our services can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600 text-white">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-700">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
