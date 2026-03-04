import { useState } from "react";

export default function CreateInvoice(){

const [invoice,setInvoice] = useState({
customer:"",
invoiceNo:"",
date:"",
amount:"",
status:"Pending"
});

const handleChange = (e)=>{
setInvoice({
...invoice,
[e.target.name]:e.target.value
});
};

const handleSubmit = ()=>{
console.log("Invoice Created:",invoice);
alert("Invoice Created Successfully");
};

return(

<div className="p-6 bg-gray-50 min-h-screen">

<h1 className="text-2xl font-bold mb-6">
Create Invoice
</h1>

<div className="bg-white p-6 rounded-xl shadow max-w-xl space-y-4">

<input
name="customer"
placeholder="Customer Name"
onChange={handleChange}
className="border p-2 rounded w-full"
/>

<input
name="invoiceNo"
placeholder="Invoice Number"
onChange={handleChange}
className="border p-2 rounded w-full"
/>

<input
type="date"
name="date"
onChange={handleChange}
className="border p-2 rounded w-full"
/>

<input
name="amount"
placeholder="Amount"
onChange={handleChange}
className="border p-2 rounded w-full"
/>

<select
name="status"
onChange={handleChange}
className="border p-2 rounded w-full"
>
<option>Pending</option>
<option>Paid</option>
<option>Overdue</option>
</select>

<button
onClick={handleSubmit}
className="bg-purple-600 text-white px-4 py-2 rounded-lg"
>
Save Invoice
</button>

</div>

</div>

);
}