import React from 'react';

function LoginPage() {
  return (
    <div
  className="min-h-screen flex items-center justify-center p-6 sm:p-8 lg:p-10 bg-gray-100 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/free-photo/arrangement-black-friday-shopping-carts-with-copy-space_23-2148667047.jpg?ga=GA1.1.239137312.1743675857&semt=ais_hybrid&w=740')",
  }}
    >
      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Login card */}
      <div className="relative z-10 bg-red-200 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Login</h2>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Don’t have an account?{' '}
          <a href="/signup" className="text-indigo-600 hover:underline font-medium">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
