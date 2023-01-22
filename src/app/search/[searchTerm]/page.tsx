import Link from 'next/link'

type Props = {
  params: {
    searchTerm: string
  }
}

type SearchResults = {
  organic_results: [
    {
      position: number
      title: string
      link: string
      thumbnail: string
      snippet: string
    }
  ]
}

const search = async (searchTerm: string) => {
  const response = await fetch(
    `http://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.SERP_API_KEY}`
  )
  const data: SearchResults = await response.json()
  return data
}

async function SearchResults({ params: { searchTerm } }: Props) {
  const searchResults = await search(searchTerm)

  // throw new Error('Something went wrong')

  return (
    <div>
      <p className='text-gray-500 text-sm'>You searched for: {searchTerm}</p>

      <ol className='space-y-5 p-5'>
        {searchResults.organic_results.map(result => (
          <li key={result.position} className='list-decimal'>
            <Link
              target={'_blank'}
              rel={'noopener noreferrer'}
              className='font-bold'
              href={result.link}>
              {result.title}
            </Link>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default SearchResults
