
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const BlogDetails = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const post = {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    content: `
      <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will shape how we build and interact with web applications. In this comprehensive guide, we'll explore the most significant trends that developers and businesses should be aware of.</p>

      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing the way we approach web development. From code generation to automated testing, AI tools are becoming indispensable for modern developers. GitHub Copilot, ChatGPT, and other AI assistants are already helping developers write more efficient code faster than ever before.</p>

      <h2>2. Progressive Web Apps (PWAs)</h2>
      <p>Progressive Web Apps continue to gain traction as they offer the best of both web and mobile app worlds. PWAs provide offline functionality, push notifications, and app-like experiences while being accessible through web browsers. Major companies like Twitter, Starbucks, and Pinterest have already adopted PWAs with great success.</p>

      <h2>3. WebAssembly (WASM)</h2>
      <p>WebAssembly is enabling high-performance applications to run in web browsers at near-native speed. This technology opens up possibilities for complex applications like video editors, games, and scientific simulations to run directly in the browser without compromising performance.</p>

      <h2>4. Headless Architecture</h2>
      <p>The headless approach to web development is gaining popularity as it provides greater flexibility and scalability. By decoupling the frontend from the backend, developers can create more dynamic and personalized user experiences while maintaining better performance and security.</p>

      <h2>5. Low-Code/No-Code Platforms</h2>
      <p>While traditional coding remains essential, low-code and no-code platforms are democratizing web development. These tools enable non-technical users to create functional web applications while allowing developers to focus on more complex problems.</p>

      <h2>Conclusion</h2>
      <p>The future of web development is bright and full of exciting possibilities. By staying informed about these trends and continuously learning new technologies, developers can create more innovative, efficient, and user-friendly web applications. The key is to embrace change while maintaining focus on fundamental principles like user experience, performance, and accessibility.</p>
    `,
    author: 'Alex Johnson',
    date: '2024-01-15',
    category: 'Web Development',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    tags: ['Web Development', 'AI', 'PWA', 'WebAssembly', 'Trends']
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Mobile-First Design: Why It Matters More Than Ever',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop',
      category: 'Design'
    },
    {
      id: 3,
      title: 'Building Scalable Applications with Modern Architecture',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop',
      category: 'Development'
    },
    {
      id: 4,
      title: 'UX Design Principles That Drive Conversions',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop',
      category: 'UX Design'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Breadcrumb */}
      <section className="pt-24 pb-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500 max-w-4xl mx-auto animate-fade-in">
            <Link to="/blog" className="hover:text-primary-600">Blog</Link>
            <span>/</span>
            <span>{post.category}</span>
            <span>/</span>
            <span className="truncate">{post.title}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold font-poppins text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{post.author}</p>
                  <p className="text-gray-500 text-sm">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto animate-scale-in">
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3 animate-slide-in-left">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 cursor-pointer transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="animate-fade-in">
                <div className="sticky top-24 space-y-8">
                  {/* Share */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Share Article</h4>
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm">Twitter</Button>
                      <Button variant="outline" size="sm">LinkedIn</Button>
                      <Button variant="outline" size="sm">Facebook</Button>
                    </div>
                  </div>

                  {/* Newsletter */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Stay Updated</h4>
                    <p className="text-gray-600 text-sm mb-4">Get the latest insights delivered to your inbox.</p>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-600"
                      />
                      <Button className="w-full bg-primary-600 hover:bg-primary-700" size="sm">
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-12 text-center animate-fade-in">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <div key={relatedPost.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-4 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <Button asChild variant="ghost" size="sm">
                      <Link to={`/blog/${relatedPost.id}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetails;
