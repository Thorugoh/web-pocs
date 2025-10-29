import { Suspense, use, useMemo } from 'react';

type Comment = { id: number; text: string };

async function commentsPromise(): Promise<Comment[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, text: 'comment1' },
        { id: 2, text: 'comment2' },
        { id: 3, text: 'comment3' },
      ]);
    }, 5000);
  });
}

function Comments({ promise }: { promise: Promise<Comment[]> }) {
  // `use` will suspend until the promise resolves.
  const comments = use(promise);
  return (
    <>
      {comments.map((comment) => (
        <p key={comment.id}>{comment.text}</p>
      ))}
    </>
  );
}

export function CommentsPage() {
  const promise = useMemo(() => commentsPromise(), []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comments promise={promise} />
    </Suspense>
  );
}