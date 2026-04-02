import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu'
import { Button } from './ui/button'
import { Search, ShoppingCart, User } from 'lucide-react'
import { Input } from './ui/input'
const EcomNavbar = (props) => {
  return (

    <header className="sticky top-0 z-50 w-full border-b bg-green-200 backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-4">
        
        <div className="font-bold text-xl tracking-tight mx-2">
          <a href="/">STORE.</a>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md" href="/">
                        <div className="mb-2 mt-4 text-lg font-medium">New Arrivals</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Check out our latest collection for the season.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li><a href="/men" className="block p-2 text-sm hover:underline">Men's Fashion</a></li>
                  <li><a href="/women" className="block p-2 text-sm hover:underline">Women's Fashion</a></li>
                  <li><a href="/accessories" className="block p-2 text-sm hover:underline">Accessories</a></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a href="/sale" className={navigationMenuTriggerStyle()}>
                Sale
              </a>
              <a href='/About' className={navigationMenuTriggerStyle()}>
                About us
              </a>
              <a className={navigationMenuTriggerStyle()}>
                Contact
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end gap-4 md:flex-initial">
          <div className="relative hidden lg:block w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search products..." className="pl-8" />
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                3
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default EcomNavbar