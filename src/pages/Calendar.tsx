import React from 'react';
import CalendarView from '../components/calendar/CalendarView';

const mockEvents = [
  {
    id: '1',
    title: 'Web Development Assignment Due',
    date: new Date(2024, 2, 15),
    type: 'assignment' as const,
    courseId: '1',
    courseName: 'Web Development'
  },
  {
    id: '2',
    title: 'Data Science Quiz',
    date: new Date(2024, 2, 18),
    type: 'quiz' as const,
    courseId: '2',
    courseName: 'Data Science Fundamentals'
  },
  {
    id: '3',
    title: 'UI/UX Design Live Session',
    date: new Date(2024, 2, 20),
    type: 'live-session' as const,
    courseId: '3',
    courseName: 'UI/UX Design Principles'
  }
];

const Calendar = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Calendar</h1>
        <p className="text-gray-400">View and manage your course schedule and deadlines</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CalendarView events={mockEvents} />
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {mockEvents
                .sort((a, b) => a.date.getTime() - b.date.getTime())
                .map(event => (
                  <div
                    key={event.id}
                    className="p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors cursor-pointer"
                  >
                    <p className="text-cyan-400 text-sm mb-1">{event.courseName}</p>
                    <h3 className="text-white font-medium mb-2">{event.title}</h3>
                    <p className="text-sm text-gray-400">
                      {event.date.toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;