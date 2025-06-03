
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const HireUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    timeline: '',
    budget: '',
    description: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll review your project and get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      timeline: '',
      budget: '',
      description: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    {
      title: 'Full-Stack Development',
      description: 'Complete web application development from frontend to backend',
      features: ['Custom Web Applications', 'API Development', 'Database Design', 'Cloud Deployment'],
      timeline: '8-16 weeks',
      startingPrice: '$15,000'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      features: ['iOS & Android Apps', 'Cross-platform Solutions', 'App Store Deployment', 'Maintenance & Updates'],
      timeline: '10-20 weeks',
      startingPrice: '$20,000'
    },
    {
      title: 'UI/UX Design',
      description: 'Complete design solutions from research to implementation',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Design Systems'],
      timeline: '4-8 weeks',
      startingPrice: '$8,000'
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies and execution',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting'],
      timeline: 'Ongoing',
      startingPrice: '$3,000/month'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-bold font-poppins mb-6">Hire Our Team</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Ready to bring your vision to life? Our expert team is here to help you create exceptional digital experiences that drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">
              Our Service Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our comprehensive service packages designed to meet your specific needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                      <p className="text-gray-600 mt-2">{service.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-600">{service.startingPrice}</div>
                      <div className="text-sm text-gray-500">{service.timeline}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
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

      {/* Hiring Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">
                Let's Start Your Project
              </h2>
              <p className="text-lg text-gray-600">
                Tell us about your project and we'll provide you with a detailed proposal and timeline.
              </p>
            </div>

            <Card className="shadow-lg animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900">Project Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                      >
                        <option value="">Select project type</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-development">Mobile Development</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="digital-marketing">Digital Marketing</option>
                        <option value="full-service">Full Service</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-months-plus">6+ months</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-600"
                      >
                        <option value="">Select budget</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-plus">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      id="description"
                      name="description"
                      required
                      rows={6}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Please describe your project in detail including goals, features, target audience, and any specific requirements..."
                    />
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">What happens next?</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• We'll review your project details within 24 hours</li>
                      <li>• Schedule a consultation call to discuss your needs</li>
                      <li>• Provide a detailed proposal with timeline and pricing</li>
                      <li>• Start working on your project once approved</li>
                    </ul>
                  </div>

                  <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700" size="lg">
                    Submit Project Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HireUs;
