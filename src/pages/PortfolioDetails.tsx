
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PortfolioDetails = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const project = {
    id: 1,
    title: 'E-commerce Platform',
    client: 'TechMart Inc.',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    description: 'A comprehensive e-commerce platform built with modern technologies to provide an exceptional shopping experience.',
    challenge: 'TechMart Inc. needed a scalable e-commerce solution that could handle high traffic volumes while providing a seamless user experience across all devices. The platform needed to integrate with their existing inventory management system and support multiple payment gateways.',
    solution: 'We developed a full-stack e-commerce platform using React for the frontend and Node.js for the backend. The solution includes advanced features like real-time inventory management, personalized recommendations, and a comprehensive admin dashboard.',
    results: [
      '300% increase in online sales',
      '50% reduction in page load times',
      '95% improvement in mobile conversion rates',
      '99.9% uptime since launch'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Redis'],
    duration: '12 weeks',
    team: ['Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'Project Manager'],
    features: [
      'Responsive Design',
      'Real-time Inventory',
      'Payment Integration',
      'Admin Dashboard',
      'User Authentication',
      'Search & Filtering',
      'Product Reviews',
      'Order Tracking'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&h=400&fit=crop'
    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4 animate-fade-in">
              <Link to="/portfolio" className="hover:text-primary-600">Portfolio</Link>
              <span>/</span>
              <span>{project.title}</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 animate-slide-in-left">
                <h1 className="text-4xl font-bold font-poppins text-gray-900 mb-4">
                  {project.title}
                </h1>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="animate-scale-in">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900">Client</h4>
                        <p className="text-gray-600">{project.client}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Category</h4>
                        <p className="text-gray-600">{project.category}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Duration</h4>
                        <p className="text-gray-600">{project.duration}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Team Size</h4>
                        <p className="text-gray-600">{project.team.length} members</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto animate-scale-in">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Challenge */}
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">The Challenge</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {project.challenge}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solution */}
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-6">Our Solution</h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {project.solution}
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Team</h3>
                <div className="space-y-2">
                  {project.team.map((role, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mr-3"></div>
                      <span className="text-gray-600 text-sm">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-12 animate-fade-in">
              Project Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {project.results.map((result, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">📈</span>
                  </div>
                  <p className="text-lg font-semibold text-gray-900">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-12 text-center animate-fade-in">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="rounded-lg shadow-lg animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold font-poppins text-white mb-6">
              Like What You See?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's create something amazing for your business too.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600 text-white">
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-700">
                <Link to="/portfolio">View More Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetails;
