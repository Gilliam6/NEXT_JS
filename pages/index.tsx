import { useRouter } from "next/router";
import Link from "next/link";

function LandPage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-400 flex-nowrap">
      <div>
        <h1 className="m-2 text-4xl font-black">Groceries Ninja</h1>
      </div>
      <div>
        <Link href="/groceries">
          <button className="btn">Groceries</button>
        </Link>
      </div>
    </div>
  );
}

export default LandPage;
