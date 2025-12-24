import React from 'react';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';

const EducationSection = () => {
  return (
    <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <FaGraduationCap className="text-blue-500" />
        🎓 教育背景
      </h2>

      <div className="space-y-6">
        {/* NYCU */}
        <div className="border-l-4 border-blue-500 pl-6 py-4 bg-gradient-to-r from-blue-50 to-transparent rounded-r-xl">
          <div className="flex items-start gap-3 mb-3">
            <FaUniversity className="text-blue-500 mt-1" size={24} />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                國立陽明交通大學 (NYCU)
              </h3>
              <p className="text-xl text-gray-700 font-semibold">
                智慧產業與綠色能源研究所
              </p>
              <p className="text-gray-600 italic">碩士班（研究中）</p>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">研究導向：</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>智慧系統</li>
                <li>人工智慧應用</li>
                <li>綠色能源 × AI</li>
                <li>產學合作與實務導向研究</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">發展方向：</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>AI 系統實作與落地</li>
                <li>產學合作、論文投稿</li>
                <li>博士班申請與高階研究雙軌規劃</li>
              </ul>
            </div>
          </div>
        </div>

        {/* NTTU */}
        <div className="border-l-4 border-purple-500 pl-6 py-4 bg-gradient-to-r from-purple-50 to-transparent rounded-r-xl">
          <div className="flex items-start gap-3 mb-3">
            <FaUniversity className="text-purple-500 mt-1" size={24} />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                國立臺東大學 (NTTU)
              </h3>
              <p className="text-xl text-gray-700 font-semibold">
                資訊工程學系
              </p>
              <p className="text-gray-600 italic">學士</p>
            </div>
          </div>
          
          <div className="mt-4 space-y-2">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">主修領域：</h4>
              <div className="flex flex-wrap gap-2 ml-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  人工智慧 (AI)
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  機器學習 (ML)
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  資料科學
                </span>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">核心修課（表現優異）：</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                <li>資料庫系統 (Database Systems)</li>
                <li>作業系統 (Operating Systems)</li>
                <li>系統程式 (System Programming)</li>
                <li>硬體軟體共同設計 (Hardware-Software Co-Design)</li>
                <li>Web 與資料庫管理系統</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Service Experience */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          👨‍💼 教學、行政與研究服務
        </h3>
        <div className="bg-gray-50 rounded-xl p-6 space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 text-lg">系辦工讀生</h4>
            <p className="text-gray-600 mb-2">國立臺東大學 資訊工程學系</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>系務行政支援</li>
              <li>課程與資料管理</li>
              <li>教學與系統支援</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 text-lg">研究計畫助理 / 專題助教</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>深度學習與 AR × IoT × STEM 教育專案</li>
              <li>協助模型設計、實驗、論文整理</li>
              <li>產學合作專案參與</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
