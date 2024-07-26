import { Search } from 'lucide-react'
import React from 'react'

function SearchSection({ templateSearch }: { templateSearch: (value: string) => void }) {
  return (
    <div className='p-10 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 flex flex-col justify-center items-center'>
      <h2 className='text-3xl font-bold text-white'>Browse Templates</h2>
      <div className='flex items-center justify-center border bg-white rounded-md my-2 px-2 w-[33%]'>
        <Search className='w-6 h-6 text-blue-600' />
        <input type="text" placeholder="Search templates..." className="w-full p-2 text-black bg-white rounded-lg outline-none" onChange={(e) => templateSearch(e.target.value)} />
      </div>
    </div>
  )
}

export default SearchSection