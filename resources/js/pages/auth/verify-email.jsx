import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import AuthLayout from "@/layouts/auth-layout";
import { Link, useForm } from "@inertiajs/react";
import { Loader } from "lucide-react";

const VerifyEmail = ({ status }) => {
  const { post, processing } = useForm({})

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('verification.send'))
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid gap-6">
        {status === 'verification-link-sent' && (
          <Alert>
            <AlertDescription>
              A new verification link has been sent to the email address
              you provided during registration.
            </AlertDescription>
          </Alert>
        )}
        <Button variant="secondary" disabled={processing}>
          {processing && <Loader className="animate-spin" />}
          Resend verification email
        </Button>
      </div>
      <Link href={route('logout')} method="post" className="mx-auto block text-sm hover:underline">
        Log out
      </Link>
    </form>
  )
}

VerifyEmail.layout = page => <AuthLayout children={page} title="Verify email" description="Please verify your email address by clicking on the link we just emailed to you." head="Verify email" />

export default VerifyEmail