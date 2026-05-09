// Import and initialize Vercel Speed Insights
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
// This will automatically track Web Vitals and performance metrics
injectSpeedInsights({
  // Enable debug mode in development (default: true)
  debug: false
});
