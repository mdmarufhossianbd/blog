import Header from "@/components/Header/header";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight:["400", "500", "600", "700", "800", "900"] });

export const metadata = {
  title: "Blog",
  description: "This is blog apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
