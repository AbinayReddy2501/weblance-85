
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      bio: 'With over 10 years of experience in digital strategy and business development.'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
      bio: 'Creative visionary with expertise in user experience and interface design.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Technical Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      bio: 'Full-stack developer passionate about scalable and efficient solutions.'
    },
    {
      name: 'Emily Davis',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      bio: 'Ensuring projects are delivered on time and exceed client expectations.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-bold font-poppins mb-6">About Deneb</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              We're a passionate team of designers, developers, and strategists dedicated to creating exceptional digital experiences that drive business growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <h2 className="text-4xl font-bold font-poppins text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2019, Deneb started with a simple mission: to help businesses succeed in the digital world through innovative, high-quality solutions. What began as a small team of passionate creators has grown into a full-service digital agency.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that great digital experiences are born from the perfect blend of creativity, technology, and strategy. Every project we undertake is an opportunity to push boundaries and create something truly exceptional.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">150+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.',
                icon: '🚀'
              },
              {
                title: 'Quality',
                description: 'Every project receives our full attention to detail and commitment to excellence.',
                icon: '⭐'
              },
              {
                title: 'Collaboration',
                description: 'We work closely with our clients as partners to achieve shared success.',
                icon: '🤝'
              },
              {
                title: 'Transparency',
                description: 'Open communication and honest feedback drive our client relationships.',
                icon: '💎'
              },
              {
                title: 'Growth',
                description: 'We help our clients grow while continuously improving ourselves.',
                icon: '📈'
              },
              {
                title: 'Impact',
                description: 'We measure success by the positive impact we create for our clients.',
                icon: '🎯'
              }
            ].map((value, index) => (
              <div key={index} className="text-center space-y-4 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get to know the talented individuals who make the magic happen at Deneb.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center space-y-4 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-primary-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 text-sm mt-2">{member.bio}</p>
                </div>
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
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <Button asChild size="lg" className="bg-accent-500 hover:bg-accent-600 text-white">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
