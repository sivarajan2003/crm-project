import { useState } from "react";

export default function AddProductModal({ open, onClose, onAdd }) {

  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {

    onAdd({
      ...form,
      price: `₹${form.price}`
    });

    onClose();

    setForm({
      name: "",
      category: "",
      price: "",
      stock: ""
    });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white w-[420px] p-6 rounded-xl shadow-xl">

        <h2 className="text-xl font-bold mb-4">
          Add Product
        </h2>

        <div className="space-y-3">

          <input
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="category"
            placeholder="Category"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <input
            name="stock"
            placeholder="Stock"
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

        </div>

        <div className="flex justify-end gap-3 mt-5">

          <button
            onClick={onClose}
            className="border px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="bg-purple-600 text-white px-4 py-2 rounded"
          >
            Save Product
          </button>

        </div>

      </div>

    </div>
  );
}