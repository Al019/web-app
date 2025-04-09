import InputError from "@/components/input-error";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthLayout from "@/layouts/auth-layout"
import { Link, useForm } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";

const ForgotPassword = ({ status }) => {
  const { data, setData, post, processing, errors, clearErrors } = useForm({
    email: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    clearErrors()
    post(route('password.email'))
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
        <Button disabled={processing}>
          {processing && <LoaderCircle className="animate-spin" />}
          Email password reset link
        </Button>
      </div>
      <div className="text-muted-foreground text-center text-sm">
        Or, return to{' '}
        <Link href={route('login')} className="hover:underline">
          log in
        </Link>
      </div>
    </form>
  )
}

ForgotPassword.layout = page => <AuthLayout children={page} title="Forgot password" description="Enter your email to receive a password reset link." head="Forgot password" />

export default ForgotPassword