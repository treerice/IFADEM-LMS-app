import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CourseHeader from '../components/course/CourseHeader';
import CourseContent from '../components/course/CourseContent';
import type { Course } from '../types';

// Mock course data with video content
const mockCourseDetail: Course & {
  sections: Array<{
    id: string;
    title: string;
    content: Array<{
      id: string;
      title: string;
      type: 'video' | 'document';
      duration: string;
      isPremium: boolean;
      url: string;
      thumbnail?: string;
    }>;
  }>;
} = {
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
  sections: [
    {
      id: '1',
      title: 'Getting Started with HTML',
      content: [
        {
          id: '1.1',
          title: 'Introduction to HTML',
          type: 'video',
          duration: '15:30',
          isPremium: false,
          url: 'https://www.youtube.com/watch?v=UB1O30fR-EE',
          thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
        },
        {
          id: '1.2',
          title: 'Advanced HTML Concepts',
          type: 'video',
          duration: '20:45',
          isPremium: true,
          url: 'https://www.youtube.com/watch?v=DPnqb74Smug',
          thumbnail: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2'
        }
      ]
    },
    {
      id: '2',
      title: 'CSS Fundamentals',
      content: [
        {
          id: '2.1',
          title: 'Introduction to CSS',
          type: 'video',
          duration: '18:20',
          isPremium: false,
          url: 'https://www.youtube.com/watch?v=1PnVor36_40',
          thumbnail: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19'
        },
        {
          id: '2.2',
          title: 'CSS Layout Mastery',
          type: 'video',
          duration: '25:15',
          isPremium: true,
          url: 'https://www.youtube.com/watch?v=9zBsdzdE4sM',
          thumbnail: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2'
        }
      ]
    }
  ]
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const [activeContent, setActiveContent] = useState(mockCourseDetail.sections[0].content[0]);
  const [isUserPremium] = useState(false); // In a real app, this would come from user context/state

  return (
    <div className="space-y-8">
      <CourseHeader course={mockCourseDetail} />
      
      <div className="max-w-7xl mx-auto px-8">
        <CourseContent
          sections={mockCourseDetail.sections}
          activeContent={activeContent}
          onContentSelect={setActiveContent}
          isUserPremium={isUserPremium}
        />
      </div>
    </div>
  );
};

export default CourseDetail;