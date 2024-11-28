import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p>Welcome to your dashboard!</p>
        <p>Role: {user.role}</p>
      </div>
    </div>
  );
};

export default Dashboard;