import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FloatingCTA from "@/components/FloatingCTA";
import sanityClient from "@/lib/sanityClient"; // Import Sanity client
import { urlFor } from "@/lib/utils"; // Import our new image helper
import { Skeleton } from "@/components/ui/skeleton"; // For loading state

// Define the type for our Post data
interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  imageUrl: string;
}

const BlogPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This is the GROQ query to fetch ALL posts from Sanity
    const query = `*[_type == "post"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      "category": category->title,
      "imageUrl": mainImage,
      excerpt,
      "date": publishedAt
    }`;

    sanityClient.fetch(query)
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  // Helper to format the date
  const formatDate = (dateString: string) => {
    if (!dateString) return "Date not set";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Loading Skeletons
  const renderSkeletons = () => (
    [...Array(3)].map((_, i) => (
      <div key={i} className="flex flex-col space-y-3">
        <Skeleton className="h-48 w-full rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    ))
  );

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
          {isLoading ? (
            renderSkeletons()
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <Link to={`/blog/${post.slug}`} key={post.slug} className="group">
                <Card className="bg-card border-border rounded-2xl overflow-hidden card-hover h-full flex flex-col">
                  <div className="overflow-hidden">
                    <img
                      src={post.imageUrl ? urlFor(post.imageUrl).width(600).height(400).url() : "https://via.placeholder.com/600x400.png?text=No+Image"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30">
                        {post.category || "General"}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
                    </div>
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <p className="col-span-3 text-center text-muted-foreground">No posts found. Go to your Sanity Studio to add one!</p>
          )}
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default BlogPage;
