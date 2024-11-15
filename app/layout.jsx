import { Poppins } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import SidebarComponent from "@/components/SidebarComponent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "JavaScript Notes & Snippets",
  description:
    "Explore comprehensive JavaScript notes, code snippets, and tips for developers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={`${poppins.variable}`}>
        <SidebarComponent />
        <main>
          <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
