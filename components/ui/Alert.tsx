"use client";

interface AlertProps {
  message: string;
  type?: "success" | "error" | "info" | "warning";
}

export default function Alert({ message, type = "info" }: AlertProps) {
  const alertStyles = {
    success: "bg-green-100 text-green-700",
    error: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
    warning: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className={`p-4 rounded-md ${alertStyles[type]}`}>
      {message}
    </div>
  );
}
