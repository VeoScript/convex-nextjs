import React from "react";

import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";

interface IProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

type DeleteAllModalType = (props: IProps) => JSX.Element;

const DeleteAllModal: DeleteAllModalType = ({ isOpen, setIsOpen }) => {
  const todos = useQuery(api.todos.get);
  const deleteTodo = useMutation(api.todos.deleteTodo);

  return (
    <>
      {isOpen && (
        <div className="absolute z-10 flex flex-col items-center justify-center w-full h-screen backdrop-blur-sm bg-black bg-opacity-80">
          <div className="flex flex-col items-center w-full max-w-xl p-5 space-y-5 rounded-xl bg-accent-1">
            <p className="mt-5 font-light">
              Are you sure you want to delete all of tasks?
            </p>
            <div className="flex flex-row items-center justify-center w-full">
              <div className="flex flex-row items-center overflow-hidden rounded-xl">
                <button
                  type="button"
                  className="w-auto outline-none px-3 py-1 text-sm text-white bg-red-600 transition-all ease-in-out duration-200 hover:bg-opacity-50"
                  onClick={async () => {
                    if (todos) {
                      for (let i = 0; i < todos?.length; i++) {
                        await deleteTodo({
                          _id: todos[i]._id,
                        });
                      }
                    }
                    setIsOpen(false)
                  }}
                >
                  Delete all
                </button>
                <button
                  type="button"
                  className="w-auto outline-none px-3 py-1 text-sm text-white bg-neutral-600 transition-all ease-in-out duration-200 hover:bg-opacity-50"
                  onClick={async () => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteAllModal;
