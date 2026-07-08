import { useMemo, useState } from 'react';
import type { Task } from '../data/tasks';

export function SelfAssessment({ tasks }: { tasks: Task[] }) {
  const [points, setPoints] = useState<Record<string, number>>({});
  const maxPoints = tasks.reduce((sum, task) => sum + task.points, 0);
  const achievedPoints = useMemo(
    () => Object.values(points).reduce((sum, value) => sum + (Number(value) || 0), 0),
    [points],
  );
  const percentage = Math.round((achievedPoints / maxPoints) * 100) || 0;
  const rating = percentage < 50 ? 'kritisch' : percentage < 67 ? 'ausreichend' : percentage < 81 ? 'solide' : 'gut/sehr gut';

  return (
    <section className="assessment">
      <h2>Selbstbewertung</h2>
      {tasks.flatMap((task) =>
        task.parts.map((part) => (
          <label key={`${task.id}:${part.id}`}>
            {part.label} ({part.points} P)
            <input
              type="number"
              min="0"
              max={part.points}
              onChange={(event) =>
                setPoints((current) => ({
                  ...current,
                  [`${task.id}:${part.id}`]: Number(event.target.value),
                }))
              }
            />
          </label>
        )),
      )}
      <strong>
        Summe: {achievedPoints}/{maxPoints} Punkte · {percentage}% · {rating}
      </strong>
    </section>
  );
}
