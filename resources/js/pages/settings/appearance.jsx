import AppearanceTab from "@/components/appearance-tab"
import SubHeading from "@/components/sub-heading"
import AppLayout from "@/layouts/app-layout"
import SettingLayout from "@/layouts/setting-layout"

const Appearance = () => {
  return (
    <div className="space-y-6">
      <SubHeading title="Appearance settings" description="Update your account's appearance settings." />
      <AppearanceTab />
    </div>
  )
}

Appearance.layout = page => <AppLayout title="Appearance settings">
  <SettingLayout children={page} />
</AppLayout>

export default Appearance