import { useState, useEffect } from "react";

interface Todo {
    id: number;
    title: string;
}

export default function FetchTodosAPI(){

    const [todoData, setTodoData] = useState<Todo[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorData, setErrorData] = useState<string | null>(null)
    const dataAPI = 'https://jsonplaceholder.typicode.com/todos?_limit=5'

  useEffect(() => {

    const fetchData = async () => {

        try {
            const response = await fetch(dataAPI)

            if (!response.ok) {

                throw new Error('Error fetching data, please check your api')
            }

            const result = await response.json()
            setTodoData(result)

        } catch (err: unknown) {
            if (err instanceof Error) {
                setErrorData(err.message)
            } else {
                setErrorData('An unknown error occurred')
            }
        } finally {
            setIsLoading(false)
        }
    };

    fetchData();

  }, []);

  if(isLoading) return <p>Loading...</p>
  if(errorData) return <p>Error: {errorData}</p>


    return (
        <>
        <ul>
           {
            todoData.map((todo) => (
                <li key={todo.id}> {todo.title} </li>
            ))
           }
        </ul>
        </>
    )
}