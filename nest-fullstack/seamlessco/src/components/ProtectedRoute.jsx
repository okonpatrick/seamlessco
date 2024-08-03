// import { useRouter } from 'next/router';

// 'use client';
// import { useEffect } from 'react';
// import { useAuth } from '../components/context/AuthContext';
// import { useNavigation } from'next/navigation';

// const ProtectedRoute = ({ children }) => {
//   const { user } = useAuth();
//   const { navigate } = useNavigation(); // Use useNavigation for navigation

//   useEffect(() => {
//     if (!user) {
//       navigate('/auth/signin');
//     }
//   }, [user, router]);

//   return user ? children : null;
// };

// export default ProtectedRoute;



// src/components/ProtectedRoute.jsx
'use client';
import { useEffect } from 'react';
import { useAuth } from '../components/context/AuthContext';
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
