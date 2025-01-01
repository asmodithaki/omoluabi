"use client";

import { useEffect } from "react";

interface ActivityTrackerProps {
  idleTimeout?: number; // Time in milliseconds before the user is considered idle (default: 5 minutes)
  onIdle?: () => void; // Callback triggered when the user is idle
  onActive?: () => void; // Callback triggered when the user becomes active
}

const ActivityTracker: React.FC<ActivityTrackerProps> = ({
  idleTimeout = 300000, // Default idle timeout: 5 minutes
  onIdle = () => console.log("User is idle"), // Default idle callback
  onActive = () => console.log("User is active"), // Default active callback
}) => {
  useEffect(() => {
    let lastActivityTime = Date.now();
    let isIdle = false;

    const handleActivity = () => {
      lastActivityTime = Date.now();

      if (isIdle) {
        isIdle = false;
        onActive(); // Trigger active callback
      }
    };

    const checkIdleStatus = () => {
      if (!isIdle && Date.now() - lastActivityTime > idleTimeout) {
        isIdle = true;
        onIdle(); // Trigger idle callback
      }
    };

    const activityEvents = ["mousemove", "keydown", "click", "scroll"];
    activityEvents.forEach((event) =>
      window.addEventListener(event, handleActivity)
    );

    const idleInterval = setInterval(checkIdleStatus, 1000); // Check idle status every second

    // Cleanup event listeners and interval on unmount
    return () => {
      activityEvents.forEach((event) =>
        window.removeEventListener(event, handleActivity)
      );
      clearInterval(idleInterval);
    };
  }, [idleTimeout, onIdle, onActive]);

  return null; // No UI for this component, as it only tracks activity
};

export default ActivityTracker;
