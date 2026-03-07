import { useState } from "react";

export default function AddContactModal({ open, onClose, onAdd }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    status: "Active"
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone) return;

    onAdd(form);
    onClose();

    setForm({
      name: "",
      email: "",
      phone: "",
      company: "",
      role: "",
      status: "Active"
    });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
      <div className="bg-white w-[95%] sm:w-[500px] p-6 rounded-xl shadow-xl">

        <h2 className="text-xl font-semibold mb-6">Add Contact</h2>

        {/* FORM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              name="name"
              placeholder="Enter name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Phone</label>
            <input
              name="phone"
              placeholder="Enter phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Company</label>
            <input
              name="company"
              placeholder="Enter company"
              value={form.company}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Role</label>
            <input
              name="role"
              placeholder="Enter role"
              value={form.role}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            >
              <option>Active</option>
              <option>Inactive</option>
              <option>Lead</option>
            </select>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Save Contact
          </button>

        </div>

      </div>

    </div>
  );
}