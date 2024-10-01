import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "seamlessco",
  description: "hire expert the easy way",
};

export default function RootLayout({children}) {
  return (
    <html>
      <body>
        {children}
        </body>
    </html>
  );
}
