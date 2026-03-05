import { useState } from "react";

export default function CreateInvoice({ closeModal }) {

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
closeModal();
};

return(

<div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

<div className="bg-white p-8 rounded-xl shadow-xl w-[700px] max-w-[90%] space-y-6">

<h1 className="text-2xl font-semibold">
Create Invoice
</h1>

<div className="grid grid-cols-2 gap-4">

<input
name="customer"
placeholder="Customer Name"
onChange={handleChange}
className="border p-3 rounded-lg w-full"
/>

<input
name="invoiceNo"
placeholder="Invoice Number"
onChange={handleChange}
className="border p-3 rounded-lg w-full"
/>

<input
type="date"
name="date"
onChange={handleChange}
className="border p-3 rounded-lg w-full"
/>

<input
name="amount"
placeholder="Amount"
onChange={handleChange}
className="border p-3 rounded-lg w-full"
/>

<select
name="status"
onChange={handleChange}
className="border p-3 rounded-lg w-full col-span-2"
>
<option>Pending</option>
<option>Paid</option>
<option>Overdue</option>
</select>

</div>

<div className="flex justify-end gap-4 pt-4">

<button
onClick={closeModal}
className="px-5 py-2 border rounded-lg"
>
Cancel
</button>

<button
onClick={handleSubmit}
className="bg-purple-600 text-white px-5 py-2 rounded-lg"
>
Save Invoice
</button>

</div>

</div>

</div>

);
}