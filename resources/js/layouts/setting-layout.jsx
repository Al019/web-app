import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Head, Link } from '@inertiajs/react';

const items = [
  {
    title: 'Profile',
    href: '/settings/profile'
  },
  {
    title: 'Password',
    href: '/settings/password'
  },
  {
    title: 'Appearance',
    href: '/settings/appearance'
  },
];

const SettingLayout = ({ children }) => {
  const currentPath = window.location.pathname;

  return (
    <div className="space-y-8">
      <Head title="Settings" />
      <Heading title='Settings' description='Manage your profile and account settings.' />
      <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12">
        <aside className="w-full max-w-lg lg:w-48">
          <SidebarMenu>
            {items.map((item, index) => (
              <SidebarMenuItem key={index}>
                <SidebarMenuButton asChild isActive={currentPath === item.href ? true : false}>
                  <Link href={item.href} prefetch>
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </aside>
        <Separator className="my-6 lg:hidden" />
        <section className="w-full max-w-lg">
          {children}
        </section>
      </div>
    </div>
  )
}

export default SettingLayout