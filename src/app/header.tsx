import Link from 'next/link'

function Header() {
  return (
    <header className='p-5 bg-blue-500'>
      <Link href='/' className='px-2  mr-1 py-1 bg-white text-blue-500 rounded-lg'>
        Home
      </Link>
      <Link href='/todos' className='px-2 mx-1 py-1 bg-white text-blue-500 rounded-lg'>
        Todos
      </Link>
      <Link href='/search' className='px-2 mx-1 py-1 bg-white text-blue-500 rounded-lg'>
        Search
      </Link>
    </header>
  )
}

export default Header
