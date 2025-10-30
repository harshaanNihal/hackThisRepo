import { useOptimistic } from 'react';

async function likeOnServer(id: string) {
  await new Promise(r => setTimeout(r, 600));
  return true;
}

export default function LikeButton({ id, initialLikes }: { id: string; initialLikes: number }) {
  const [likes, addOptimisticLike] = useOptimistic(initialLikes, (prev) => prev + 1);

  async function handleClick() {
    addOptimisticLike(); // update immediately
    try {
      await likeOnServer(id);
    } catch {
      // roll back if needed (not shown)
    }
  }

  return (
    <button onClick={handleClick}>❤️ {likes}</button>
  );
}
