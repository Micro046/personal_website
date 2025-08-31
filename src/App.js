import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate
} from 'react-router-dom';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import ReactGA from 'react-ga';

import theme from './theme';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Blogs from './pages/Blogs';
import Skills from './pages/Skills/Skills';
import Chatbot from './pages/Chatbot';
import ChatbotComponent from './components/Chatbot';
import Seo from './components/Seo';


if (process.env.REACT_APP_TRACKING_ID) {
  ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
}

function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    if (!process.env.REACT_APP_TRACKING_ID) return;
    const page = location.pathname + location.search;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  }, [location]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Router>
          <AnalyticsTracker />
          <Seo 
            title="Hassan Iftikhar | Portfolio"
            description="Data Scientist & AI Researcher specializing in Machine Learning, Deep Learning, and Generative AI solutions."
          />
          <NavBar />
          <Box component="main" sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Box>
          <Footer />
          
          {/* Floating Chatbot Component - appears on all pages */}
          <ChatbotComponent />
        </Router>
      </Box>
    </ThemeProvider>
  );
}




