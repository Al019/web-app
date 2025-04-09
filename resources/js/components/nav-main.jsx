import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "@inertiajs/react";

export function NavMain({
  items
}) {
  const { setOpenMobile } = useSidebar()
  const isMobile = useIsMobile()
  const currentPath = window.location.pathname

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Main</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item, index) => (
          <SidebarMenuItem key={index} onClick={() => {
            if (isMobile) {
              setOpenMobile(false)
            }
          }}>
            <SidebarMenuButton tooltip={item.title} asChild isActive={currentPath.startsWith(item.href) ? true : false}>
              <Link href={item.href}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
