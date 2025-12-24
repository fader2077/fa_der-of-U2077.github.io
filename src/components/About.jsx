import React from 'react';
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaCode, FaBrain, FaProjectDiagram } from 'react-icons/fa';
import ProfileSection from './sections/ProfileSection';
import EducationSection from './sections/EducationSection';
import ResearchInterests from './sections/ResearchInterests';
import ProjectsSection from './sections/ProjectsSection';
import PublicationsSection from './sections/PublicationsSection';
import SkillsSection from './sections/SkillsSection';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header */}
      <ProfileSection />

      {/* Education */}
      <EducationSection />

      {/* Research Interests */}
      <ResearchInterests />

      {/* Projects & Research Experience */}
      <ProjectsSection />

      {/* Publications */}
      <PublicationsSection />

      {/* Technical Skills */}
      <SkillsSection />

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-600 text-sm pb-8">
        <p>© 2025 李捷新 (Chieh-Hsin Li). All rights reserved.</p>
        <p className="mt-2">Built with React + TailwindCSS + Live2D</p>
      </footer>
    </div>
  );
};

export default About;
