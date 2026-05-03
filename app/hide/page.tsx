'use client';

import { useState } from 'react';

const SAMPLE_NOTES = [
  { id: 1, title: 'Grocery list', body: 'Milk, eggs, bread, apples, pasta, olive oil' },
  { id: 2, title: 'Call back', body: 'Dr. Martinez — (555) 204-8811\nSalon appointment — ask about Thursday' },
  { id: 3, title: 'Recipe ideas', body: 'Try chicken soup with rice\nBake banana bread this weekend' },
];

export default function HidePage() {
  const [notes] = useState(SAMPLE_NOTES);
  const [active, setActive] = useState(SAMPLE_NOTES[0]);
  const [body, setBody] = useState(SAMPLE_NOTES[0].body);

  function select(note: typeof SAMPLE_NOTES[0]) {
    setActive(note);
    setBody(note.body);
  }

  return (
    <div style={{ display: 'flex', height: '100vh', background: '#f5f5f0' }}>
      {/* Sidebar */}
      <div style={{
        width: 220,
        background: '#eeeee8',
        borderRight: '1px solid #d8d8d0',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{ padding: '16px 16px 8px', fontWeight: 700, fontSize: 18, color: '#333' }}>
          Notes
        </div>
        <div style={{ padding: '0 8px', marginBottom: 8 }}>
          <input
            placeholder="Search"
            style={{
              width: '100%',
              padding: '5px 10px',
              borderRadius: 8,
              border: '1px solid #ccc',
              fontSize: 13,
              background: '#fff',
              boxSizing: 'border-box',
            }}
          />
        </div>
        {notes.map(n => (
          <div
            key={n.id}
            onClick={() => select(n)}
            style={{
              padding: '10px 16px',
              cursor: 'pointer',
              background: active.id === n.id ? '#fff' : 'transparent',
              borderLeft: active.id === n.id ? '3px solid #f5a623' : '3px solid transparent',
              marginBottom: 2,
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 13, color: '#222' }}>{n.title}</div>
            <div style={{ fontSize: 11, color: '#888', marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {n.body.split('\n')[0]}
            </div>
          </div>
        ))}
      </div>

      {/* Editor */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: 24 }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#333', marginBottom: 12 }}>
          {active.title}
        </div>
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontSize: 14,
            lineHeight: 1.7,
            color: '#333',
            resize: 'none',
            fontFamily: 'system-ui, sans-serif',
          }}
        />
      </div>
    </div>
  );
}
