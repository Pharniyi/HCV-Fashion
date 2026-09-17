import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/useAuthStore';

const ProfilePage = () => {
  const { authUser, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const success = await logout();
    if (success) navigate('/login');
  };

  if (!authUser) {
    return (
      <div className="flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Please log in to view your profile</h2>
          <Link to="/login" className="bg-black px-6 py-3 text-sm font-medium uppercase tracking-wider text-white">
            Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex items-center justify-between gap-4 border-b border-gray-200 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Account</p>
            <h1 className="mt-2 text-3xl font-serif">{authUser.fullName || 'My Profile'}</h1>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
          >
            Sign Out
          </button>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Name</p>
            <p className="mt-2 text-lg font-medium">{authUser.fullName}</p>
          </div>

          <div className="rounded-lg bg-gray-50 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Email</p>
            <p className="mt-2 text-lg font-medium">{authUser.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;