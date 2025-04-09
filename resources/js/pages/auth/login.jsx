import InputError from "@/components/input-error"
import InputPassword from "@/components/input-password"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AuthLayout from "@/layouts/auth-layout"
import { Link, useForm } from "@inertiajs/react"
import { LoaderCircle } from "lucide-react"

const Login = ({ status, canResetPassword }) => {
  const { data, setData, post, processing, errors, clearErrors } = useForm({
    email: "",
    password: "",
    remember: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    clearErrors()
    post(route('login'))
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid gap-6">
        {status && (
          <Alert>
            <AlertDescription>
              {status}
            </AlertDescription>
          </Alert>
        )}
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
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" checked={data.remember} onCheckedChange={(val) => setData('remember', val)} />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          {canResetPassword && (
            <Label>
              <Link href={route('password.request')} className="hover:underline">Forgot password</Link>
            </Label>
          )}
        </div>
        <Button disabled={processing}>
          {processing && <LoaderCircle className="animate-spin" />}
          Log in
        </Button>
      </div>
      <div className="text-muted-foreground text-center text-sm">
        Don't have an account?{' '}
        <Link href={route('register')} className="hover:underline">
          Sign up
        </Link>
      </div>
    </form>
  )
}

Login.layout = page => <AuthLayout children={page} title="Log in to your account" description="Enter your email and password below to log in." head="Log in" />

export default Login