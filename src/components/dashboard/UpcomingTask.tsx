import React from 'react';
import { Calendar } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  course: string;
  dueDate: string;
  type: 'assignment' | 'quiz' | 'exam';
}

interface UpcomingTaskProps {
  task: Task;
}

const UpcomingTask = ({ task }: UpcomingTaskProps) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
      <div className="p-2 bg-cyan-400/10 rounded-lg">
        <Calendar className="w-5 h-5 text-cyan-400" />
      </div>
      <div className="flex-1">
        <h4 className="text-white font-medium">{task.title}</h4>
        <p className="text-gray-400 text-sm">{task.course}</p>
      </div>
      <div className="text-right">
        <p className="text-sm text-cyan-400">{task.dueDate}</p>
        <p className="text-xs text-gray-400 capitalize">{task.type}</p>
      </div>
    </div>
  );
};

export default UpcomingTask;