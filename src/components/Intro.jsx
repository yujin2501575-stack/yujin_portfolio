import React from 'react';
import { motion } from 'framer-motion';

const Intro = () => {
  return (
    <section id="home" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.6 }}>
        {/* Spline Iframe */}
        <iframe 
          src='https://my.spline.design/cutecomputerfollowcursor-vtZGRdv3ngYJfoFdojl5WpDv/'
          frameBorder="0" 
          width="100%" 
          height="100%" 
          title="Spline 3D Background"
        ></iframe>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="section-container"
        style={{ zIndex: 1, textAlign: 'center' }}
      >
        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
          Creative <span style={{ color: '#818cf8' }}>Potential</span><br />
          Inspired by Design.
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
          우아한 기술과 감각적인 디자인의 조화를 추구하는 프론트엔드 개발자 홍길동입니다.
        </p>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          style={{ marginTop: '40px', fontSize: '14px', color: '#64748b' }}
        >
          Scroll Down
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
