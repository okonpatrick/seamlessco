'use client';

import { AuthProvider } from '../context/AuthContext';

export function UserProviders({ children }) {
  return (
      <AuthProvider>{children}</AuthProvider>
  );
}