import React from 'react';
import { useParams } from 'react-router-dom';
import CourseHeader from '../components/course/CourseHeader';
import CourseSyllabus from '../components/course/CourseSyllabus';
import type { Course } from '../types';

const mockCourseDetail: Course = {
  id: '1',
  title: 'Introduction to Web Development',
  description: 'Learn the fundamentals of web development with HTML, CSS, and JavaScript. This comprehensive course will take you from a beginner to being able to create full-featured responsive websites.',
  instructor: 'Sarah Johnson',
  thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  progress: 65,
  enrolled: 1234,
  duration: '8 weeks',
  category: 'Development',
  level: 'Beginner',
  rating: 4.8,
  totalRatings: 245,
  syllabus: [
    {
      id: '01',
      title: 'Getting Started with HTML',
      duration: '2 hours',
      lessons: [
        {
          id: '1.1',
          title: 'Introduction to HTML',
          duration: '15 min',
          type: 'video',
          completed: true
        },
        {
          id: '1.2',
          title: 'HTML Document Structure',
          duration: '20 min',
          type: 'video',
          completed: true
        },
        {
          id: '1.3',
          title: 'Working with Text Elements',
          duration: '25 min',
          type: 'reading',
          completed: true
        },
        {
          id: '1.4',
          title: 'HTML Basics Quiz',
          duration: '15 min',
          type: 'quiz',
          completed: true
        }
      ]
    },
    {
      id: '02',
      title: 'CSS Fundamentals',
      duration: '2.5 hours',
      lessons: [
        {
          id: '2.1',
          title: 'Introduction to CSS',
          duration: '20 min',
          type: 'video',
          completed: true
        },
        {
          id: '2.2',
          title: 'Selectors and Properties',
          duration: '30 min',
          type: 'video',
          completed: false
        },
        {
          id: '2.3',
          title: 'Box Model Deep Dive',
          duration: '25 min',
          type: 'reading',
          completed: false
        },
        {
          id: '2.4',
          title: 'Styling Practice',
          duration: '45 min',
          type: 'assignment',
          completed: false
        }
      ]
    }
  ]
};

const CourseDetail = () => {
  const { courseId } = useParams();
  // In a real app, we would fetch the course data based on courseId
  const course = mockCourseDetail;

  return (
    <div className="space-y-8">
      <CourseHeader course={course} />
      
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-white mb-6">Course Content</h2>
            <CourseSyllabus syllabus={course.syllabus || []} />
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-4">About the Instructor</h3>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt={course.instructor}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="text-white font-medium">{course.instructor}</h4>
                  <p className="text-gray-400 text-sm">Senior Web Developer</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Sarah is a passionate web developer with over 8 years of experience in building
                modern web applications. She loves teaching and has helped thousands of students
                start their journey in web development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;