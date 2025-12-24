import React from 'react';
import { FaFileAlt } from 'react-icons/fa';

const PublicationsSection = () => {
  const publications = [
    {
      title: '基於知識圖譜與 PEFT 的農業專家系統',
      venue: '第二十二屆離島資訊技術與應用研討會 (ITAOI 2024)',
      year: '2024'
    },
    {
      title: 'Lightweight GPS-Aided Recycling Analysis System in Edge Computing Based on Green Computing',
      venue: 'Conference/Journal (審稿中)',
      year: '2024'
    },
    {
      title: 'Design and Research of a Smart Nutrition Management System Based on Large Language Models and YOLOv5',
      venue: 'Conference/Journal (審稿中)',
      year: '2024'
    },
    {
      title: 'A Potential Study on the Application of Data Cartography Techniques to Tree-Based Models',
      venue: 'Conference/Journal (審稿中)',
      year: '2024'
    },
    {
      title: '應用人工智慧結合 3D 列印之瓶罐分類視覺化系統設計與研究',
      venue: 'Conference/Journal (已投稿)',
      year: '2024'
    },
    {
      title: 'Research on Medical Image Analysis Based on Transformer and Multi-Task Learning Mechanisms',
      venue: 'Conference/Journal (已投稿)',
      year: '2024'
    },
    {
      title: '融合輕量型 Transformer 模組的 U-Net 多任務學習架構應用於醫學影像處理',
      venue: 'Conference/Journal (已投稿)',
      year: '2024'
    },
    {
      title: 'Exploring the Integration of MobileViTv3 in U-Net for Enhanced Multi-Task Learning on the Med++ MNIST Dataset',
      venue: 'Conference/Journal (已投稿)',
      year: '2024'
    }
  ];

  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <FaFileAlt className="text-yellow-500" />
        📄 學術論文與投稿
      </h2>

      <div className="mb-6">
        <p className="text-lg text-gray-700">
          已投稿／發表共 <span className="font-bold text-blue-600 text-2xl">9+ 篇</span>
        </p>
      </div>

      <div className="space-y-4">
        {publications.map((pub, idx) => (
          <div
            key={idx}
            className="border-l-4 border-yellow-500 pl-6 py-4 bg-gradient-to-r from-yellow-50 to-transparent rounded-r-xl hover:from-yellow-100 transition-colors duration-300"
          >
            <div className="flex items-start gap-3">
              <span className="font-bold text-yellow-600 text-lg">{idx + 1}.</span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {pub.title}
                </h3>
                <p className="text-gray-600 italic">{pub.venue}</p>
                <p className="text-gray-500 text-sm mt-1">{pub.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Custom Publication Section */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-dashed border-gray-300">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            ➕ 新增您的論文發表
          </h3>
          <p className="text-gray-600">
            編輯 <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/components/sections/PublicationsSection.jsx</code> 檔案，
            在 <code className="bg-gray-100 px-2 py-1 rounded text-sm">publications</code> 陣列中新增物件即可。
          </p>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
