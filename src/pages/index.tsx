import Button from "@/components/Navbar/Button";

const Home = () => {
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
      </div>
    </>
  );
}

export default Home;
