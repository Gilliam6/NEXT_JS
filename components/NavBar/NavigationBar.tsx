import Link from 'next/link';

function NavigationBar() {
    return (
        <div className="top-0 max-w-967 bg-gradient-to-r from-gray-900">
            <Link href="/">
                <button>
                    <h1 className='text-4xl font-black'>Groceries Ninja</h1>
                </button>
            </Link>
        </div>
    );
}

export default NavigationBar;