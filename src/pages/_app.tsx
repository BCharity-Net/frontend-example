import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { FC, ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main
        className="flex min-h-screen flex-col space-y-8 p-24"
      >
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
