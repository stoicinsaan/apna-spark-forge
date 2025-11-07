import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // useLocation हुक से वर्तमान path को प्राप्त करें
  const { pathname } = useLocation();

  // जब भी pathname बदले (यानी पेज बदले), यह इफ़ेक्ट चलेगा
  useEffect(() => {
    // विंडो को टॉप पर (0, 0) स्क्रॉल करें
    window.scrollTo(0, 0);
  }, [pathname]); // इफ़ेक्ट का dependency array

  // यह कंपोनेंट कुछ भी रेंडर नहीं करता है
  return null;
};

export default ScrollToTop;
