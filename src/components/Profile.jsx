import React from 'react';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <section id="profile" className="section-container">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card"
        style={{ padding: '60px', display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}
      >
        <div style={{ flex: '1 1 300px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '24px', fontWeight: 700 }}>About Me</h2>
          <p style={{ fontSize: '1.1rem', color: '#94a3b8', marginBottom: '1.5rem' }}>
            단순히 코드를 짜는 것을 넘어, 사용자의 감각을 일깨우는 경험을 만듭니다. 
            현대적인 웹 기술과 예술적인 영감을 결합하여 특별한 가치를 창출합니다.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ color: '#818cf8', marginBottom: '8px' }}>Experience</h4>
              <p style={{ fontSize: '0.9rem' }}>5+ Years in Creative Dev</p>
            </div>
            <div>
              <h4 style={{ color: '#818cf8', marginBottom: '8px' }}>Location</h4>
              <p style={{ fontSize: '0.9rem' }}>Seoul, South Korea</p>
            </div>
            <div>
              <h4 style={{ color: '#818cf8', marginBottom: '8px' }}>Education</h4>
              <p style={{ fontSize: '0.9rem' }}>Design & Computer Science</p>
            </div>
            <div>
              <h4 style={{ color: '#818cf8', marginBottom: '8px' }}>Philosophy</h4>
              <p style={{ fontSize: '0.9rem' }}>Minimalism & Innovation</p>
            </div>
          </div>
        </div>
        <div style={{ flex: '0 0 350px', height: '450px', position: 'relative' }}>
           <div className="skeleton" style={{ width: '100%', height: '100%', borderRadius: '24px' }}></div>
           {/* Placeholder for actual image */}
           <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#475569' }}>Profile Image</span>
           </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;
