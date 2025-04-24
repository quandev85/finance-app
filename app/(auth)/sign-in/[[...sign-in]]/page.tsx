'use client';

import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <p className="mt-2 text-gray-600">Welcome back! Please sign in to your account.</p>
      </div>
      <SignIn appearance={{
          elements: {
            formButtonPrimary: 'bg-black hover:bg-gray-800 text-sm normal-case',
          },
      }} />
    </div>
  );
}
