import React from 'react';
import { Star, Users, Clock, BookOpen } from 'lucide-react';
import type { Course } from '../../types';

interface CourseHeaderProps {
  course: Course;
}

const CourseHeader = ({ course }: CourseHeaderProps) => {
  return (
    <div className="relative">
      <div className="h-64 w-full overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
      </div>
      
      <div className="relative -mt-32 px-8 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-start justify-between">
            <div className="text-white">
              <div className="flex items-center gap-2 text-sm mb-4">
                <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
                  {course.category || 'Development'}
                </span>
                <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">
                  {course.level || 'Beginner'}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-gray-400 max-w-2xl mb-6">{course.description}</p>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>{course.rating || 4.8} ({course.totalRatings || 245} ratings)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span>{course.enrolled} students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-gray-400" />
                  <span>12 modules</span>
                </div>
              </div>
            </div>
            
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              {course.progress !== undefined ? 'Continue Learning' : 'Enroll Now'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;