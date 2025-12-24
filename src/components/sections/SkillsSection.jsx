import React from 'react';
import { FaCode, FaPython, FaReact, FaDocker, FaGitAlt, FaLinux, FaMicrochip } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiCplusplus } from 'react-icons/si';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: FaCode,
      color: 'blue',
      skills: [
        { name: 'Python', icon: FaPython, level: 95 },
        { name: 'C / C++', icon: SiCplusplus, level: 85 },
        { name: 'JavaScript', icon: FaReact, level: 80 },
        { name: 'CUDA', icon: FaMicrochip, level: 75 }
      ]
    },
    {
      title: 'AI / ML Frameworks',
      icon: SiPytorch,
      color: 'red',
      skills: [
        { name: 'PyTorch', level: 95 },
        { name: 'TensorFlow', level: 70 },
        { name: 'Transformers', level: 85 },
        { name: 'YOLOv5', level: 80 }
      ]
    },
    {
      title: 'Models & Methods',
      icon: FaCode,
      color: 'green',
      skills: [
        { name: 'CNN / U-Net', level: 90 },
        { name: 'Transformer / ViT', level: 88 },
        { name: 'Reinforcement Learning', level: 80 },
        { name: 'XAI (LIME)', level: 75 }
      ]
    },
    {
      title: 'Systems & Tools',
      icon: FaLinux,
      color: 'purple',
      skills: [
        { name: 'Linux', icon: FaLinux, level: 85 },
        { name: 'Git', icon: FaGitAlt, level: 90 },
        { name: 'Docker', icon: FaDocker, level: 75 },
        { name: 'IoT / Edge Computing', level: 80 }
      ]
    }
  ];

  const colorMap = {
    blue: { bg: 'bg-blue-500', text: 'text-blue-600', light: 'bg-blue-100' },
    red: { bg: 'bg-red-500', text: 'text-red-600', light: 'bg-red-100' },
    green: { bg: 'bg-green-500', text: 'text-green-600', light: 'bg-green-100' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-600', light: 'bg-purple-100' }
  };

  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <FaCode className="text-blue-500" />
        🛠 技術能力
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <category.icon className={`${colorMap[category.color].text}`} size={24} />
              <h3 className="text-xl font-bold text-gray-900">
                {category.title}
              </h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {skill.icon && <skill.icon className={colorMap[category.color].text} size={18} />}
                      <span className="text-gray-800 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-600 text-sm font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`${colorMap[category.color].bg} h-2.5 rounded-full transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Career Goals */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          🚀 生涯與研究目標
        </h3>
        <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl p-6">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-500 font-bold text-xl">•</span>
              <span>碩士期間持續發表國際期刊與研討會論文</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-500 font-bold text-xl">•</span>
              <span>深化 AI × 醫學影像 / 智慧通訊 / 綠色能源研究</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-500 font-bold text-xl">•</span>
              <span>強化產學合作與系統實作經驗</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold text-xl">•</span>
              <span>規劃博士班申請，朝向高階研究與教職／研究員發展</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
