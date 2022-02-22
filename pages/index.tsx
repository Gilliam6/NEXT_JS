import { useRouter } from 'next/router';
import Link from 'next/link';
// import { PrismaClient } from '@prisma/client'

// async function main() {
//   const prisma = new PrismaClient()

//   let user: prisma.UserCreateInput
//   const createMany = await prisma.user.createMany({
//     data: [
//       { name: 'Bob', email: 'bob@prisma.io' },
//       { name: 'Bobo', email: 'bob@prisma.io' }, // Duplicate unique key!
//       { name: 'Yewande', email: 'yewande@prisma.io' },
//       { name: 'Angelique', email: 'angelique@prisma.io' },
//     ],
//     skipDuplicates: true, // Skip 'Bobo'
//   })
// }

function LandPage() 
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