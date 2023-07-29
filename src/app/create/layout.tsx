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
    <main className="flex flex-col items-center justify-center w-full h-screen space-y-5">
      {children}
    </main>
  );
}
