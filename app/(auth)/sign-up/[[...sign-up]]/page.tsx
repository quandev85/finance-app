'use client';

import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Create an Account</h1>
        <p className="mt-2 text-gray-600">
          Sign up to get started with our platform.
        </p>
      </div>
      <SignUp
        appearance={{
          elements: {
            formButtonPrimary: 'bg-black hover:bg-gray-800 text-sm normal-case',
          },
        }}
      />
    </>
  );
}
