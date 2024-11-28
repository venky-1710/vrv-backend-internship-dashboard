import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          {user ? (
            <>
              <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
              {(user.role === 'admin' || user.role === 'manager') && (
                <Link to="/manager" className="hover:text-gray-300">Manager</Link>
              )}
              {user.role === 'admin' && (
                <Link to="/admin" className="hover:text-gray-300">Admin</Link>
              )}
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300">Login</Link>
              <Link to="/register" className="hover:text-gray-300">Register</Link>
            </>
          )}
        </div>
        {user && (
          <div className="flex items-center space-x-4">
            <span>Welcome, {user.username}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;