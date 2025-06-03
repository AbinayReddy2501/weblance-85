
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'Modern e-commerce solution with advanced features',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'TechMart Inc.'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      description: 'Secure and user-friendly banking application',
      technologies: ['React Native', 'Firebase', 'Plaid API'],
      client: 'SecureBank'
    },
    {
      id: 3,
      title: 'Restaurant Brand Identity',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      description: 'Complete brand identity for luxury restaurant',
      technologies: ['Figma', 'Adobe Creative Suite', 'Brand Guidelines'],
      client: 'Bella Cucina'
    },
    {
      id: 4,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      description: 'Comprehensive fitness and health tracking application',
      technologies: ['Flutter', 'Firebase', 'HealthKit', 'Google Fit'],
      client: 'FitLife Pro'
    },
    {
      id: 5,
      title: 'Corporate Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Professional corporate website with CMS',
      technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS'],
      client: 'Innovation Corp'
    },
    {
      id: 6,
      title: 'Travel App UI Design',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop',
      description: 'Beautiful and intuitive travel application design',
      technologies: ['Figma', 'Prototyping', 'User Research'],
      client: 'Wanderlust Travel'
    },
    {
      id: 7,
      title: 'SaaS Dashboard',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Analytics dashboard for SaaS platform',
      technologies: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
      client: 'DataInsights'
    },
    {
      id: 8,
      title: 'Real Estate App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      description: 'Property search and management application',
      technologies: ['React Native', 'MapBox', 'AWS', 'GraphQL'],
      client: 'PropertyHub'
    },
    {
      id: 9,
      title: 'Fashion Brand Website',
      category: 'design',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      description: 'Luxury fashion brand website design',
      technologies: ['Adobe XD', 'Photoshop', 'Shopify'],
      client: 'Luxe Fashion'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'design', label: 'UI/UX Design' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-bold font-poppins mb-6">Our Portfolio</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Explore our latest projects and see how we've helped businesses across various industries achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                variant={activeFilter === filter.key ? 'default' : 'outline'}
                className={activeFilter === filter.key ? 'bg-primary-600 hover:bg-primary-700' : ''}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div key={item.id} className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                      <Link to={`/portfolio/${item.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary-600 font-medium">{item.client}</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full capitalize">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="text-xs text-gray-500">+{item.technologies.length - 3} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found for the selected category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold font-poppins text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's create something amazing together. Contact us today to discuss your project.
            </p>
            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600 text-white">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
