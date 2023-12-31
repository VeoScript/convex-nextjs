"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import DeleteAllModal from "./(components)/DeleteAllModal";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const todos = useQuery(api.todos.get);
  const updateTodo = useMutation(api.todos.updateTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen px-5 py-3 md:px-0 md:py-0 gap-y-5">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-xl gap-y-3 md:gap-y-0">
          <h1 className="font-bold text-base">Convex + NextJS</h1>
          <div className="flex flex-row items-center overflow-hidden rounded-xl">
            <Link
              href="/create"
              className="w-auto outline-none px-3 py-1 text-sm text-white bg-blue-600 transition-all ease-in-out duration-200 hover:bg-opacity-50"
            >
              Add
            </Link>
            <button
              type="button"
              className="w-auto outline-none px-3 py-1 text-sm text-white bg-red-600 transition-all ease-in-out duration-200 hover:bg-opacity-50"
              onClick={async () => setIsOpen(true)}
            >
              Delete all
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center w-full max-w-xl p-3 space-y-3 rounded-xl border border-neutral-700 bg-accent-2">
          {todos === undefined && (
            <h2 className="mt-3 font-light text-sm">Loading...</h2>
          )}
          {todos?.length === 0 && (
            <h2 className="mt-3 font-light text-sm">No task as of now...</h2>
          )}
          <ul className="flex flex-col items-center w-full space-y-3">
            {todos?.map((todo) => (
              <li
                key={todo._id}
                className={clsx(
                  "flex flex-row items-center justify-between w-full p-3 rounded-xl bg-accent-3",
                  todo.done
                    ? "line-through decoration-blue-500 text-blue-500"
                    : "no-underline text-white"
                )}
              >
                <span>{todo.title}</span>
                <div className="flex flex-row items-center space-x-3">
                  {todo.done ? (
                    <button
                      type="button"
                      className="outline-none transition ease-in-out duration-200 transform hover:scale-110"
                      onClick={async () => {
                        await updateTodo({
                          _id: todo._id,
                          done: todo.done ? false : true,
                        });
                      }}
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
                      onClick={async () => {
                        await updateTodo({
                          _id: todo._id,
                          done: todo.done ? false : true,
                        });
                      }}
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
                  <button
                    type="button"
                    className="outline-none transition ease-in-out duration-200 transform hover:scale-110"
                    onClick={async () => {
                      await deleteTodo({
                        _id: todo._id,
                      });
                    }}
                  >
                    <svg
                      className="fill-current w-6 h-6 text-neutral-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                      />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <DeleteAllModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
