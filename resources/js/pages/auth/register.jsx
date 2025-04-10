import InputError from "@/components/input-error"
import InputPassword from "@/components/input-password"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AuthLayout from "@/layouts/auth-layout"
import { Link, useForm } from "@inertiajs/react"
import { Loader } from "lucide-react"

const Register = () => {
  const { data, setData, post, processing, errors, clearErrors } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    clearErrors()
    post(route('register'))
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid gap-6">
        <div className="space-y-1">
          <Label>Name</Label>
          <Input value={data.name} onChange={(e) => setData('name', e.target.value)} />
          <InputError message={errors.name} />
        </div>
        <div className="space-y-1">
          <Label>Email address</Label>
          <Input value={data.email} onChange={(e) => setData('email', e.target.value)} />
          <InputError message={errors.email} />
        </div>
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
          Create account
        </Button>
      </div>
      <div className="text-muted-foreground text-center text-sm">
        Already have an account?{' '}
        <Link href={route('login')} className="hover:underline">
          Log in
        </Link>
      </div>
    </form>
  )
}

Register.layout = page => <AuthLayout children={page} title="Create an account" description="Enter your details below to create your account." head="Sign up" />

export default Register