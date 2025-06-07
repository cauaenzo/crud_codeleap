import { useState } from 'react';

type Props = {
  onSubmit: (title: string, content: string) => void;
};

export default function CreatePost({ onSubmit }: Props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="bg-white shadow-md rounded-xl p-4 mb-6">
      <h3 className="font-semibold mb-2">What's on your mind?</h3>
      <input
        className="w-full border p-2 rounded mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full border p-2 rounded mb-2"
        rows={4}
        placeholder="Content here"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        className="bg-black text-white px-4 py-2 rounded"
        onClick={() => {
          if (title.trim() && content.trim()) {
            onSubmit(title, content);
            setTitle('');
            setContent('');
          }
        }}
      >
        CREATE
      </button>
    </div>
  );
}
