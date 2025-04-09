import GuestLayout from "@/layouts/guest-layout"

const Welcome = () => {
  return (
    <div className="flex-1">

    </div>
  )
}

Welcome.layout = page => <GuestLayout children={page} head="Welcome" />

export default Welcome