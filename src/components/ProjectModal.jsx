import React from 'react';
import { motion } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: 100,
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
      onClick={onClose}
    >
      <motion.div 
        layoutId={`project-${project.id}`}
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '900px',
          maxHeight: '90vh',
          background: '#1e293b',
          overflowY: 'auto',
          position: 'relative',
          padding: '0 0 40px 0'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'rgba(255,255,255,0.1)',
            border: 'none',
            color: '#fff',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '20px',
            zIndex: 1
          }}
        >
          &times;
        </button>

        <div className="placeholder-box" style={{ height: '400px', borderRadius: '0' }}>
          High-Res {project.title} Showcase
        </div>

        <div style={{ padding: '40px' }}>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
            {project.tags.map(tag => (
              <span key={tag} style={{ fontSize: '12px', background: 'rgba(129, 140, 248, 0.1)', color: '#818cf8', padding: '6px 12px', borderRadius: '6px' }}>
                {tag}
              </span>
            ))}
          </div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>{project.title}</h2>
          <p style={{ fontSize: '1.2rem', color: '#cbd5e1', marginBottom: '30px', borderLeft: '4px solid #818cf8', paddingLeft: '20px' }}>
            {project.description}
          </p>
          <div style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '1.1rem' }}>
            <h4 style={{ color: '#fff', marginBottom: '10px' }}>Details</h4>
            <p>{project.details}</p>
          </div>
          
          <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
            <button style={{ padding: '12px 30px', borderRadius: '12px', background: '#818cf8', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 600 }}>
              Live Demo
            </button>
            <button style={{ padding: '12px 30px', borderRadius: '12px', background: 'transparent', color: '#fff', border: '1px solid #475569', cursor: 'pointer', fontWeight: 600 }}>
              Github
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
