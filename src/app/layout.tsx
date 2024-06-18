import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css"
import NavBar from "@/components/static/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wright Brothers AI",
  description: "TODO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        {/* Wrapper div for content, adding top padding */}
		<NavBar></NavBar>
        <div className="flex-grow min-h-screen"> {/* Update pt-16 to the height of your NavBar */}
          {children}
        </div>
        {/* <PageFooter /> */}
      </body>
    </html>
  );
}
