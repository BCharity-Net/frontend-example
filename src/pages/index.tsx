import Button from "@/components/Navbar/Button";
import lensClient from "@/lens/lensClient";
import { NextRouter, useRouter } from "next/router";
import { useState } from "react";

const Home = () => {
  const [handle, setHandle] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const createLensProfile = async () => {
    try {
      setLoading(true)

      const profileCreateResult = await lensClient().wallet.createProfileWithHandle({
        handle: handle,
        to: address,
      })

      console.log(profileCreateResult)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

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
      <div className="flex space-x-4">
        <input className="bg-white-800 px-4 rounded-md" placeholder="testnet handle" onChange={(e) => {
          setHandle(e.target.value)
        }} />
        <input className="bg-white-800 px-4 rounded-md" placeholder="target address" onChange={(e) => {
          setAddress(e.target.value)
        }} />
        {loading ?
          <Button
          >
            Loading...
          </Button>
           :
          <Button
            onClick={createLensProfile}
          >
            Create profile
          </Button>
        }
      </div>
    </>
  );
}

export default Home;
