import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarEvent {
  id: string;
  title: string;
  date: Date;
  type: 'assignment' | 'quiz' | 'live-session' | 'deadline';
  courseId: string;
  courseName: string;
}

interface CalendarViewProps {
  events: CalendarEvent[];
  currentDate?: Date;
}

const CalendarView = ({ events, currentDate = new Date() }: CalendarViewProps) => {
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getEventsForDay = (day: number) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === day &&
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear()
      );
    });
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-700 rounded-lg">
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-lg">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekDays.map(day => (
          <div key={day} className="text-center text-gray-400 text-sm py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {Array(firstDayOfMonth)
          .fill(null)
          .map((_, index) => (
            <div key={`empty-${index}`} className="aspect-square" />
          ))}

        {days.map(day => {
          const dayEvents = getEventsForDay(day);
          const isToday =
            day === new Date().getDate() &&
            currentDate.getMonth() === new Date().getMonth() &&
            currentDate.getFullYear() === new Date().getFullYear();

          return (
            <div
              key={day}
              className={`aspect-square p-1 rounded-lg ${
                isToday ? 'bg-cyan-500/20 ring-1 ring-cyan-400' : 'hover:bg-gray-700'
              }`}
            >
              <div className="h-full p-1">
                <span className={`text-sm ${isToday ? 'text-cyan-400' : 'text-gray-400'}`}>
                  {day}
                </span>
                {dayEvents.length > 0 && (
                  <div className="mt-1 space-y-1">
                    {dayEvents.map(event => (
                      <div
                        key={event.id}
                        className="text-xs px-1 py-0.5 rounded bg-cyan-500/20 text-cyan-400 truncate"
                        title={event.title}
                      >
                        {event.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;