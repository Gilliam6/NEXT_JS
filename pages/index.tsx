import Link from 'next/link';
import { NextPage } from 'next';

const LandPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-700 flex-nowrap">
      <div>
        <h1 className="m-2 text-4xl font-black">Groceries Ninja</h1>
      </div>
      <div>
        <Link href="/groceries" passHref>
          <button className="btn">Groceries</button>
        </Link>
      </div>
    </div>
  );
};

export default LandPage;
