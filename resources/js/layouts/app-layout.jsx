import { AppSidebar } from "@/components/app-sidebar"
import SheetNotification from "@/components/sheet-notification"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Head } from "@inertiajs/react"

const AppLayout = ({ title = "", head = "", children }) => {
  return (
    <SidebarProvider>
      <Head title={head} />
      <AppSidebar />
      <SidebarInset>
        <header className="px-4">
          <nav className="h-16 shrink-0 grid grid-cols-2 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center justify-start gap-2">
              <div className="-ml-1">
                <SidebarTrigger />
              </div>
              <Separator orientation="vertical" className="mr-2 h-4" />
              <span className="text-base font-medium break-words line-clamp-2">
                {title}
              </span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <SheetNotification />
            </div>
          </nav>
        </header>
        <main className="w-full max-w-7xl mx-auto p-4">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AppLayout