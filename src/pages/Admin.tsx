import React, { useState } from 'react';
import { Users, Activity, Settings, Trash2, UserCheck } from 'lucide-react';
import Tabs from '../components/common/Tabs';
import Badge from '../components/common/Badge';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  lastActive: Date;
  status: 'active' | 'inactive' | 'suspended';
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Student',
    lastActive: new Date(),
    status: 'active'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    role: 'Instructor',
    lastActive: new Date(Date.now() - 3600000),
    status: 'active'
  }
];

const Admin = () => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

  const tabs = [
    {
      id: 'users',
      label: 'Users',
      content: (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-white">User Management</h3>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors">
                Add User
              </button>
              {selectedUsers.length > 0 && (
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                  Delete Selected
                </button>
              )}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-700">
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedUsers(mockUsers.map(user => user.id));
                        } else {
                          setSelectedUsers([]);
                        }
                      }}
                      className="rounded border-gray-600 text-cyan-500 focus:ring-cyan-500"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Last Active
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {mockUsers.map(user => (
                  <tr key={user.id} className="hover:bg-gray-700">
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedUsers.includes(user.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedUsers([...selectedUsers, user.id]);
                          } else {
                            setSelectedUsers(selectedUsers.filter(id => id !== user.id));
                          }
                        }}
                        className="rounded border-gray-600 text-cyan-500 focus:ring-cyan-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-white">{user.name}</p>
                        <p className="text-sm text-gray-400">{user.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        text={user.role}
                        variant={user.role === 'Instructor' ? 'success' : 'default'}
                      />
                    </td>
                    <td className="px-6 py-4">
                      <Badge
                        text={user.status}
                        variant={
                          user.status === 'active'
                            ? 'success'
                            : user.status === 'inactive'
                            ? 'warning'
                            : 'error'
                        }
                      />
                    </td>
                    <td className="px-6 py-4 text-gray-400">
                      {user.lastActive.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      <button className="text-cyan-400 hover:text-cyan-300">
                        Edit
                      </button>
                      <button className="text-red-400 hover:text-red-300">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'activity',
      label: 'Activity',
      content: (
        <div className="space-y-6">
          <h3 className="text-lg font-medium text-white">System Activity</h3>
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="space-y-4">
              {/* Activity log items would go here */}
              <p className="text-gray-400">Activity log coming soon...</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">Manage users, view system activity, and configure settings</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-cyan-500/20 rounded-lg">
              <Users className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <p className="text-gray-400">Total Users</p>
              <p className="text-2xl font-semibold text-white">1,234</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-500/20 rounded-lg">
              <Activity className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-gray-400">Active Now</p>
              <p className="text-2xl font-semibold text-white">42</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-500/20 rounded-lg">
              <Settings className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-gray-400">System Load</p>
              <p className="text-2xl font-semibold text-white">23%</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-500/20 rounded-lg">
              <Trash2 className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <p className="text-gray-400">Deleted Items</p>
              <p className="text-2xl font-semibold text-white">7</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

export default Admin;