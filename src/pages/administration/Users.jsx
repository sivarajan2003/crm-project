import { useState } from "react";
import { Search, Plus, Mail, Shield } from "lucide-react";

const usersData = [
{
id: 1,
name: "Rahul Sharma",
email: "rahul@crm.com",
role: "Admin",
status: "Active"
},
{
id: 2,
name: "Priya Nair",
email: "priya@crm.com",
role: "Manager",
status: "Active"
},
{
id: 3,
name: "Arjun Patel",
email: "arjun@crm.com",
role: "Sales",
status: "Inactive"
}
];

export default function Users() {

const [users,setUsers] = useState(usersData);
const [search,setSearch] = useState("");

const filteredUsers = users.filter(u =>
u.name.toLowerCase().includes(search.toLowerCase())
);

return (

<div className="p-8 bg-gray-50 min-h-screen">

{/* HEADER */}

<div className="flex justify-between items-center mb-6">

<div>
<h1 className="text-3xl font-bold text-gray-900">Users</h1>
<p className="text-gray-500">Manage CRM system users</p>
</div>

<button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 py-2 rounded-lg shadow">
<Plus size={16}/>
Add User
</button>

</div>


{/* SEARCH */}

<div className="bg-white border rounded-xl p-5 mb-6">

<div className="flex items-center border rounded-lg px-4 py-2 bg-gray-50">

<Search size={18} className="text-gray-400"/>

<input
type="text"
placeholder="Search users..."
className="outline-none bg-transparent ml-2 w-full"
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

</div>

</div>


{/* USERS TABLE */}

<div className="bg-white border rounded-xl overflow-hidden">

<table className="w-full">

<thead className="bg-gray-100 text-gray-600 text-sm">

<tr>
<th className="text-left p-4">Name</th>
<th className="text-left p-4">Email</th>
<th className="text-left p-4">Role</th>
<th className="text-left p-4">Status</th>
</tr>

</thead>

<tbody>

{filteredUsers.map((u)=> (

<tr key={u.id} className="border-t hover:bg-gray-50">

<td className="p-4 flex items-center gap-3">

<div className="bg-indigo-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-semibold">
{u.name.charAt(0)}
</div>

<span className="font-medium">{u.name}</span>

</td>


<td className="p-4 flex items-center gap-2 text-gray-600">
<Mail size={16}/>
{u.email}
</td>


<td className="p-4 flex items-center gap-2 text-gray-700">
<Shield size={16}/>
{u.role}
</td>


<td className="p-4">

<span className={`px-3 py-1 rounded-full text-sm
${u.status === "Active"
? "bg-green-100 text-green-700"
: "bg-red-100 text-red-700"
}`}>
{u.status}
</span>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

);
}