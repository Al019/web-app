import InputError from "@/components/input-error"
import SubHeading from "@/components/sub-heading"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AppLayout from "@/layouts/app-layout"
import SettingLayout from "@/layouts/setting-layout"
import { Link, useForm, usePage } from "@inertiajs/react"
import { Loader } from "lucide-react"

const Profile = ({ mustVerifyEmail, status }) => {
  const user = usePage().props.auth.user

  const { data, setData, patch, errors, processing, clearErrors } = useForm({
    name: user.name,
    email: user.email,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    clearErrors()
    patch(route('profile.update'), {
      preserveScroll: true,
    })
  }

  return (
    <div className="space-y-6">
      <SubHeading title="Profile information" description="Update your name and email address." />
      <form onSubmit={handleSubmit} className="space-y-6">
        {mustVerifyEmail && user.email_verified_at === null && (
          <Alert>
            <AlertDescription>
              {status === 'verification-link-sent' ? (
                'A new verification link has been sent to your email address.'
              ) : (
                <>
                  Your email address is unverified.{' '}
                  <Link
                    href={route('verification.send')}
                    method="post"
                    as="button"
                    className="text-foreground hover:underline"
                  >
                    Click here to resend verification email
                  </Link>
                </>
              )}
            </AlertDescription>
          </Alert>
        )}
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
        <Button disabled={processing}>
          {processing && <Loader className="animate-spin" />}
          Save
        </Button>
      </form>
    </div>
  )
}

Profile.layout = page => <AppLayout title="Profile settings">
  <SettingLayout children={page} />
</AppLayout>

export default Profile