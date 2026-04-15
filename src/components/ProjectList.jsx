import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectModal from './ProjectModal';

const ProjectList = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Simulate loading for Skeleton UI
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="section-container">
      <h2 style={{ fontSize: '3rem', marginBottom: '50px', fontWeight: 700 }}>Featured Projects</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
        {loading ? (
          [1, 2, 3].map(i => (
            <div key={i} className="glass-card" style={{ height: '400px', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <div className="skeleton" style={{ height: '240px' }}></div>
              <div style={{ padding: '24px' }}>
                <div className="skeleton" style={{ height: '24px', width: '60%', marginBottom: '12px' }}></div>
                <div className="skeleton" style={{ height: '16px', width: '90%' }}></div>
              </div>
            </div>
          ))
        ) : (
          projects.map(project => (
            <motion.div 
              key={project.id}
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedProject(project)}
              whileHover={{ y: -10 }}
              className="glass-card"
              style={{ cursor: 'pointer', overflow: 'hidden', transition: 'all 0.3s ease' }}
            >
              <div className="placeholder-box" style={{ height: '240px' }}>
                {project.title} Preview
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ fontSize: '10px', background: 'rgba(129, 140, 248, 0.1)', color: '#818cf8', padding: '4px 8px', borderRadius: '4px', border: '1px solid rgba(129, 140, 248, 0.2)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{project.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{project.description}</p>
              </div>
            </motion.div>
          ))
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectList;
