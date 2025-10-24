import { useState, useTransition } from "react";

async function updateName(name: string): Promise<string | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
        resolve(null);
    }, 5000);
  });
}

function redirect(path: string) {
  console.log(`Redirecting to: ${path}`);
  // In a real application, you would use a router here, e.g., navigate(path)
}


export function UpdateName({}) {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      } 
    })
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}