import InputError from "@/components/input-error"
import InputPassword from "@/components/input-password"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import AuthLayout from "@/layouts/auth-layout"
import { useForm } from "@inertiajs/react"
import { Loader } from "lucide-react"

const ResetPassword = ({ token, email }) => {
  const { data, setData, post, processing, errors, clearErrors } = useForm({
    token: token,
    email: email,
    password: "",
    password_confirmation: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    clearErrors()
    post(route('password.store'))
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid gap-6">
        <div className="space-y-1">
          <Label>Password</Label>
          <InputPassword value={data.password} onChange={(e) => setData('password', e.target.value)} />
          <InputError message={errors.password} />
        </div>
        <div className="space-y-1">
          <Label>Confirm password</Label>
          <InputPassword value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} />
          <InputError message={errors.password_confirmation} />
        </div>
        <Button disabled={processing}>
          {processing && <Loader className="animate-spin" />}
          Reset password
        </Button>
      </div>
    </form>
  )
}

ResetPassword.layout = page => <AuthLayout children={page} title="Reset password" description="Please enter your new password below." head="Reset password" />

export default ResetPassword