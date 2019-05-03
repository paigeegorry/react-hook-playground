import React, { useState } from 'react';

export default function Form() {
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('black');

  return (
    <div>
      <h2 style={{ color }}>{title}</h2>
      <input type="text" name="title" value={title} onChange={({ target }) => setTitle(target.value)}/>
      <input type="color" name="color" value={color} onChange={({ target }) => setColor(target.value)} />
    </div>
  );
}
