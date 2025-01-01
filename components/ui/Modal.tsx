"use client";

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onCloseAction: () => void; // Renamed to indicate it's a Server Action
  children: React.ReactNode;
}

export default function Modal({ isOpen, onCloseAction, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-md shadow-md p-6 max-w-lg w-full">
        <button
          onClick={onCloseAction} // Updated to use the new name
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}