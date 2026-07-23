import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Replace this with your actual GA4 Measurement ID (it usually starts with G-)
const TRACKING_ID = "G-RSJL2BPFRD"; 

// Initialize GA4 only once outside the component
if (TRACKING_ID) {
  ReactGA.initialize(TRACKING_ID);
}

export const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Send a pageview on route change if a tracking ID is configured
    if (TRACKING_ID) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location]);

  return null; // This component doesn't render anything
};
