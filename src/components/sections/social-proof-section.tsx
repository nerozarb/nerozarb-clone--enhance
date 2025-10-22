"use client";

import { Instagram, TrendingUp, Heart, MessageCircle, Share2 } from 'lucide-react';
import Image from 'next/image';

const instagramPosts = [
  {
    id: 1,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=post1&backgroundColor=262626",
    caption: "🚀 Just helped a Karachi café grow from 800 to 8,000 followers! AI-powered content works.",
    likes: 1247,
    comments: 89,
    shares: 156
  },
  {
    id: 2,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=post2&backgroundColor=1a1a1a",
    caption: "💡 Pro tip: Bilingual content gets 3x more engagement in Pakistan. Here's why...",
    likes: 2891,
    comments: 234,
    shares: 445
  },
  {
    id: 3,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=post3&backgroundColor=0f0f0f",
    caption: "📊 Real results: PKR 150K ad spend → PKR 1.2M revenue. See the full case study!",
    likes: 3456,
    comments: 312,
    shares: 678
  },
  {
    id: 4,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=post4&backgroundColor=171717",
    caption: "🎯 Our AI generates 30+ posts per week. Traditional agencies? 5-10. Speed matters.",
    likes: 1876,
    comments: 145,
    shares: 289
  },
  {
    id: 5,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=post5&backgroundColor=262626",
    caption: "🌙 Ramadan campaign success: 520% sales increase for Desi Threads. Alhamdulillah!",
    likes: 4123,
    comments: 456,
    shares: 892
  },
  {
    id: 6,
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=post6&backgroundColor=1a1a1a",
    caption: "💰 ROI Calculator: See how much you could grow with AI marketing. Link in bio!",
    likes: 2654,
    comments: 198,
    shares: 534
  }
];

const SocialProofSection = () => {
  return (
    <section className="bg-gradient-to-b from-background via-secondary/10 to-background py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full mb-4 border border-pink-500/30">
            <Instagram className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">Follow Our Journey</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-white tracking-tight mb-4">
            See Our Expertise in Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow <a href="https://instagram.com/nerozarb" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">@nerozarb</a> for daily marketing tips, case studies, and behind-the-scenes
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto mb-12">
          {instagramPosts.map((post) => (
            <div 
              key={post.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Post Image */}
              <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5">
                <Image
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4">
                <p className="text-white text-xs text-center mb-4 line-clamp-3">
                  {post.caption}
                </p>
                <div className="flex items-center gap-4 text-white text-xs">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-white" />
                    <span>{(post.likes / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="w-4 h-4" />
                    <span>{post.shares}</span>
                  </div>
                </div>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-white" />
              <p className="text-3xl font-bold text-white">15K+</p>
            </div>
            <p className="text-sm text-muted-foreground">Instagram Followers</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-white" />
              <p className="text-3xl font-bold text-white">8.2%</p>
            </div>
            <p className="text-sm text-muted-foreground">Engagement Rate</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <MessageCircle className="w-5 h-5 text-white" />
              <p className="text-3xl font-bold text-white">2.5K+</p>
            </div>
            <p className="text-sm text-muted-foreground">Monthly Comments</p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Share2 className="w-5 h-5 text-white" />
              <p className="text-3xl font-bold text-white">12K+</p>
            </div>
            <p className="text-sm text-muted-foreground">Monthly Reach</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/nerozarb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-10 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow @nerozarb on Instagram
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Join 15K+ marketers getting daily tips and insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
