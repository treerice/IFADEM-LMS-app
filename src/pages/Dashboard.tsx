import React from 'react';
import { BookOpen, GraduationCap, Clock, Trophy } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import CourseCard from '../components/dashboard/CourseCard';
import UpcomingTask from '../components/dashboard/UpcomingTask';
import type { Course } from '../types';

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

const mockTasks = [
  {
    id: '1',
    title: 'Final Project Submission',
    course: 'Web Development',
    dueDate: 'Tomorrow, 11:59 PM',
    type: 'assignment' as const
  },
  {
    id: '2',
    title: 'Mid-term Examination',
    course: 'Data Science Fundamentals',
    dueDate: 'In 3 days',
    type: 'exam' as const
  },
  {
    id: '3',
    title: 'Design System Quiz',
    course: 'UI/UX Design Principles',
    dueDate: 'Next week',
    type: 'quiz' as const
  }
];

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back, John!</h1>
        <p className="text-gray-400">Track your progress and manage your learning journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Enrolled Courses"
          value={6}
          icon={BookOpen}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Hours Learned"
          value="32.5h"
          icon={Clock}
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard
          title="Certificates"
          value={2}
          icon={GraduationCap}
        />
        <StatCard
          title="Achievement Points"
          value="1,234"
          icon={Trophy}
          trend={{ value: 5, isPositive: true }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold text-white">Your Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-6">Upcoming Tasks</h2>
          <div className="space-y-4">
            {mockTasks.map(task => (
              <UpcomingTask key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;