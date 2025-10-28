import {Suspense, use, useMemo} from 'react';

async function commentsPromise(): Promise<{}[] | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve([{id: 1, text: "comment1"}, {id: 2, text: "comment2"}, {id: 3, text: "comment3"}]);
    }, 5000);
  });
}


function Comments({ commentsPromise }) {
  // `use` will suspend until the promise resolves.
  const comments = use(commentsPromise);
  return comments.map(comment => <p key={comment.id}>{comment.text}</p>);
}

export function CommentsPage() {
  const promise = useMemo(() => commentsPromise(), []);
  // When `use` suspends in Comments,
  // this Suspense boundary will be shown.
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comments commentsPromise={promise} />
    </Suspense>
  )
}