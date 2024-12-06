import { User } from '../types';

// Simulated authentication state
let currentUser: User | null = null;

export const getCurrentUser = (): User | null => {
  return currentUser;
};

export const login = (email: string, password: string): Promise<User> => {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'admin@example.com' && password === 'password') {
        currentUser = {
          id: '1',
          name: 'John Doe',
          email: 'admin@example.com',
          role: 'admin',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        };
        resolve(currentUser);
      } else if (email === 'instructor@example.com' && password === 'password') {
        currentUser = {
          id: '2',
          name: 'Sarah Johnson',
          email: 'instructor@example.com',
          role: 'instructor',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        };
        resolve(currentUser);
      } else if (email === 'student@example.com' && password === 'password') {
        currentUser = {
          id: '3',
          name: 'Mike Wilson',
          email: 'student@example.com',
          role: 'student',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        };
        resolve(currentUser);
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

export const logout = (): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      currentUser = null;
      resolve();
    }, 500);
  });
};

export const isAuthenticated = (): boolean => {
  return currentUser !== null;
};

export const hasRole = (roles: User['role'][]): boolean => {
  if (!currentUser) return false;
  return roles.includes(currentUser.role);
};