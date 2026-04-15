import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: 'rgba(15, 23, 42, 0.5)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', padding: '60px 0' }}>
      <div className="section-container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px' }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Hong Gildong</h3>
          <p style={{ color: '#64748b', maxWidth: '300px' }}>
            새로운 가능성을 디자인하고 기술로 현실화합니다.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '80px' }}>
          <div>
            <h4 style={{ color: '#fff', marginBottom: '20px', fontSize: '1rem' }}>Sitemap</h4>
            <ul style={{ listStyle: 'none', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#home" style={{ color: 'inherit', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#profile" style={{ color: 'inherit', textDecoration: 'none' }}>Profile</a></li>
              <li><a href="#projects" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: '#fff', marginBottom: '20px', fontSize: '1rem' }}>Contact</h4>
            <ul style={{ listStyle: 'none', color: '#94a3b8', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>Email: contact@hong.me</li>
              <li>Github: @hong-gildong</li>
              <li>LinkedIn: /in/hong</li>
            </ul>
          </div>
        </div>

        <div style={{ alignSelf: 'flex-start' }}>
          <a 
            href="/resume_hong.pdf" 
            download
            style={{ 
              display: 'inline-block',
              padding: '14px 28px',
              borderRadius: '30px',
              background: 'rgba(255, 255, 255, 0.05)',
              color: '#fff',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = '#818cf8'; }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '60px', color: '#475569', fontSize: '0.9rem' }}>
        &copy; 2026 Hong Gildong. Built with React & Vite.
      </div>
    </footer>
  );
};

export default Footer;
