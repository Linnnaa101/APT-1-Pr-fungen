import type { Task } from '../data/tasks';
export function NavigationPanel({ tasks, current }: { tasks: Task[]; current: number }) { return <nav className="nav-panel"><strong>Navigation</strong>{tasks.map((t,i)=><a className={i===current?'active':''} key={t.id} href={`#${t.id}`}>Aufgabe {i+1}<small>{t.points} P</small></a>)}</nav>; }
