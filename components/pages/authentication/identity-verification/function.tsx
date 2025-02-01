"use client"
import { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const VerifyRequest: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Example: Redirect the user to the sign-in page after 5 seconds or upon some condition
    setTimeout(() => {
      router.push("/signin");
    }, 5000);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Please verify your email address
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          We have sent you a verification email. Please check your inbox (and spam folder) to verify your email address.
        </p>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          You will be redirected to the sign-in page in a few seconds...
        </p>
      </div>
    </div>
  );
};

export default VerifyRequest;
