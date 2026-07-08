import type { Task } from '../data/tasks';

export function NavigationPanel({ tasks, current }: NavigationPanelProps) {
  return (
    <nav className="nav-panel">
      <strong>Navigation</strong>
      {tasks.map((task, index) => (
        <a className={index === current ? 'active' : ''} key={task.id} href={`#${task.id}`}>
          Aufgabe {index + 1}
          <small>{task.points} P</small>
        </a>
      ))}
    </nav>
  );
}

type NavigationPanelProps = {
  tasks: Task[];
  current: number;
};
