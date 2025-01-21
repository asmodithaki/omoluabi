"use client";

import { useState, useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside"; // A custom hook to handle click outside events

interface DropdownProps {
  items: string[];
  onItemSelectAction: (item: string) => void; // Renamed for serialization compliance
  buttonLabel?: string; // Optional label for the dropdown button
}

export default function ResponsiveDropdown({ items, onItemSelectAction, buttonLabel = "Select" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Nullable type to match the updated hook

  // Close the dropdown when clicking outside
  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
      >
        {buttonLabel}
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white dark:bg-gray-800 shadow-md rounded-md z-10">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                onItemSelectAction(item); // Updated to the new prop name
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-left text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
