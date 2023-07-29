import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Task",
};

export default function AddTaskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center justify-center w-full h-screen px-5 py-3 md:px-0 md:py-0 gap-y-5">
      {children}
    </main>
  );
}
