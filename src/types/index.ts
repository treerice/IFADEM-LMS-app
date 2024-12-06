// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  avatar?: string;
}

// Course related types
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  thumbnail: string;
  progress?: number;
  enrolled?: number;
  duration?: string;
  category?: string;
  level?: string;
  rating?: number;
  totalRatings?: number;
  syllabus?: CourseSyllabus[];
  startDate?: Date;
  endDate?: Date;
  prerequisites?: string[];
  objectives?: string[];
  isPublished?: boolean;
  price?: number;
  tags?: string[];
}

export interface CourseSyllabus {
  id: string;
  title: string;
  duration: string;
  lessons: CourseLesson[];
}

export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'quiz' | 'assignment' | 'reading';
  completed?: boolean;
  content?: string;
  videoUrl?: string;
  attachments?: Attachment[];
}

// Assignment related types
export interface Assignment {
  id: string;
  title: string;
  description: string;
  courseId: string;
  dueDate: Date;
  points: number;
  status: 'pending' | 'submitted' | 'graded';
  attachments?: Attachment[];
}

export interface Submission {
  id: string;
  assignmentId: string;
  userId: string;
  submittedAt: Date;
  content: string;
  attachments?: Attachment[];
  grade?: number;
  feedback?: string;
}

// Quiz related types
export interface Quiz {
  id: string;
  title: string;
  description: string;
  timeLimit?: number;
  questions: QuizQuestion[];
  shuffleQuestions?: boolean;
  passingScore?: number;
}

export interface QuizQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'short-answer';
  question: string;
  options?: string[];
  correctAnswer: string | string[];
  points: number;
}

// Notification related types
export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
  read: boolean;
  userId: string;
  link?: string;
}

// Utility types
export interface Attachment {
  id: string;
  name: string;
  type: string;
  url: string;
  size: number;
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  timestamp: Date;
  replies?: Comment[];
  likes: number;
}

// Settings and Preferences
export interface UserPreferences {
  theme: 'light' | 'dark';
  language: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
  timezone: string;
}