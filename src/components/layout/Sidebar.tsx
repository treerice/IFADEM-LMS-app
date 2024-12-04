import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Users, 
  Calendar, 
  MessageSquare, 
  Settings,
  LogOut 
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: BookOpen, label: 'Courses', path: '/courses' },
    { icon: Users, label: 'Community', path: '/community' },
    { icon: Calendar, label: 'Calendar', path: '/calendar' },
    { icon: MessageSquare, label: 'Messages', path: '/messages' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <BookOpen className="w-8 h-8 text-cyan-400" />
        <h1 className="text-2xl font-bold text-cyan-400">IFADEM</h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'hover:bg-gray-800'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 absolute bottom-8 w-[calc(100%-2rem)]">
        <LogOut className="w-5 h-5" />
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar;