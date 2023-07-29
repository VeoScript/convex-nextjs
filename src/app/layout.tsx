import "./global.css";
import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ConvexClientProvider from "./(components)/ConvexClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS + Convex DB",
  description: "Experimented by Jerome Villaruel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConvexClientProvider>
      <html lang="en">
        <body className={clsx(inter.className, "text-white bg-accent-1")}>
          {children}
        </body>
      </html>
    </ConvexClientProvider>
  );
}
