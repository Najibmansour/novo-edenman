import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "../components/configedUi/Navbar";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edenmen",
  description: "Edenmen Brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ""}>
        <Toaster position="top-center" richColors />
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
