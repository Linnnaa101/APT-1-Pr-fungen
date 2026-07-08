import { useEffect, useState } from 'react';

const examDurationInSeconds = 90 * 60;

export function Timer({ storageKey, running, onExpired }: TimerProps) {
  const [left, setLeft] = useState(() => readInitialTime(storageKey));

  useEffect(() => {
    if (!running) return undefined;

    const intervalId = window.setInterval(() => {
      setLeft((current) => {
        const next = Math.max(0, current - 1);
        localStorage.setItem(storageKey, String(next));

        if (next === 0) onExpired();

        return next;
      });
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [onExpired, running, storageKey]);

  return (
    <div className="timer">
      Restzeit: {Math.floor(left / 60).toString().padStart(2, '0')}:
      {(left % 60).toString().padStart(2, '0')}
    </div>
  );
}

type TimerProps = {
  storageKey: string;
  running: boolean;
  onExpired: () => void;
};

function readInitialTime(storageKey: string): number {
  return Number(localStorage.getItem(storageKey) ?? examDurationInSeconds);
}
