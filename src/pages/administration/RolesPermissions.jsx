import React, { useState } from "react";
import { Plus, Edit, Trash2 } from "lucide-react";
import AddRoleModal from "../../components/AddRoleModal";

export default function RolesPermissions() {
const [roles, setRoles] = useState([
{
id:1,
name:"Admin",
users:2,
permissions:"Full Access"
},
{
id:2,
name:"Sales Manager",
users:4,
permissions:"Leads, Deals, Reports"
},
{
id:3,
name:"Support Agent",
users:3,
permissions:"Contacts, Tickets"
},
{
id:4,
name:"Marketing Manager",
users:5,
permissions:"Campaigns, Leads, Reports"
},
{
id:5,
name:"HR Manager",
users:2,
permissions:"Employees, Payroll"
},
{
id:6,
name:"Finance Manager",
users:3,
permissions:"Invoices, Payments, Reports"
},
{
id:7,
name:"Product Manager",
users:4,
permissions:"Products, Inventory"
},
{
id:8,
name:"Customer Success",
users:2,
permissions:"Customers, Support Tickets"
}
]);
const [showModal,setShowModal] = useState(false);

const handleAddRole = (newRole) => {

if(isEdit){

setRoles(
roles.map(r =>
r.id === editRole.id ? { ...r, ...newRole } : r
)
);

setIsEdit(false);
setEditRole(null);

}else{

setRoles([
...roles,
{
id: roles.length + 1,
...newRole
}
]);

}

};
const handleDelete = (id)=>{
setRoles(roles.filter(r=>r.id !== id));
};
const [editRole, setEditRole] = useState(null);
const [isEdit, setIsEdit] = useState(false);
const handleEdit = (role)=>{
setEditRole(role);
setIsEdit(true);
setShowModal(true);
};

return (

<div className="p-6">

<div className="flex justify-between items-center mb-6">
<h1 className="text-2xl font-bold">Roles & Permissions</h1>

<button
onClick={()=>setShowModal(true)}
className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
>
<Plus size={16}/>
Add Role
</button>

</div>

<div className="bg-white shadow rounded-lg overflow-hidden hidden md:block">
<table className="w-full">

<thead className="bg-gray-100">
<tr>
<th className="text-left p-3">Role Name</th>
<th className="text-left p-3">Users</th>
<th className="text-left p-3">Permissions</th>
<th className="text-left p-3">Actions</th>
</tr>
</thead>

<tbody>

{roles.map((r)=>(
<tr key={r.id} className="border-t">

<td className="p-4">{r.name}</td>
<td className="p-4">{r.users}</td>
<td className="p-4">{r.permissions}</td>

<td className="p-4 flex gap-3">

<button
onClick={()=>handleEdit(r)}
className="text-blue-500"
>
<Edit size={16}/>
</button>

<button
onClick={()=>{
if(window.confirm("Are you sure you want to delete this role?")){
handleDelete(r.id);
}
}}
className="text-red-500"
>
<Trash2 size={16}/>
</button>

</td>

</tr>
))}

</tbody>

</table>
{/* Mobile Card View */}
<div className="md:hidden space-y-4">

{roles.map((r) => (

<div key={r.id} className="bg-white shadow rounded-xl p-4">

<div className="flex justify-between items-center mb-2">
<h3 className="font-semibold text-lg">{r.name}</h3>

<div className="flex gap-3">
<button
onClick={() => handleEdit(r)}
className="text-blue-500"
>
<Edit size={16}/>
</button>

<button
onClick={()=>{
if(window.confirm("Are you sure you want to delete this role?")){
handleDelete(r.id);
}
}}
className="text-red-500"
>
<Trash2 size={16}/>
</button>
</div>
</div>

<p className="text-sm text-gray-600">
<span className="font-medium">Users:</span> {r.users}
</p>

<p className="text-sm text-gray-600">
<span className="font-medium">Permissions:</span> {r.permissions}
</p>

</div>

))}

</div>
</div>

<AddRoleModal
open={showModal}
onClose={()=>{setShowModal(false); setEditRole(null);}}
onAdd={handleAddRole}
editData={editRole}
/>

</div>

);

}