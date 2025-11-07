import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage"; // Import new page
import BlogPostPage from "./pages/BlogPostPage"; // Import new page

// 👇 1. 'ScrollToTop' कंपोनेंट को यहाँ इम्पोर्ट करें
import ScrollToTop from "./components/ScrollToTop"; 

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* 👇 2. <ScrollToTop /> को <BrowserRouter> के ठीक अंदर रखें */}
        <ScrollToTop /> 
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<BlogPage />} /> {/* Add new route */}
          <Route path="/blog/:slug" element={<BlogPostPage />} /> {/* Add new dynamic route */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
