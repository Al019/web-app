import AppLogo from "@/components/app-logo"
import { Head, Link } from "@inertiajs/react"

const AuthLayout = ({ title = "", description = "", head = "", children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6">
      <Head title={head} />
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-4">
            <Link href="/" className="flex flex-col items-center">
              <div className="size-20">
                <AppLogo />
              </div>
            </Link>
            <div className="space-y-2 text-center">
              <h1 className="text-xl font-medium">{title}</h1>
              <p className="text-muted-foreground text-center text-sm">{description}</p>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout