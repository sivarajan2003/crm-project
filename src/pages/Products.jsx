import { useState } from "react";
import { Search, Plus, Package } from "lucide-react";
import AddProductModal from "../components/AddProductModal";
const productData = [
  {
    id: 1,
    name: "CRM Enterprise License",
    category: "Software",
    price: "₹25,000",
    stock: 120
  },
  {
    id: 2,
    name: "Cloud Migration Service",
    category: "Service",
    price: "₹45,000",
    stock: 50
  },
  {
    id: 3,
    name: "Annual Support Package",
    category: "Support",
    price: "₹12,000",
    stock: 200
  },
  {
    id: 4,
    name: "CRM Enterprise License",
    category: "Software",
    price: "₹25,000",
    stock: 120
  },
  {
    id: 5,
    name: "Cloud Migration Service",
    category: "Service",
    price: "₹45,000",
    stock: 50
  },
  {
    id: 6,
    name: "Annual Support Package",
    category: "Support",
    price: "₹12,000",
    stock: 200
  }
];

export default function Product() {

  const [products, setProducts] = useState(productData);
  const [search, setSearch] = useState("");
const [showModal, setShowModal] = useState(false);
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
const handleAddProduct = (newProduct) => {

  const product = {
    id: Date.now(),
    ...newProduct
  };

  setProducts([...products, product]);

};
  return (
    <div className="p-8 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-500">
            Manage your CRM products and services
          </p>
        </div>

        <button
onClick={() => setShowModal(true)}
className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-5 py-2 rounded-lg shadow"
>
<Plus size={16}/>
Add Product
</button>

      </div>


      {/* SEARCH */}
      <div className="bg-white border rounded-xl p-5 mb-6">

        <div className="flex items-center border rounded-lg px-4 py-2 w-[350px] bg-gray-50">

          <Search size={18} className="text-gray-400"/>

          <input
            type="text"
            placeholder="Search product..."
            className="outline-none bg-transparent ml-2 w-full"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />

        </div>

      </div>


      {/* PRODUCT LIST */}
      <div className="space-y-4">

        {filteredProducts.map((product)=>(
          
          <div
            key={product.id}
            className="bg-white border rounded-xl p-6 flex justify-between items-center"
          >

            {/* LEFT */}
            <div className="flex items-center gap-4">

              <div className="bg-purple-100 p-3 rounded-lg">
                <Package size={20} className="text-purple-600"/>
              </div>

              <div>

                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>

                <p className="text-gray-500">
                  Category: {product.category}
                </p>

                <p className="text-gray-400 text-sm">
                  Stock: {product.stock}
                </p>

              </div>

            </div>


            {/* RIGHT */}
            <div className="text-right">

              <div className="text-purple-600 font-bold text-xl mb-2">
                {product.price}
              </div>

              <button className="border px-4 py-2 rounded-lg text-sm hover:bg-gray-50">
                View Details
              </button>

            </div>

          </div>

        ))}

      </div>
<AddProductModal
open={showModal}
onClose={() => setShowModal(false)}
onAdd={handleAddProduct}
/>
    </div>
  );
}