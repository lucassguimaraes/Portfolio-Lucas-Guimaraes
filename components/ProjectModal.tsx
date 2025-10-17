
import React from 'react';
// FIX: The 'Project' type should be imported from '../types' instead of '../constants'.
import type { Project } from '../types';
import { X } from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 transition-colors z-10"
          aria-label="Close project details"
        >
          <X size={28} />
        </button>
        
        <div className="p-8 md:p-12">
          <p className="text-accent font-semibold mb-2">{project.category}</p>
          <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">{project.title}</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Descrição</h3>
              <p className="text-gray-600 leading-relaxed">{project.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Objetivo</h3>
                <p className="text-gray-600 leading-relaxed">{project.objective}</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Processo</h3>
                <p className="text-gray-600 leading-relaxed">{project.process}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Galeria</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
                  <img key={index} src={image} alt={`${project.title} - Imagem ${index + 1}`} className="w-full h-auto object-cover rounded-lg shadow-sm" loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
       <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ProjectModal;
