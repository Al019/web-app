import Heading from "@/components/heading"
import { columns } from "@/components/table/columns"
import DataTable from "@/components/table/data-table"
import AppLayout from "@/layouts/app-layout"

const data = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "a@example.com",
  },
  {
    id: "128ed52f",
    amount: 150,
    status: "approved",
    email: "b@example.com",
  },
  {
    id: "228ed52f",
    amount: 200,
    status: "declined",
    email: "c@example.com",
  },
]

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <Heading title="Data Table" />
      <DataTable columns={columns} data={data} />
    </div>
  )
}

Dashboard.layout = page => <AppLayout children={page} title="Dashboard" head="Dashboard" />

export default Dashboard