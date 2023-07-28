"use client";

import { useQuery } from "convex/react";

import { api } from "../../convex/_generated/api";
import clsx from "clsx";

export default function Home() {
  const todos = useQuery(api.todos.get);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen space-y-5">
      <h1 className="font-bold text-xl">Convex + NextJS</h1>
      <div className="flex flex-col items-center w-full max-w-xl p-3 space-y-3 rounded-xl border border-neutral-700 bg-accent-2">
        {todos === undefined && <h2>Loading...</h2>}
        <ul className="flex flex-col items-center w-full space-y-3">
          {todos?.map((todo) => (
            <li
              key={todo._id}
              className={clsx("flex flex-row items-center justify-between w-full p-3 rounded-xl bg-accent-3", todo.done ? 'line-through decoration-blue-500' : 'no-underline')}
            >
              <span>{todo.title}</span>
              {todo.done ? (
                <button
                  type="button"
                  className="outline-none transition ease-in-out duration-200 transform hover:scale-110"
                  onClick={() => console.log("Done/Undone")}
                >
                  <svg
                    className="fill-current w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  className="outline-none transition ease-in-out duration-200 transform hover:scale-110"
                  onClick={() => console.log("Done/Undone")}
                >
                  <svg
                    className="fill-current w-6 h-6 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 01-1.313-1.313V9.564z"
                    />
                  </svg>
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
