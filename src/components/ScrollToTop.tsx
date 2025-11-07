import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * This component scrolls the window to the top every time the page changes.
 * It should be placed inside <BrowserRouter> but outside <Routes>.
 */
const ScrollToTop = () => {
  // The useLocation() hook gets the current URL's pathname (e.g., /blog/my-post)
  const { pathname } = useLocation();

  // The useEffect hook runs when the [pathname] changes
  useEffect(() => {
    // Scroll the window immediately to the top (0, 0)
    window.scrollTo(0, 0);
  }, [pathname]); // This effect will only run when 'pathname' changes

  // This component doesn't render anything to the screen, so return null
  return null;
};

export default ScrollToTop;
