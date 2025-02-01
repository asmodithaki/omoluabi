"use client";

import { useEffect, useCallback } from "react";

interface ActivityTrackerProps {
  idleTimeout?: number; // Time in milliseconds before the user is considered idle (default: 5 minutes)
  onIdle?: () => void; // Callback triggered when the user is idle
  onActive?: () => void; // Callback triggered when the user becomes active
}

const ActivityTracker: React.FC<ActivityTrackerProps> = ({
  idleTimeout = 300000,
  onIdle = () => console.log("User is idle"),
  onActive = () => console.log("User is active"),
}) => {
  const handleIdle = useCallback(onIdle, [onIdle]);
  const handleActive = useCallback(onActive, [onActive]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let lastActivityTime = Date.now();
    let isIdle = false;

    const handleActivity = () => {
      lastActivityTime = Date.now();
      if (isIdle) {
        isIdle = false;
        handleActive();
      }
    };

    const checkIdleStatus = () => {
      if (!isIdle && Date.now() - lastActivityTime > idleTimeout) {
        isIdle = true;
        handleIdle();
      }
    };

    const activityEvents = ["mousemove", "keydown", "click", "scroll"];
    activityEvents.forEach((event) =>
      window.addEventListener(event, handleActivity)
    );

    const idleInterval = setInterval(checkIdleStatus, 1000);

    return () => {
      activityEvents.forEach((event) =>
        window.removeEventListener(event, handleActivity)
      );
      clearInterval(idleInterval);
    };
  }, [idleTimeout, handleIdle, handleActive]);

  return null; // No UI for this component
};

export default ActivityTracker;
