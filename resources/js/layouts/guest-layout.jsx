import AppFooter from "@/components/app-footer"
import AppNavbar from "@/components/app-navbar"
import { Head, usePage } from "@inertiajs/react"

const items = [
  {
    title: "Home",
    href: "/"
  }
]

const GuestLayout = ({ head = "", children }) => {
  const user = usePage().props.auth.user

  return (
    <>
      <Head title={head} />
      <div className="fixed w-full">
        <AppNavbar items={items} user={user} />
      </div>
      <main className="flex flex-col min-h-screen max-w-7xl mx-auto pt-20 px-4 pb-4">
        {children}
      </main>
      <AppFooter />
    </>
  )
}

export default GuestLayout