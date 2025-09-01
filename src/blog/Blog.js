import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from '../shared-theme/AppTheme';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPost from './components/BlogPost';
import MolecularViewerPage from './components/Molecular/MolecularViewerPage';
import AboutMe from './aboutme/aboutme';


export default function Blog(props) {
  
  return (
    <AppTheme {...props}>
      <CssBaseline  />
      <Router basename="/rafael.a.diazcruz-personal">
        <Navigation />
        <Container
          maxWidth="lg"
          component="main"
          sx={{ display: 'flex', flexDirection: 'column', my: 16, backdropFilter: 'blur(4px)' }}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/blog" element={<BlogPost />} />
            <Route path="/molecular" element={<MolecularViewerPage />} />
            <Route path='/aboutme' element={<AboutMe />} />
          </Routes>
        </Container>
      </Router>
      <Footer />
    </AppTheme>
  );
}
  