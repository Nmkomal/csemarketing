
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar, Clock, ArrowRight, Search as SearchIcon } from 'lucide-react';
import { Button } from './Button';

export const BlogPage: React.FC = () => {
  const featured = BLOG_POSTS[0];
  const others = BLOG_POSTS.slice(1);

  return (
    <div className="bg-white pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 mb-20 text-center lg:text-left">
        <h4 className="text-yellow-600 font-black uppercase tracking-[0.3em] text-sm mb-6">Our Blog</h4>
        <h1 className="text-5xl md:text-8xl font-heading font-black mb-10 leading-[1.1]">
          Marketing <br />
          <span className="text-yellow-500">Tips & Tricks</span>
        </h1>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <p className="text-2xl text-gray-500 max-w-2xl font-medium">
            Learn simple ways to improve your marketing, SEO, and social media game.
          </p>
          <div className="relative w-full lg:w-96">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-12 pr-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-yellow-400 transition-colors"
            />
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-6 mb-24">
        <div className="group relative bg-black rounded-[60px] overflow-hidden grid lg:grid-cols-2 gap-0 shadow-2xl">
          <div className="aspect-[16/10] lg:aspect-auto">
            <img 
              src={featured.image} 
              alt={featured.title} 
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <span className="inline-block px-4 py-1 bg-yellow-400 text-black text-xs font-black uppercase tracking-widest rounded-full mb-8 w-fit">
              Latest Post • {featured.category}
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-8 leading-tight group-hover:text-yellow-400 transition-colors">
              {featured.title}
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed">
              {featured.summary}
            </p>
            <div className="flex items-center space-x-6 text-sm font-bold text-gray-500 uppercase tracking-widest mb-12">
              <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {featured.date}</span>
              <span className="flex items-center"><Clock className="w-4 h-4 mr-2" /> 5 min read</span>
            </div>
            <Button variant="primary" size="lg" className="w-fit rounded-2xl">Read More</Button>
          </div>
        </div>
      </section>

      {/* Category List */}
      <section className="container mx-auto px-6 mb-16">
        <div className="flex flex-wrap gap-3">
          {['All Posts', 'Instagram Tips', 'SEO Guides', 'Ads Strategy', 'Business Growth'].map(cat => (
            <button key={cat} className="px-6 py-2 bg-gray-50 hover:bg-yellow-400 hover:text-black rounded-full text-sm font-bold transition-all">
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Posts Grid */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-3 gap-12">
          {others.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-8 shadow-md">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="px-2">
                <span className="text-yellow-600 font-black text-xs uppercase tracking-widest mb-4 block">{post.category}</span>
                <h3 className="text-2xl font-black mb-4 leading-tight group-hover:text-yellow-600 transition-colors">{post.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-6 line-clamp-3">{post.summary}</p>
                <div className="flex items-center text-black font-black text-xs uppercase tracking-widest group/link">
                  Read Article 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6">
        <div className="bg-yellow-400 rounded-[60px] p-16 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-black/5 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-heading font-black text-black mb-8 leading-tight">
              Join Our Newsletter
            </h2>
            <p className="text-xl text-black/60 mb-12">Get simple marketing tips delivered to your email every week.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-8 py-5 bg-white rounded-2xl focus:outline-none focus:ring-4 focus:ring-black/5 transition-all"
              />
              <Button variant="secondary" size="lg" className="rounded-2xl h-18 px-12">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
