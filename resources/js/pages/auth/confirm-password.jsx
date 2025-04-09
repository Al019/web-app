import InputError from "@/components/input-error"
import InputPassword from "@/components/input-password"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import AuthLayout from "@/layouts/auth-layout"
import { useForm } from "@inertiajs/react"
import { LoaderCircle } from "lucide-react"

const ConfirmPassword = () => {
  const { data, setData, post, processing, errors, clearErrors } = useForm({
    password: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    clearErrors()
    post(route('password.confirm'))
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid gap-6">
        <div className="space-y-1">
          <Label>Password</Label>
          <InputPassword value={data.password} onChange={(e) => setData('password', e.target.value)} />
          <InputError message={errors.password} />
        </div>
      </div>
      <Button disabled={processing}>
        {processing && <LoaderCircle className="animate-spin" />}
        Confirm password
      </Button>
    </form>
  )
}

ConfirmPassword.layout = page => <AuthLayout children={page} title="Confirm your password" description="This is a secure area of the application. Please confirm your password before continuing." head="Confirm password" />

export default ConfirmPassword