import { createClient } from "@/utils/supabase/server";

type Todo = {
  id: number | string;
  name: string;
};

export default async function TodosPage() {
  const supabase = await createClient();
  const { data: todos, error } = await supabase.from("todos").select("id, name");

  return (
    <main style={{ fontFamily: "sans-serif", margin: "3rem auto", maxWidth: 720, padding: "0 1rem" }}>
      <h1>Todos from Supabase</h1>
      {error ? (
        <p role="alert">Could not load todos: {error.message}</p>
      ) : todos?.length ? (
        <ul>
          {(todos as Todo[]).map((todo) => <li key={todo.id}>{todo.name}</li>)}
        </ul>
      ) : (
        <p>Connected to Supabase. There are no todos to show yet.</p>
      )}
    </main>
  );
}
