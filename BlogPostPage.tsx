import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft } from "lucide-react";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import sanityClient, { urlFor } from "@/lib/sanityClient"; // ✅ Correct import
import { PortableText } from "@portabletext/react"; // ✅ For rendering rich text
import { Skeleton } from "@/components/ui/skeleton"; // ✅ For loading state

// ✅ TypeScript type for a single post
interface Post {
  title: string;
  publishedAt: string;
  author?: string;
  category?: string;
  imageUrl?: any;
  content: any[];
}

// ✅ PortableText custom renderers (for styled blocks)
const ptComponents = {
  types: {
    image: ({ value }: any) => (
      <img
        src={urlFor(value).url()}
        alt={value.alt || "Blog post image"}
        className="rounded-lg my-8"
      />
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl font-bold mt-12 mb-4 gradient-text">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold mt-10 mb-4 gradient-text">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-3 text-lg text-muted-foreground mb-8 pl-4">
        {children}
      </ul>
    ),
    li: ({ children }: any) => (
      <li className="text-lg text-muted-foreground">{children}</li>
    ),
  },
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    // ✅ Correct GROQ query for single post
    const query = `*[_type == "post" && slug.current == $slug][0] {
      title,
      publishedAt,
      "author": author->name,
      "category": category->title,
      "imageUrl": mainImage,
      "content": body
    }`;

    sanityClient
      .fetch(query, { slug })
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setIsLoading(false);
      });
  }, [slug]);

  // ✅ Helper for date format
  const formatDate = (dateString: string) => {
    if (!dateString) return "Date not set";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // ✅ Loading skeleton UI
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4 py-32 max-w-4xl">
          <Skeleton className="h-6 w-1/4 mb-8" />
          <Skeleton className="h-10 w-3/4 mb-4" />
          <Skeleton className="h-10 w-1/2 mb-6" />
          <Skeleton className="h-6 w-1/3 mb-12" />
          <Skeleton className="w-full h-96 rounded-2xl mb-12" />
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-full mb-4" />
          <Skeleton className="h-6 w-5/6" />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    );
  }

  // ✅ If post not found
  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="container mx-auto px-4 py-32 max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            This post might be deleted or the link is incorrect.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    );
  }

  // ✅ Render the post
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-32 max-w-4xl">
        <article className="animate-fade-in">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center text-primary hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Header section */}
          <header className="mb-12">
            <Badge
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/30 mb-4"
            >
              {post.category || "General"}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author || "Apna Growth Media"}</span>
              </div>
            </div>
          </header>

          {/* Feature image */}
          <img
            src={
              post.imageUrl
                ? urlFor(post.imageUrl).width(1200).height(600).url()
                : "https://via.placeholder.com/1200x600.png?text=No+Image"
            }
            alt={post.title}
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl mb-12 shadow-lg"
          />

          {/* Rich text body */}
          <div className="prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-headings:gradient-text">
            <PortableText value={post.content} components={ptComponents} />
          </div>

          {/* CTA footer */}
          <div className="text-center mt-16 py-12 border-t border-border">
            <h3 className="text-3xl font-bold mb-4">
              Ready to <span className="gradient-text">Grow</span> Your
              Business?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Start your 7-day free trial today. No credit card required.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/#contact">Start Your Free Trial</a>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default BlogPostPage;
