import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "../components/configedUi/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edenmen",
  description: "Edenmen Brand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ""}>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}
