import { useState, useEffect } from "react";

interface Todo {
  id: number;
  title: string;
}

export default function FetchTodosAPI() {
  const [todoData, setTodoData] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorData, setErrorData] = useState<string | null>(null);
  const dataAPI = 'https://jsonplaceholder.typicode.com/todos?_limit=5';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(dataAPI);
        if (!response.ok) {
          throw new Error('Error fetching data, please check your api');
        }
        const result = await response.json();
        setTodoData(result);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setErrorData(err.message);
        } else {
          setErrorData('An unknown error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  // Loading State with Tailwind Animate-Pulse
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="flex space-x-2 animate-pulse">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
        </div>
        <span className="ml-3 text-slate-500 font-medium">Loading Tasks...</span>
      </div>
    );
  }

  // Error State with an Alert Box
  if (errorData) {
    return (
      <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 border border-red-200" role="alert">
        <span className="font-bold">Error:</span> {errorData}
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto my-10 bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100">
      <div className="px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-700">
        <h2 className="text-xl font-bold text-white">My Todo List</h2>
        <p className="text-blue-100 text-sm">Fetched from JSONPlaceholder</p>
      </div>

      <ul className="divide-y divide-slate-100">
        {todoData.map((todo) => (
          <li 
            key={todo.id} 
            className="px-6 py-4 flex items-center hover:bg-slate-50 transition-colors duration-200"
          >
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-xs mr-4">
              {todo.id}
            </div>
            <span className="text-slate-700 font-medium capitalize">
              {todo.title}
            </span>
          </li>
        ))}
      </ul>

      <div className="px-6 py-3 bg-slate-50 text-right">
        <span className="text-xs text-slate-400 font-mono">Status: Connected</span>
      </div>
    </div>
  );
}