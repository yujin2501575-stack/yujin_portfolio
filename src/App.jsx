import React from 'react';
import Intro from './components/Intro';
import Profile from './components/Profile';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Navigation (Simple Glass Overlay) */}
      <nav style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        padding: '24px 40px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        zIndex: 50,
        backgroundColor: 'rgba(15, 23, 42, 0.2)',
        backdropFilter: 'blur(8px)'
      }}>
        <div style={{ fontWeight: 800, fontSize: '1.5rem', fontFamily: 'Outfit' }}>HONG.</div>
        <div style={{ display: 'flex', gap: '30px', fontWeight: 500 }}>
          <a href="#home" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a>
          <a href="#profile" style={{ color: 'inherit', textDecoration: 'none' }}>Profile</a>
          <a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a>
        </div>
      </nav>

      <main>
        <Intro />
        <Profile />
        <ProjectList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
