import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play, FileText, PenTool, HelpCircle } from 'lucide-react';
import type { CourseSyllabus as ICourseSyllabus, CourseLesson } from '../../types';

interface CourseSyllabusProps {
  syllabus: ICourseSyllabus[];
}

const getLessonIcon = (type: CourseLesson['type']) => {
  switch (type) {
    case 'video':
      return Play;
    case 'reading':
      return FileText;
    case 'assignment':
      return PenTool;
    case 'quiz':
      return HelpCircle;
    default:
      return FileText;
  }
};

const CourseSyllabus = ({ syllabus }: CourseSyllabusProps) => {
  const [expandedModules, setExpandedModules] = useState<string[]>([syllabus[0].id]);

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  return (
    <div className="space-y-4">
      {syllabus.map(module => (
        <div key={module.id} className="bg-gray-800 rounded-lg overflow-hidden">
          <button
            onClick={() => toggleModule(module.id)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-700 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                <span className="text-cyan-400 font-medium">{module.id}</span>
              </div>
              <div className="text-left">
                <h3 className="text-white font-medium">{module.title}</h3>
                <p className="text-sm text-gray-400">{module.duration}</p>
              </div>
            </div>
            {expandedModules.includes(module.id) ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>
          
          {expandedModules.includes(module.id) && (
            <div className="border-t border-gray-700">
              {module.lessons.map(lesson => {
                const Icon = getLessonIcon(lesson.type);
                return (
                  <div
                    key={lesson.id}
                    className="px-6 py-4 flex items-center gap-4 hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                      <Icon className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white">{lesson.title}</h4>
                      <p className="text-sm text-gray-400">{lesson.duration}</p>
                    </div>
                    {lesson.completed && (
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseSyllabus;