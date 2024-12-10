import React from 'react';
import { Download, ArrowUpRight } from 'lucide-react';
import CourseCompletionChart from '../components/analytics/CourseCompletionChart';
import EngagementHeatmap from '../components/analytics/EngagementHeatmap';
import QuizPerformanceChart from '../components/analytics/QuizPerformanceChart';

// Mock data for demonstration
const courseCompletionData = {
  completed: 45,
  inProgress: 30,
  notStarted: 25,
};

const engagementData = Array.from({ length: 7 }, (_, i) => ({
  date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
  value: Math.floor(Math.random() * 100),
})).reverse();

const quizPerformanceData = [
  { quizName: 'HTML Basics', averageScore: 85, attempts: 120 },
  { quizName: 'CSS Fundamentals', averageScore: 78, attempts: 98 },
  { quizName: 'JavaScript Intro', averageScore: 72, attempts: 145 },
  { quizName: 'React Basics', averageScore: 68, attempts: 89 },
];

const Analytics = () => {
  const handleExportData = () => {
    // In a real app, this would generate and download actual CSV data
    console.log('Exporting analytics data...');
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
          <p className="text-gray-400">Track course performance and student engagement</p>
        </div>
        <button
          onClick={handleExportData}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          Export Data
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400">Total Students</h3>
            <span className="p-2 bg-cyan-500/20 rounded-lg">
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </span>
          </div>
          <p className="text-2xl font-semibold text-white">1,234</p>
          <p className="text-sm text-cyan-400 mt-2">↑ 12% from last month</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400">Active Courses</h3>
            <span className="p-2 bg-cyan-500/20 rounded-lg">
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </span>
          </div>
          <p className="text-2xl font-semibold text-white">45</p>
          <p className="text-sm text-cyan-400 mt-2">↑ 8% from last month</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400">Completion Rate</h3>
            <span className="p-2 bg-cyan-500/20 rounded-lg">
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </span>
          </div>
          <p className="text-2xl font-semibold text-white">78%</p>
          <p className="text-sm text-cyan-400 mt-2">↑ 5% from last month</p>
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400">Average Score</h3>
            <span className="p-2 bg-cyan-500/20 rounded-lg">
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </span>
          </div>
          <p className="text-2xl font-semibold text-white">85%</p>
          <p className="text-sm text-cyan-400 mt-2">↑ 3% from last month</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CourseCompletionChart data={courseCompletionData} />
        <QuizPerformanceChart data={quizPerformanceData} />
      </div>

      <div className="grid grid-cols-1 gap-6">
        <EngagementHeatmap data={engagementData} />
      </div>
    </div>
  );
};

export default Analytics;