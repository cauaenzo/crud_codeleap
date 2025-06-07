import { useState } from 'react';
import PostCard from '../components/PostCard';
import CreatePost from '../components/CreatePost';

type FeedProps = {
  username: string;
  onLogout: () => void;
};

export default function Feed({ username, onLogout }: FeedProps) {
  const [posts, setPosts] = useState<{
    id: number;
    title: string;
    content: string;
    username: string;
  }[]>([]);

  const addPost = (title: string, content: string) => {
    const newPost = {
      id: Date.now(),
      title,
      content,
      username,
    };
    setPosts([newPost, ...posts]);
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Bem-vindo, {username}!</h1>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <h2 className="text-2xl font-bold mb-4">Hello @{username}</h2>
      <CreatePost onSubmit={addPost} />
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          canDelete={post.username === username}
          onDelete={deletePost}
        />
      ))}
    </div>
  );
}
