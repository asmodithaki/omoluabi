"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary" | "success" | "danger" | "warning" | "info";
  disabled?: boolean;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const baseStyle = "px-4 py-2 rounded-md text-white font-medium";
  
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    tertiary: "bg-teal-500 hover:bg-teal-600", // New variant
    success: "bg-green-500 hover:bg-green-600", // New variant
    danger: "bg-red-500 hover:bg-red-600", // New variant
    warning: "bg-yellow-500 hover:bg-yellow-600", // New variant
    info: "bg-indigo-500 hover:bg-indigo-600", // New variant
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
}
