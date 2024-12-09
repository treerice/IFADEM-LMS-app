import React, { useState } from 'react';
import ChatList from '../components/messages/ChatList';
import { MessageSquare, Send } from 'lucide-react';

interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: Date;
  isRead: boolean;
}

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: Date;
  unread: number;
  avatar: string;
  messages: Message[];
}

const mockChats: Chat[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    lastMessage: 'When is the next assignment due?',
    timestamp: new Date(),
    unread: 2,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    messages: [
      {
        id: '1',
        content: 'Hi, I have a question about the course',
        sender: 'Sarah Johnson',
        timestamp: new Date(Date.now() - 3600000),
        isRead: true
      },
      {
        id: '2',
        content: 'When is the next assignment due?',
        sender: 'Sarah Johnson',
        timestamp: new Date(),
        isRead: false
      }
    ]
  },
  {
    id: '2',
    name: 'Michael Chen',
    lastMessage: 'Thanks for the feedback!',
    timestamp: new Date(Date.now() - 86400000),
    unread: 0,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    messages: [
      {
        id: '3',
        content: 'Thanks for the feedback!',
        sender: 'Michael Chen',
        timestamp: new Date(Date.now() - 86400000),
        isRead: true
      }
    ]
  }
];

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;

    // In a real app, this would be handled by the backend
    console.log('Sending message:', newMessage);
    setNewMessage('');
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      <ChatList
        chats={mockChats}
        selectedChatId={selectedChat?.id || null}
        onChatSelect={(chatId) => setSelectedChat(mockChats.find(c => c.id === chatId) || null)}
      />
      
      {selectedChat ? (
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-800 flex items-center gap-3">
            <img
              src={selectedChat.avatar}
              alt={selectedChat.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="text-white font-medium">{selectedChat.name}</h2>
              <p className="text-sm text-gray-400">Active now</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {selectedChat.messages.map(message => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === selectedChat.name ? 'justify-start' : 'justify-end'
                }`}
              >
                <div
                  className={`max-w-[70%] rounded-lg px-4 py-2 ${
                    message.sender === selectedChat.name
                      ? 'bg-gray-800'
                      : 'bg-cyan-500/20 text-cyan-400'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs text-gray-400 mt-1">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="p-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-400">
          <div className="text-center">
            <MessageSquare className="w-12 h-12 mx-auto mb-4" />
            <p>Select a conversation to start messaging</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages;