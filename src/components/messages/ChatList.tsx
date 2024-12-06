import React from 'react';
import { Search } from 'lucide-react';

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: Date;
  unread: number;
  avatar: string;
}

interface ChatListProps {
  chats: Chat[];
  selectedChatId: string | null;
  onChatSelect: (chatId: string) => void;
}

const ChatList = ({ chats, selectedChatId, onChatSelect }: ChatListProps) => {
  return (
    <div className="w-80 border-r border-gray-800">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search messages..."
            className="w-full bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
      </div>

      <div className="overflow-y-auto h-[calc(100vh-12rem)]">
        {chats.map(chat => (
          <button
            key={chat.id}
            onClick={() => onChatSelect(chat.id)}
            className={`w-full p-4 flex items-start gap-3 hover:bg-gray-800 transition-colors ${
              selectedChatId === chat.id ? 'bg-gray-800' : ''
            }`}
          >
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-medium truncate">{chat.name}</h3>
                <span className="text-xs text-gray-400">
                  {chat.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <p className="text-sm text-gray-400 truncate">{chat.lastMessage}</p>
            </div>
            {chat.unread > 0 && (
              <span className="bg-cyan-400 text-gray-900 text-xs font-medium px-2 py-0.5 rounded-full">
                {chat.unread}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatList;