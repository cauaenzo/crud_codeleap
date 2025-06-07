type Props = {
  post: {
    id: number;
    title: string;
    content: string;
    username: string;
  };
  canDelete?: boolean;
  onDelete: (id: number) => void;
};

export default function PostCard({ post, canDelete, onDelete }: Props) {
  return (
    <div className="bg-white shadow rounded-xl mb-4">
      <div className="bg-black text-white px-4 py-2 rounded-t-xl flex justify-between">
        <span className="font-bold">{post.title}</span>
        {canDelete && (
          <button onClick={() => onDelete(post.id)}>Delete</button>
        )}
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-2">@{post.username}</p>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
