"use client";

import { useState } from "react";

interface DropdownProps {
  items: string[];
  onSelectAction: (item: string) => void; // Renamed to indicate it's a Server Action
}

export default function Dropdown({ items, onSelectAction }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-gray-200 rounded-md"
      >
        Select
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white shadow-md rounded-md w-full">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                onSelectAction(item); // Updated to use the new name
                setIsOpen(false);
              }}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}