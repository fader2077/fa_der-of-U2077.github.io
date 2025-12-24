import React from 'react';
import { FaProjectDiagram } from 'react-icons/fa';

const ProjectsSection = () => {
  const projects = [
    {
      title: '🔹 醫學影像分析與多任務學習',
      items: [
        'Research on Medical Image Analysis Based on Transformer and Multi-Task Learning Mechanisms',
        '融合輕量型 Transformer 模組的 U-Net 多任務學習架構應用於醫學影像處理',
        'Exploring the Integration of MobileViTv3 in U-Net for Enhanced Multi-Task Learning on the Med++ MNIST Dataset'
      ],
      techs: [
        'U-Net × MobileViT/MobileViTv3',
        'Segmentation + Classification',
        'PyTorch',
        'Model Optimization'
      ]
    },
    {
      title: '🔹 LLM × 智慧農業 × 知識系統',
      items: [
        '基於知識圖譜與 PEFT 的農業專家系統',
        '自然語言驅動的水耕農業管理：交互式問題解決與控制系統',
        '智慧營養管理系統 (LLM + YOLOv5)'
      ],
      techs: [
        'Knowledge Graph',
        'RAG vs. Fine-tuning',
        'PEFT',
        'LLM Decision Support',
        'IoT Integration'
      ]
    },
    {
      title: '🔹 電腦視覺與智慧分類',
      items: [
        'YOLOv5 植物與瓶罐分類系統',
        'AI 結合 3D 列印之瓶罐分類視覺化系統',
        'GPS 輔助回收分析系統 (Edge Computing + Green Computing)'
      ],
      techs: [
        'YOLOv5',
        'Object Detection',
        'Edge Computing',
        'Green Computing'
      ]
    },
    {
      title: '🔹 強化學習與多智能體系統',
      items: [
        '多智能體強化學習研究',
        '遊戲與模擬環境 (Super Mario World)',
        'PPO 演算法訓練',
        '長時間訓練 (10M steps) 與穩定性分析'
      ],
      techs: [
        'PPO Algorithm',
        'Multi-Agent RL',
        'Hyperparameter Tuning',
        'Environment Design'
      ]
    },
    {
      title: '🔹 資安、持續學習與模型穩健性',
      items: [
        '半監督與持續學習入侵偵測系統 (NSL-KDD)',
        'CNN / LSTM / XGBoost (PyTorch)',
        '模型可解釋性：LIME, Deletion AUC, Insertion AUC',
        '對抗式分析：White-box / Black-box Attacks',
        'Attribution Stability, PSNR / SSIM'
      ],
      techs: [
        'Cybersecurity',
        'XAI (LIME)',
        'Adversarial Robustness',
        'CNN/LSTM/XGBoost'
      ]
    },
    {
      title: '🔹 O-RAN 與聯邦學習',
      items: [
        'O-RAN 智慧化應用研究',
        'xApp 設計',
        '邊緣部署與聯邦學習流程規劃',
        '任務拆解與系統架構設計'
      ],
      techs: [
        'O-RAN',
        'Federated Learning',
        'xApp Design',
        'Edge Deployment'
      ]
    }
  ];

  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <FaProjectDiagram className="text-green-500" />
        🧠 研究與專案經驗
      </h2>

      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="border-l-4 border-green-500 pl-6 py-4 bg-gradient-to-r from-green-50 to-transparent rounded-r-xl hover:from-green-100 transition-colors duration-300"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {project.title}
            </h3>
            
            <ul className="space-y-2 mb-4">
              {project.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start gap-2 text-gray-700">
                  <span className="text-green-500 font-bold mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.techs.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add Custom Project Section */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-dashed border-gray-300">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            ➕ 新增您的專案經驗
          </h3>
          <p className="text-gray-600">
            編輯 <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/components/sections/ProjectsSection.jsx</code> 檔案，
            在 <code className="bg-gray-100 px-2 py-1 rounded text-sm">projects</code> 陣列中新增物件即可。
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
