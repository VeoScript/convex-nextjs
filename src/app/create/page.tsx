"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

const CreateTodo = () => {
  const router = useRouter();

  const [task, setTask] = React.useState<string>("");

  const addTodo = useMutation(api.todos.addTodo);

  const handleAddTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addTodo({
      title: task,
    })
    router.push("/");
  }

  return (
    <>
      <div className="flex flex-row items-center justify-between w-full max-w-xl">
        <h1 className="font-bold text-xl">Add Task</h1>
        <div className="flex flex-row items-center overflow-hidden rounded-xl">
          <Link
            href="/"
            className="w-auto outline-none px-3 py-1 text-sm text-white bg-accent-3 transition-all ease-in-out duration-200 hover:bg-opacity-50"
          >
            Back
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center w-full max-w-xl p-3 space-y-3 rounded-xl border border-neutral-700 bg-accent-2">
        <form onSubmit={handleAddTask} className="flex flex-col w-full gap-y-3">
          <label htmlFor="task" className="text-sm ml-1">
            Task
          </label>
          <div className="flex flex-row w-full overflow-hidden rounded-xl">
            <input
              type="text"
              id="task"
              className="flex flex-row items-center justify-between w-full p-3 outline-none bg-accent-3"
              value={task}
              onChange={(e) => setTask(e.currentTarget.value)}
            />
            <button type="submit" className="outline-none px-3 bg-accent-3">
              <svg
                className="fill-current w-6 h-6 text-blue-600 transition ease-in-out duration-200 transform hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTodo;
