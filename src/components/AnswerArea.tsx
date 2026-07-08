import type { TaskPart } from '../data/tasks';

export function AnswerArea({ part, value, onChange }: AnswerAreaProps) {
  if (part.answerType === 'table' && part.table) {
    return (
      <table className="exam-table">
        <thead>
          <tr>
            {part.table.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {part.table.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cellValue, columnIndex) => (
                <td key={columnIndex}>
                  {part.table?.answerColumns?.includes(columnIndex) ? (
                    <input
                      value={cell(value, rowIndex, columnIndex, cellValue)}
                      onChange={(event) => onChange(setCell(value, rowIndex, columnIndex, event.target.value))}
                    />
                  ) : (
                    cellValue
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  if (['diagram', 'uml', 'network'].includes(part.answerType)) {
    return (
      <textarea
        className="diagram-box"
        rows={part.rows ?? 8}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Skizze/Beschreibung hier eintragen"
      />
    );
  }

  if (part.answerType === 'code') {
    return (
      <textarea
        className="code-answer"
        rows={part.rows ?? 8}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    );
  }

  return (
    <textarea
      className="answer-lines"
      rows={part.rows ?? 5}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

type AnswerAreaProps = {
  part: TaskPart;
  value: string;
  onChange: (value: string) => void;
};

function parse(value: string): Record<string, string> {
  try {
    return JSON.parse(value || '{}') as Record<string, string>;
  } catch {
    return {};
  }
}

function cell(value: string, rowIndex: number, columnIndex: number, fallback: string): string {
  return parse(value)[`${rowIndex}:${columnIndex}`] ?? fallback;
}

function setCell(value: string, rowIndex: number, columnIndex: number, next: string): string {
  const data = parse(value);
  data[`${rowIndex}:${columnIndex}`] = next;
  return JSON.stringify(data);
}
