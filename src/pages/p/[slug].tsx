import { NextRouter, useRouter } from "next/router";

const Page = () => {
  const router: NextRouter = useRouter();
  return (
    <div
      className="flex min-h-screen flex-col space-y-8 p-24"
    >
      {router.query.slug}
    </div>
  );
};

export default Page;
