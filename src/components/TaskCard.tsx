import type { Task } from '../data/tasks';
import { solutionFor } from '../data/solutions';
import { AnswerArea } from './AnswerArea';
import { AttachmentPanel } from './AttachmentPanel';
import { PointsBadge } from './PointsBadge';
export function TaskCard({ task, index, answers, setAnswer, showSolutions }: { task: Task; index: number; answers: Record<string,string>; setAnswer:(key:string,value:string)=>void; showSolutions:boolean }) {
 return <section className="task-block" id={task.id}><div className="task-title"><span className="task-number">Aufgabe {index+1}</span><h2>{task.title}</h2><PointsBadge points={task.points}/></div><p>{task.intro}</p><AttachmentPanel attachments={task.attachments}/>{task.parts.map(part=>{ const key=`${task.id}:${part.id}`; return <div className="task-part" key={part.id}><div className="part-head"><strong>{part.label}</strong><span>{part.text}</span><PointsBadge points={part.points}/></div><AnswerArea part={part} value={answers[key]??''} onChange={v=>setAnswer(key,v)}/>{showSolutions && <div className="solution"><strong>Musterlösung:</strong> {solutionFor(task, part.id)}</div>}</div>})}</section>;
}
