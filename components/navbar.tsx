"use client"; // This tells Next.js the menu is interactive

import React from 'react';
// We import from YOUR folders, not the general library
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu"; 
import { Input } from "@/components/ui/input";

const EcomNavbar = async () => {
  const {data} = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/categories");
  return (
    <div className='w-[100vw] bg-gray'>
      <NavigationMenu>
        <img src="/logo.png" alt="Logo" className="h-12 w-12 mr-4" />
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/">Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
      <Input placeholder="Search products" className="bg-black text-white h-12" />
    </NavigationMenu>
    </div>
    
  );
};

export default EcomNavbar;