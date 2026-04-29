import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prakhar Sharma — ML & GenAI Engineer",
  description:
    "Final-year CS student at Manipal University Jaipur. Building ML systems, RAG pipelines, and AI agents.",
  authors: [{ name: "Prakhar Sharma" }],
  openGraph: {
    title: "Prakhar Sharma — ML & GenAI Engineer",
    description: "Personal portfolio. Projects, writing, and selected work.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
