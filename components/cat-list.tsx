'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

const Catlist = ({ item }) => {
  const router = useRouter()
  const handleCat = () => {
    router.push('/catagories/' + item.id)
  }

  return (
    <button
      type="button"
      onClick={handleCat}
      className="rounded bg-pink-700 px-3 py-1 text-sm font-medium text-white hover:bg-gray-400"
    >
      {item.name?.substring(0, 10)}
    </button>
  )
}

export default Catlist