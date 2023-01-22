'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

function Search() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/search/${search}`)
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none'
        type='text'
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder='Enter Search Term'
      />
      <button type='submit' className='bg-blue-500 text-white font-bold m-2 py-2 px-4 rounded-lg'>
        Search
      </button>
    </form>
  )
}

export default Search
