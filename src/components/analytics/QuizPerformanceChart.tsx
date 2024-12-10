import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface QuizPerformance {
  quizName: string;
  averageScore: number;
  attempts: number;
}

interface QuizPerformanceChartProps {
  data: QuizPerformance[];
}

const QuizPerformanceChart = ({ data }: QuizPerformanceChartProps) => {
  const chartData: ChartData<'bar'> = {
    labels: data.map(item => item.quizName),
    datasets: [
      {
        label: 'Average Score',
        data: data.map(item => item.averageScore),
        backgroundColor: 'rgba(34, 211, 238, 0.8)',
        borderColor: 'rgba(34, 211, 238, 1)',
        borderWidth: 1,
      },
      {
        label: 'Number of Attempts',
        data: data.map(item => item.attempts),
        backgroundColor: 'rgba(99, 102, 241, 0.8)',
        borderColor: 'rgba(99, 102, 241, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#9CA3AF',
        },
      },
      tooltip: {
        backgroundColor: '#1F2937',
        titleColor: '#F9FAFB',
        bodyColor: '#F9FAFB',
        padding: 12,
        borderColor: '#374151',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(75, 85, 99, 0.2)',
        },
        ticks: {
          color: '#9CA3AF',
        },
      },
      y: {
        grid: {
          color: 'rgba(75, 85, 99, 0.2)',
        },
        ticks: {
          color: '#9CA3AF',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Quiz Performance</h3>
      <div className="h-64">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default QuizPerformanceChart;