"use client";

interface InputProps {
  type?: string;
  value: string;
  onChangeAction: (e: React.ChangeEvent<HTMLInputElement>) => void; // Renamed to indicate it's a Server Action
  placeholder?: string;
}

export default function Input({
  type = "text",
  value,
  onChangeAction,
  placeholder = "",
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChangeAction} // Updated to use the new name
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}