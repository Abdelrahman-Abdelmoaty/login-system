import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { UsersContextProvider } from "@/components/Context";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Login System",
  description: "Developed by Abdelrahman Abdelmoaty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <UsersContextProvider>
          <span className="absolute left-8 top-8 text-lg font-semibold leading-normal md:text-xl">
            Your Logo
          </span>
          {children}
        </UsersContextProvider>
      </body>
    </html>
  );
}
