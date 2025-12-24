import React from 'react';
import { FaBrain, FaRobot, FaHeartbeat, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';

const ResearchInterests = () => {
  const interests = [
    {
      category: '深度學習與視覺',
      icon: FaBrain,
      color: 'blue',
      items: [
        '深度學習 (Deep Learning)',
        '多任務學習 (Multi-Task Learning)',
        'Transformer / Vision Transformer / Lightweight Transformer',
        '可解釋人工智慧 (XAI)',
        '對抗式學習與模型穩健性'
      ]
    },
    {
      category: '醫學影像 AI',
      icon: FaHeartbeat,
      color: 'red',
      items: [
        '醫學影像分析與辨識',
        'U-Net × Transformer 架構',
        'Segmentation + Classification',
        '模型輕量化'
      ]
    },
    {
      category: '強化學習與多智能體',
      icon: FaRobot,
      color: 'green',
      items: [
        '強化學習 (Reinforcement Learning)',
        '多智能體系統 (Multi-Agent Systems)',
        'PPO 演算法'
      ]
    },
    {
      category: 'LLM 與知識系統',
      icon: FaNetworkWired,
      color: 'purple',
      items: [
        '大型語言模型 (LLM)',
        'LLM × Knowledge Base',
        'RAG vs. Fine-tuning',
        'PEFT (Parameter-Efficient Fine-Tuning)',
        '智慧農業應用'
      ]
    },
    {
      category: '分散式學習與通訊',
      icon: FaShieldAlt,
      color: 'yellow',
      items: [
        '聯邦學習 (Federated Learning)',
        '邊緣運算、IoT',
        '智慧通訊與 O-RAN',
        '資安與持續學習'
      ]
    }
  ];

  const colorMap = {
    blue: 'from-blue-500 to-cyan-500',
    red: 'from-red-500 to-pink-500',
    green: 'from-green-500 to-emerald-500',
    purple: 'from-purple-500 to-indigo-500',
    yellow: 'from-yellow-500 to-orange-500'
  };

  const bgColorMap = {
    blue: 'from-blue-50 to-cyan-50',
    red: 'from-red-50 to-pink-50',
    green: 'from-green-50 to-emerald-50',
    purple: 'from-purple-50 to-indigo-50',
    yellow: 'from-yellow-50 to-orange-50'
  };

  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <FaBrain className="text-purple-500" />
        🔬 研究興趣
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {interests.map((interest, idx) => (
          <div
            key={idx}
            className={`bg-gradient-to-br ${bgColorMap[interest.color]} rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-[1.02]`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`bg-gradient-to-r ${colorMap[interest.color]} p-3 rounded-lg`}>
                <interest.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {interest.category}
              </h3>
            </div>
            <ul className="space-y-2">
              {interest.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchInterests;
