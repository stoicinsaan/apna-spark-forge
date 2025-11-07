import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FloatingCTA from "@/components/FloatingCTA";

// This is mock data. Later, you will fetch this from your CMS.
const mockPosts = [
  {
    slug: "why-7-day-free-trial-is-essential",
    title: "Why a 7-Day Free Trial is Essential in Digital Marketing",
    date: "November 7, 2025",
    category: "Digital Marketing",
    excerpt: "Start risk-free with our 7-day free trial. See how our strategies can transform your business before you commit...",
    imageUrl: "https://via.placeholder.com/600x400.png?text=Blog+Post+Image" // Placeholder image
  },
  {
    slug: "5-local-seo-tips",
    title: "5 Essential Local SEO Tips for Businesses in Bijnor & Ludhiana",
    date: "November 6, 2025",
    category: "SEO",
    excerpt: "Reach your local customers with Local SEO (GMB). Learn how small businesses can boost their visibility and attract more clients...",
    imageUrl: "https://via.placeholder.com/600x400.png?text=SEO+Tips" // Placeholder image
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-32">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Apna Growth <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fresh insights and tips on digital marketing, SEO, and business growth.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="group">
              <Card className="bg-card border-border rounded-2xl overflow-hidden card-hover h-full flex flex-col">
                <div className="overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-
