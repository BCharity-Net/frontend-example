import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col space-y-8 p-24"
    >
      <Navbar />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Test body
      </div>
    </main>
  );
};
