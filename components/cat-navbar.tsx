import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { Search, ShoppingCart, User } from 'lucide-react'
import { Input } from './ui/input'
import axios from 'axios'
import Categorieslist from './cat-list'
import Catlist from './cat-list'

const CatNavbar =async () => {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/categories/");

  return (




    <header className="sticky top-16 z-50  w-full bg-pink-800">
      <div className="container flex   gap-4  h-10">
      {data?.splice(0,10).map((item)=>{
    return(
       <Catlist key={item.id} item={item}/>
    )
})}
      </div>
    </header>
  )
}

export default CatNavbar