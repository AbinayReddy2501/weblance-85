
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      author: 'Alex Johnson',
      date: '2024-01-15',
      category: 'Web Development',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Mobile-First Design: Why It Matters More Than Ever',
      excerpt: 'Learn why mobile-first design is crucial for modern websites and how to implement it effectively.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      author: 'Sarah Chen',
      date: '2024-01-12',
      category: 'Design',
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Building Scalable Applications with Modern Architecture',
      excerpt: 'Discover architectural patterns and best practices for building applications that can grow with your business.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      category: 'Development',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'UX Design Principles That Drive Conversions',
      excerpt: 'Learn how strategic UX design decisions can significantly improve your website\'s conversion rates.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      author: 'Emily Davis',
      date: '2024-01-08',
      category: 'UX Design',
      readTime: '6 min read'
    },
    {
      id: 5,
      title: 'The Complete Guide to Digital Marketing in 2024',
      excerpt: 'Everything you need to know about digital marketing strategies that actually work in today\'s landscape.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      author: 'David Wilson',
      date: '2024-01-05',
      category: 'Marketing',
      readTime: '8 min read'
    },
    {
      id: 6,
      title: 'Security Best Practices for Modern Web Applications',
      excerpt: 'Essential security measures every developer should implement to protect their applications and users.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
      author: 'Lisa Thompson',
      date: '2024-01-03',
      category: 'Security',
      readTime: '6 min read'
    }
  ];

  const categories = [
    'All',
    'Web Development',
    'Design',
    'Development',
    'UX Design',
    'Marketing',
    'Security'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl font-bold font-poppins mb-6">Our Blog</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Stay updated with the latest insights, trends, and best practices in web development, design, and digital marketing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? 'default' : 'outline'}
                className={index === 0 ? 'bg-primary-600 hover:bg-primary-700' : ''}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16 animate-scale-in">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                      Featured
                    </span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {blogPosts[0].author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{blogPosts[0].author}</p>
                        <p className="text-gray-500 text-sm">{blogPosts[0].date}</p>
                      </div>
                    </div>
                    <Button asChild>
                      <Link to={`/blog/${blogPosts[0].id}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-semibold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-gray-500 text-xs">{post.date}</p>
                      </div>
                    </div>
                    <Button asChild variant="ghost" size="sm">
                      <Link to={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Never Miss an Update
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter and get the latest insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <Button className="bg-primary-600 hover:bg-primary-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
