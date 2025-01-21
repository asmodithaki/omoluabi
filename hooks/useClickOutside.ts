"use client";

import { useEffect, RefObject } from "react";

type EventCallback = () => void;

export default function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>, // Accepts nullable types
  callback: EventCallback
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
