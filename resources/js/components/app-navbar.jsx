import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "@inertiajs/react"
import AppLogo from "./app-logo"
import { Button } from "./ui/button"
import AppDrawer from "./app-drawer"

const AppNavbar = ({ items, user }) => {
  return (
    <header className="bg-background border-b">
      <nav className="max-w-7xl mx-auto h-16 grid grid-cols-2 items-center gap-2 px-4">
        <div className="flex items-center gap-2">
          <div className="size-10">
            <Link href="/">
              <AppLogo />
            </Link>
          </div>
          <div className="max-md:hidden">
            <NavigationMenu>
              <NavigationMenuList>
                {items.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                      <Link href={item.href}>
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex justify-end max-md:hidden">
          {user ? (
            <Link href={route('dashboard')}>
              <Button>
                Dashboard
              </Button>
            </Link>
          ) : (
            <div className="flex items-center gap-2">
              <Link href={route('login')}>
                <Button variant="ghost">
                  Log in
                </Button>
              </Link>
              <Link href={route('register')}>
                <Button variant="outline">
                  Sign up
                </Button>
              </Link>
            </div>
          )}
        </div>
        <div className="flex justify-end md:hidden">
          <AppDrawer items={items} user={user} />
        </div>
      </nav>
    </header>
  )
}

export default AppNavbar