"use client"
import React, { useState } from 'react';
import Router from 'next/router';

const Draft = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const submitData = async (e) => {
    e.preventDefault();
    try {
      const body = { title, content };
      console.log(body)
      await fetch('/api/article', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log('new data added')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={submitData}>
      <h1>New Draft</h1>
      <input
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        type="text"
        value={title}
      />
      <textarea
        cols={50}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        rows={8}
        value={content}
      />
      <input disabled={!content || !title} type="submit" value="Create" />
    </form>
  );
};

export default Draft;
