import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Link } from "@inertiajs/react"
import { useEffect, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

const AppDrawer = ({ items, user }) => {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (!isMobile) {
      setOpen(false)
    }
  }, [isMobile])

  return (
    <Drawer open={open} onOpenChange={() => setOpen(false)}>
      <Button onClick={() => setOpen(true)} size="icon" variant="ghost">
        <Menu />
      </Button>
      <DrawerContent>
        <DrawerHeader className="sr-only">
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
        </DrawerHeader>
        <div className="grid gap-2 p-4">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              <Button autoFocus onClick={() => setOpen(false)} variant="ghost" className="w-full">
                {item.title}
              </Button>
            </Link>
          ))}
          {user ? (
            <Link href={route('dashboard')}>
              <Button onClick={() => setOpen(false)} className="w-full">
                Dashboard
              </Button>
            </Link>
          ) : (
            <div className="grid items-center grid-cols-2 gap-2">
              <Link href={route('login')}>
                <Button onClick={() => setOpen(false)} variant="ghost" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link href={route('register')}>
                <Button onClick={() => setOpen(false)} variant="outline" className="w-full">
                  Sign up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default AppDrawer