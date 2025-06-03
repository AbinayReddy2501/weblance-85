
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      period: 'per project',
      description: 'Perfect for small businesses and startups',
      features: [
        'Responsive Website Design',
        'Basic SEO Optimization',
        'Contact Form Integration',
        '3 Revisions Included',
        '1 Month Support',
        'Mobile Optimization'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: 'per project',
      description: 'Ideal for growing businesses',
      features: [
        'Custom Web Application',
        'Advanced SEO & Analytics',
        'CMS Integration',
        'E-commerce Functionality',
        'Unlimited Revisions',
        '6 Months Support',
        'Performance Optimization',
        'Security Features'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large-scale projects and enterprises',
      features: [
        'Full-Stack Development',
        'Custom Integrations',
        'Scalable Architecture',
        'Advanced Security',
        'Priority Support',
        '1 Year Maintenance',
        'Training & Documentation',
        'Dedicated Project Manager'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our expert guidance and quality assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative hover:shadow-lg transition-all duration-300 animate-scale-in ${
              plan.popular ? 'border-primary-600 shadow-lg scale-105' : ''
            }`} style={{ animationDelay: `${index * 100}ms` }}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary-600">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className={`w-full ${
                  plan.popular 
                    ? 'bg-primary-600 hover:bg-primary-700' 
                    : 'bg-gray-900 hover:bg-gray-800'
                }`}>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need something custom? We'd love to hear about your project.
          </p>
          <Button asChild variant="outline" className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
            <Link to="/contact">Contact Us for Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
