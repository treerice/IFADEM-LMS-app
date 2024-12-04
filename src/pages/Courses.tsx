import React, { useState } from 'react';
import { Search, Filter, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Course } from '../types';

const categories = ['All', 'Development', 'Design', 'Business', 'Marketing', 'Science'];
const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the fundamentals of web development with HTML, CSS, and JavaScript.',
    instructor: 'Sarah Johnson',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    progress: 65,
    enrolled: 1234,
    duration: '8 weeks'
  },
  {
    id: '2',
    title: 'Data Science Fundamentals',
    description: 'Master the basics of data science and analytics with Python.',
    instructor: 'Michael Chen',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    progress: 32,
    enrolled: 856,
    duration: '12 weeks'
  },
  {
    id: '3',
    title: 'UI/UX Design Principles',
    description: 'Learn modern design principles and create stunning user interfaces.',
    instructor: 'Emma Wilson',
    thumbnail: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    progress: 89,
    enrolled: 2156,
    duration: '6 weeks'
  }
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Explore Courses</h1>
        <p className="text-gray-400">Discover new skills and advance your career with our courses.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Sidebar */}
        <div className="lg:w-64 space-y-6">
          <div className="bg-gray-800 rounded-xl p-6 space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Level</h3>
              <div className="space-y-2">
                {levels.map(level => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedLevel === level
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-400 hover:bg-gray-700'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Search and Filter Bar */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <button className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <Filter className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {mockCourses.map(course => (
              <Link
                key={course.id}
                to={`/courses/${course.id}`}
                className="bg-gray-800 rounded-xl overflow-hidden hover:ring-2 hover:ring-cyan-400 transition-all cursor-pointer"
              >
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-cyan-400 text-sm mb-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{selectedCategory !== 'All' ? selectedCategory : 'Development'}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">{course.instructor}</span>
                    <span className="text-cyan-400 font-medium">{course.duration}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;