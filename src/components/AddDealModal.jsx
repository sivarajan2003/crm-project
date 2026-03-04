import { useState } from "react";

export default function AddDealModal({ open, onClose, onAdd }) {

  const [form, setForm] = useState({
    title: "",
    company: "",
    owner: "",
    value: "",
    status: "Lead",
    close: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
  onAdd(form);

  setForm({
    title: "",
    company: "",
    owner: "",
    value: "",
    status: "Lead",
    close: "",
  });

  onClose();
};

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">

      <div className="bg-white w-[450px] p-6 rounded-xl shadow-xl">

        <h2 className="text-xl font-bold mb-4">Create Deal</h2>

        <div className="space-y-3">

          <input
            name="title"
            placeholder="Deal Title"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="company"
            placeholder="Company"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="owner"
            placeholder="Owner"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="value"
            placeholder="Deal Value"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <select
            name="status"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option>Lead</option>
            <option>Qualified</option>
            <option>Proposal</option>
            <option>Negotiation</option>
            <option>Closed Won</option>
            <option>Closed Lost</option>
          </select>

          <input
            type="date"
            name="close"
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
            className="px-4 py-2 bg-purple-600 text-white rounded"
          >
            Create Deal
          </button>

        </div>

      </div>

    </div>
  );
}