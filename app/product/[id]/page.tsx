import axios from 'axios'
import React from 'react'

const page =async ({params}) => {
  const {id} =  await params
  const {data} = await axios.get('https://api.escuelajs.co/api/v1/products/'+id)
 
  return (
    <div>
     {data.title}
     {data.description}
    </div>
  )
}

export default page