// import type { Metadata } from "next";
// import "./globals.css";
// import { ReactNode } from "react";

// export const metadata: Metadata = {
//   title: "seamlessco",
//   description: "hire expert the easy way",
// };

// export default function RootLayout({children}) {
//   return (
//     <html>
//       <body>
//         {children}
//         </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "SeamlessCo - Hire Experts Effortlessly",
  description: "Hire top-tier professionals for your projects quickly and easily with SeamlessCo. Get expert developers, designers, and marketers in one place.",
  keywords: "hire experts, developers, designers, marketers, seamless hiring, software solutions, professional services, SeamlessCo"
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
