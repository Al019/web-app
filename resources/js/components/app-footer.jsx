import { Link } from "@inertiajs/react"
import AppLogo from "./app-logo"

const AppFooter = () => {
  const appName = import.meta.env.VITE_APP_NAME

  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <AppLogo className="size-16 me-3" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                {appName}
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Contact Us</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline break-words">email@example.com</a>
                </li>
                <li>
                  <a href="#" className="hover:underline break-words">09123456789</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="#" target="_blank" className="hover:underline break-words">Facebook</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline break-words">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline break-words">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border sm:mx-auto lg:my-8" />
        <div className="flex justify-center">
          <span className="text-sm">© {new Date().getFullYear()} <a href="/" className="hover:underline">{appName}</a>. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter