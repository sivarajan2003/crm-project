import { useState, useEffect } from "react";

export default function AddRoleModal({ open, onClose, onAdd, editData }) {

const [form, setForm] = useState({
name: "",
users: "",
permissions: ""
});

useEffect(() => {

if(editData){
setForm(editData);
}

}, [editData]);

const handleChange = (e)=>{
setForm({
...form,
[e.target.name]: e.target.value
});
};

const handleSubmit = ()=>{

onAdd(form);

setForm({
name:"",
users:"",
permissions:""
});

onClose();
};

if(!open) return null;

return(

<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">

<div className="bg-white w-[420px] p-6 rounded-xl shadow-lg">

<h2 className="text-xl font-semibold mb-4">
{editData ? "Edit Role" : "Add Role"}
</h2>

<div className="space-y-3">

<input
name="name"
placeholder="Role Name"
value={form.name}
onChange={handleChange}
className="w-full border p-2 rounded"
/>

<input
name="users"
placeholder="Number of Users"
value={form.users}
onChange={handleChange}
className="w-full border p-2 rounded"
/>

<input
name="permissions"
placeholder="Permissions"
value={form.permissions}
onChange={handleChange}
className="w-full border p-2 rounded"
/>

</div>

<div className="flex justify-end gap-3 mt-5">

<button
onClick={onClose}
className="px-4 py-2 border rounded"
>
Cancel
</button>

<button
onClick={handleSubmit}
className="px-4 py-2 bg-blue-600 text-white rounded"
>
Save Role
</button>

</div>

</div>

</div>

);

}