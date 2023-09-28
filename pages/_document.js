import Navbar from "@/components/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[#121212] text-white">
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
