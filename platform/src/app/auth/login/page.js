import React from 'react';
import Link from 'next/link';
import LoginForm from '../../components/Forms/LoginForm';

const Login = () => (
  <div className="max-w-[500px] mx-auto bg-white rounded-lg px-3 py-3 box-shadow sm:px-6 md:px-8">
    <div className="px-4 py-6 md:px-6 lg:px-8 login-box">
      <div className="mb-8 text-center space-y-2">
        <h1 className="text-2xl font-medium capitalize text-[#111827]">
          Welcome back
        </h1>
        <p className="text-sm">
          Don't have an account?{' '}
          <Link href="/auth/signup">
            <a className="text-[#111827]">Create account</a>
          </Link>
        </p>
      </div>
      <LoginForm />
    </div>
  </div>
);

export default Login;
