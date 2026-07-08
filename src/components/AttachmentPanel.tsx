import type { Attachment } from '../data/tasks';

export function AttachmentPanel({ attachments = [] }: AttachmentPanelProps) {
  if (!attachments.length) return null;

  return (
    <aside className="attachment-box">
      <strong>Anlagen</strong>
      {attachments.map((attachment) => (
        <details key={attachment.id}>
          <summary>{attachment.title}</summary>
          <AttachmentContent attachment={attachment} />
        </details>
      ))}
    </aside>
  );
}

type AttachmentPanelProps = {
  attachments?: Attachment[];
};

function AttachmentContent({ attachment }: { attachment: Attachment }) {
  const content = attachment.content as { headers?: string[]; rows?: string[][] };

  if (attachment.type === 'table' && content.headers && content.rows) {
    return (
      <table className="exam-table">
        <thead>
          <tr>
            {content.headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td key={columnIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return <p>{String(attachment.content)}</p>;
}
