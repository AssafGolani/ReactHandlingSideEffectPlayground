import { useEffect, useState } from "react";
export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("INTERVAL");
      setRemainingTime((prevRemainingTime) => {
        return prevRemainingTime - 10;
      });
    }, 10);

    return () => {
      clearInterval(interval);
      console.log("CLEANUP");
    };
  }, []);
  return <progress value={remainingTime} max={timer} />;
}
