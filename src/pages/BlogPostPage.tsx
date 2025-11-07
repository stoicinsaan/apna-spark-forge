import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft } from "lucide-react";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";

// This is also mock data. The real data will be fetched from your CMS based on the "slug".
const mockPostContent = {
  title: "Why a 7-Day Free Trial is Essential in Digital Marketing",
  date: "November 7, 2025",
  author: "Apna Growth Media",
  category: "Digital Marketing",
  imageUrl: "https://via.placeholder.com/1200x600.png?text=Blog+Header+Image",
  content: `
    <p class="text-lg text-muted-foreground mb-6 leading-relaxed">
      In the world of digital marketing, building trust is one of the hardest tasks. 
      Every agency makes big promises, but who actually delivers? This is why we introduced the '7-Day Free Trial'. 
      It's not just an offer; it's our confidence.
    </p>

    <h2 class="text-3xl font-bold mt-12 mb-4 gradient-text">A Risk-Free Start</h2>
    <p class="text-lg text-muted-foreground mb-6 leading-relaxed">
      With our 7-day trial, you get to try our services without any credit card information. 
      You see how our team works, what our strategies are, and what we can do for your business.
    </p>

    <ul class="list-disc list-inside space-y-3 text-lg text-muted-foreground mb-8 pl-4">
      <li><strong>Transparency:</strong> You see exactly what we're doing for you.</li>
      <li><strong>No Commitment:</strong> If you're not happy, you can walk away after 7 days, no questions asked.</li>
      <li><strong>Real Results:</strong> We don't just talk; we show you what growth looks like in 7 days.</li>
    </ul>

    <h2 class="text-3xl font-bold mt-12 mb-4 gradient-text">How Does It Work?</h2>
    <p class="text-lg text-muted-foreground mb-6 leading-relaxed">
      Signing up is easy. Just <a href="/#contact" class="text-primary hover:underline">contact us</a>, 
      we'll discuss your goals, and we'll start your 7-day free trial.
    </p>
  `
};

const BlogPostPage = () => {
  const { slug } = useParams();

  // You would use the 'slug' to fetch data from your CMS here
  // For now, we are just using the mock data
  const post = mockPostContent; 

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-32 max-w-4xl">
        <article className="animate-fade-in">
          {/* Back Button */}
          <Link to="/blog" className="mb-8 inline-flex items-center text-primary hover:underline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Post Header */}
          <header className="mb-12">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/30 mb-4">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>
          </header>

          {/* Post Image */}
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-auto max-h-[500px] object-cover rounded-2xl mb-12 shadow-lg"
          />

          {/* Post Content (Read-only) */}
          {/* When you get data from a CMS, 'content' will be an HTML string.
              'dangerouslySetInnerHTML' is used to render it.
          */}
          <div
            className="prose prose-invert prose-lg max-w-none prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-headings:gradient-text"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* No Comment Section as requested */}

          {/* CTA Button */}
          <div className="text-center mt-16 py-12 border-t border-border">
            <h3 className="text-3xl font-bold mb-4">
              Ready to <span className="gradient-text">Grow</span> Your Business?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Start your 7-day free trial today. No credit card required.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/#contact">
                Start Your Free Trial
              </a>
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
