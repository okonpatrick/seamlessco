// src/components/ProtectedRoute.jsx
'use client';
import { useEffect } from 'react';
import { useAuth } from '../app/context/AuthContext';
import { useRouter } from 'next/navigation'; // Correct hook for navigation in Next.js

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  return user ? children : null;
};

export default ProtectedRoute;
