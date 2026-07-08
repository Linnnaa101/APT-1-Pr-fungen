import type { TaskPart } from '../data/tasks';
export function AnswerArea({ part, value, onChange }: { part: TaskPart; value: string; onChange: (v: string)=>void }) {
  if (part.answerType === 'table' && part.table) return <table className="exam-table"><thead><tr>{part.table.headers.map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{part.table.rows.map((r,i)=><tr key={i}>{r.map((c,j)=><td key={j}>{part.table?.answerColumns?.includes(j)?<input value={cell(value,i,j,c)} onChange={e=>onChange(setCell(value,i,j,e.target.value))} />:c}</td>)}</tr>)}</tbody></table>;
  if (['diagram','uml','network'].includes(part.answerType)) return <textarea className="diagram-box" rows={part.rows ?? 8} value={value} onChange={e=>onChange(e.target.value)} placeholder="Skizze/Beschreibung hier eintragen" />;
  if (part.answerType === 'code') return <textarea className="code-answer" rows={part.rows ?? 8} value={value} onChange={e=>onChange(e.target.value)} />;
  return <textarea className="answer-lines" rows={part.rows ?? 5} value={value} onChange={e=>onChange(e.target.value)} />;
}
function parse(v:string){ try { return JSON.parse(v || '{}') as Record<string,string>; } catch { return {}; } }
function cell(v:string,i:number,j:number,fallback:string){ return parse(v)[`${i}:${j}`] ?? fallback; }
function setCell(v:string,i:number,j:number,next:string){ const data=parse(v); data[`${i}:${j}`]=next; return JSON.stringify(data); }
