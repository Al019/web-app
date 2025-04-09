import InputError from "@/components/input-error"
import InputPassword from "@/components/input-password"
import SubHeading from "@/components/sub-heading"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import AppLayout from "@/layouts/app-layout"
import SettingLayout from "@/layouts/setting-layout"
import { useForm } from "@inertiajs/react"
import { LoaderCircle } from "lucide-react"

const Password = () => {
  const { data, setData, errors, put, reset, processing, clearErrors } = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    clearErrors()
    put(route('password.update'), {
      preserveScroll: true,
      onSuccess: () => reset(),
    })
  }

  return (
    <div className="space-y-6">
      <SubHeading title="Update password" description="Ensure your account is using a long, random password to stay secure." />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <Label>Current password</Label>
          <InputPassword value={data.current_password} onChange={(e) => setData('current_password', e.target.value)} />
          <InputError message={errors.current_password} />
        </div>
        <div className="space-y-1">
          <Label>New password</Label>
          <InputPassword value={data.password} onChange={(e) => setData('password', e.target.value)} />
          <InputError message={errors.password} />
        </div>
        <div className="space-y-1">
          <Label>Confirm password</Label>
          <InputPassword value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} />
          <InputError message={errors.password_confirmation} />
        </div>
        <Button disabled={processing}>
          {processing && <LoaderCircle className="animate-spin" />}
          Save password
        </Button>
      </form>
    </div>
  )
}

Password.layout = page => <AppLayout title="Password settings">
  <SettingLayout children={page} />
</AppLayout>

export default Password