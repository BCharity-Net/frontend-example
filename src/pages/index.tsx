import Button from "@/components/Navbar/Button";
import { NextRouter, useRouter } from "next/router";

const Home = () => {
  const router: NextRouter = useRouter();
  return (
    <>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Test body
      </div>
      <div className="flex">
        <Button
          onClick={async () => {
            const data = await fetch("/api/hello")
            const json = await data.json()
            console.log(json)
          }}
        >
          Get data
        </Button>
        <Button
          onClick={() => {
            router.push("/p/")
          }}
        >
          Go to page views
        </Button>
      </div>
    </>
  );
}

export default Home;
