import { NextRouter, useRouter } from "next/router";

const Page = () => {
  const router: NextRouter = useRouter();
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      {router.query.slug}
    </div>
  );
};

export default Page;
