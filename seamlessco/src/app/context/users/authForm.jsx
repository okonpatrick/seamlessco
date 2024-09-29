import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthForm({ isLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    dateofbirth: '',
    gender: '',
    confirmpassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true); 

    const url = isLogin ? 'https://seamlessco-backend.onrender.com/auth/signin' : 'https://seamlessco-backend.onrender.com/auth/signup';
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isLogin ? 
          { email: formData.email, password: formData.password } : 
          formData
        ),
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Authentication failed');
      }

      const data = await response.json();
      console.log('Authentication successful', data);
      setLoading(false); // Stop loading after successful authentication
      // Redirect to profile page or dashboard
      router.push('/users/userprofile');
    } catch (err) {
      setLoading(false); // Stop loading on error
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
    <h2 className="text-2xl font-semibold text-center">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
    {error && <p className="text-red-500 text-center font-bold text-2xl">{error}!</p>}

    <div className="space-y-4">
      {!isLogin && (
        <>
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name:</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {!isLogin && (
        <>
          <div>
            <label htmlFor="dateofbirth" className="block text-sm font-medium text-gray-700">Date of Birth:</label>
            <input
              type="date"
              id="dateofbirth"
              name="dateofbirth"
              value={formData.dateofbirth}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

         
        </>
      )}

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>

{!isLogin && (
  <div>
  <label htmlFor="confirmpassword" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
  <input
    type="password"
    id="confirmpassword"
    name="confirmpassword"
    value={formData.confirmpassword}
    onChange={handleChange}
    required
    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
  />
</div>

)}
    
    <button
      type="submit"
      className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    disabled={loading} // Disable the button while loading
    >
      {/* {isLogin ? 'Login' : 'Sign Up'} */}
      {loading ? 'Sending...' : isLogin ? 'Login' : 'Sign Up'}
    </button>
  </form>
 );
}
