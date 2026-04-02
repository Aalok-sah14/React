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

const CatNavbar = () => {
  return (
    <div className = 'w-[100vw] bg-black text-white'>
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="/">Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
     
    </NavigationMenu>
    </div>
  );
};

export default CatNavbar;