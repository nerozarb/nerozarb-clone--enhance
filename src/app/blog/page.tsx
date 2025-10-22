import { Metadata } from 'next';
import Navbar from '@/components/sections/navbar';
import Footer from '@/components/sections/footer';
import BlogSection from '@/components/sections/blog-section';
import LiveChatWidget from '@/components/ui/live-chat-widget';

export const metadata: Metadata = {
  title: 'Blog & Resources - Nerozarb | Digital Marketing Insights Pakistan',
  description: 'Expert insights on AI-powered digital marketing, social media growth strategies, and Facebook ads optimization for Pakistani businesses. Learn how to grow your brand with proven tactics.',
  keywords: 'digital marketing Pakistan, social media marketing tips, Facebook ads Pakistan, Instagram growth, AI marketing, content creation, Urdu captions',
  openGraph: {
    title: 'Blog & Resources - Nerozarb',
    description: 'Expert digital marketing insights for Pakistani businesses',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24">
        <BlogSection />
      </main>
      <Footer />
      <LiveChatWidget />
    </div>
  );
}