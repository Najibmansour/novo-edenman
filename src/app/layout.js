import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "../components/configedUi/Navbar";
import { Toaster } from "sonner";
import BttomRightWhatsapp from "@/components/ui/bot_right_wtsp_icon";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Edenmen",
  description:
    "Edenmen made a name for itself in the fiercely competitive world of men's underwear by letting its products speak for themselves.",
  keywords: [
    "edenmen",
    "lebanon",
    "micro-modal",
    "100% cotton boxer",
    "sport boxer",
    "cotton",
    "Tank",
    "Undershirt",
    "Crew neck",
    "V neck",
    "Boy short",
    "Underpants",
    "Undergarment",
    "Underclothing",
    "Long underwear",
    "Boxer",
    "Boxer with button",
    "Boxer short",
    "Trunk",
    "Slip",
    "Hip Short",
    "Brief",
    "Brief boxer",
    "Midway Brief",
  ],
  authors: [
    { name: "NOVO CONCEPT" },
    { name: "Najib Mansour", url: "https://github.com/Najibmansour" },
  ],
  openGraph: {
    title: "Edenmen",
    description:
      "Edenmen made a name for itself in the fiercely competitive world of men's underwear by letting its products speak for themselves.",
    url: "https://www.edenmenunderwear.com/",
    siteName: "Edenmen Underwear",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  verification: {
    google: "1jRpRhjcpV2V-EyD9y2LMwMln-Sll9EsCgBf9n0rn-Q",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + "relative"}>
        <Toaster
          position="top-center"
          richColors
          toastOptions={{
            unstyled: false,
            classNames: {
              error: "",
              success: "",
              warning: "",
              info: "",
            },
          }}
        />
        <Navbar />
        <BttomRightWhatsapp />

        <main>{children}</main>
      </body>
    </html>
  );
}
