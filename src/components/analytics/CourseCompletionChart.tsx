import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface CourseCompletionChartProps {
  data: {
    completed: number;
    inProgress: number;
    notStarted: number;
  };
}

const CourseCompletionChart = ({ data }: CourseCompletionChartProps) => {
  const chartData: ChartData<'doughnut'> = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        data: [data.completed, data.inProgress, data.notStarted],
        backgroundColor: [
          'rgba(34, 211, 238, 0.8)',  // cyan-400
          'rgba(234, 179, 8, 0.8)',   // yellow-500
          'rgba(75, 85, 99, 0.8)',    // gray-600
        ],
        borderColor: [
          'rgba(34, 211, 238, 1)',
          'rgba(234, 179, 8, 1)',
          'rgba(75, 85, 99, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#9CA3AF',  // gray-400
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: '#1F2937',  // gray-800
        titleColor: '#F9FAFB',      // gray-50
        bodyColor: '#F9FAFB',       // gray-50
        padding: 12,
        borderColor: '#374151',     // gray-700
        borderWidth: 1,
      },
    },
    cutout: '70%',
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Course Completion</h3>
      <div className="h-64">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};

export default CourseCompletionChart;