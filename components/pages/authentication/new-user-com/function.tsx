"use client"
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NewUser: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect the user after 5 seconds or upon condition
    setTimeout(() => {
      router.push("/signin");
    }, 5000);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Welcome to Our Platform!
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Congratulations! Your account has been created successfully.
        </p>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          You will be redirected to the sign-in page in a few seconds...
        </p>
      </div>
    </div>
  );
};

export default NewUser;
