import Link from 'next/link';

function LandPage(props : any) 
{
  return ( 
    <div className='w-screen h-screen bg-gray-400 flex flex-row flex-nowrap justify-center items-center'>
      <div>
        <h1 className='text-4xl font-black m-2'>Groceries Ninja</h1>
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