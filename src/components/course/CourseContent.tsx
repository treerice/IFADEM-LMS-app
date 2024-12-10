import React from 'react';
import { Play, FileText, Lock } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

interface CourseSection {
  id: string;
  title: string;
  content: CourseContent[];
}

interface CourseContent {
  id: string;
  title: string;
  type: 'video' | 'document';
  duration: string;
  isPremium: boolean;
  url: string;
  thumbnail?: string;
}

interface CourseContentProps {
  sections: CourseSection[];
  activeContent?: CourseContent;
  onContentSelect: (content: CourseContent) => void;
  isUserPremium: boolean;
}

const CourseContent = ({ sections, activeContent, onContentSelect, isUserPremium }: CourseContentProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        {activeContent ? (
          <div className="space-y-6">
            <VideoPlayer
              url={activeContent.url}
              isPremium={activeContent.isPremium}
              isUnlocked={isUserPremium}
              thumbnail={activeContent.thumbnail}
            />
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">{activeContent.title}</h2>
              <p className="text-gray-400">{activeContent.duration}</p>
            </div>
          </div>
        ) : (
          <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Select a lesson to start learning</p>
          </div>
        )}
      </div>

      <div className="bg-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-6">Course Content</h3>
        <div className="space-y-6">
          {sections.map(section => (
            <div key={section.id}>
              <h4 className="text-white font-medium mb-4">{section.title}</h4>
              <div className="space-y-2">
                {section.content.map(item => (
                  <button
                    key={item.id}
                    onClick={() => onContentSelect(item)}
                    className={`w-full flex items-center gap-4 p-3 rounded-lg transition-colors ${
                      activeContent?.id === item.id
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'hover:bg-gray-700'
                    }`}
                  >
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                      {item.type === 'video' ? (
                        <Play className="w-4 h-4 text-gray-400" />
                      ) : (
                        <FileText className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1 text-left">
                      <p className={activeContent?.id === item.id ? 'text-cyan-400' : 'text-white'}>
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-400">{item.duration}</p>
                    </div>
                    {item.isPremium && !isUserPremium && (
                      <Lock className="w-4 h-4 text-gray-400" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;