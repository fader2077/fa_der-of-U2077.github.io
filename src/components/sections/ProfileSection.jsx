import React from 'react';
import { FaGithub, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaGraduationCap } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const ProfileSection = () => {
  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-2">
          李捷新
        </h1>
        <h2 className="text-3xl text-gray-600 mb-6">
          Chieh-Hsin Li
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 text-gray-700 mb-6">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>Taiwan</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-500" />
            <span>（待補）</span>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors">
            <SiGooglescholar size={20} />
            <span>Google Scholar</span>
          </a>
          <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors">
            <FaGlobe size={20} />
            <span>Website</span>
          </a>
        </div>
      </div>

      {/* Advisor Section */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
          👨‍🏫 指導教授
        </h3>
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
          <h4 className="text-xl font-semibold text-gray-900 mb-2">
            吳欣德 副教授 (Dr. Hsin-Te Wu)
          </h4>
          <p className="text-gray-700 mb-2">國立臺東大學 資訊工程學系</p>
          <p className="text-gray-600">
            研究領域：智慧精準農業、IoT、人工智慧、LLM、教育科技
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
