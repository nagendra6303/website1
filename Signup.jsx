import React from 'react';

function Signup() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage:
          "url('data:image/jpeg;base64,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')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600">Sign Up</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
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
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
