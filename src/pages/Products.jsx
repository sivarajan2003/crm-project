import { useState } from "react";
import { Search, Plus, Package } from "lucide-react";
import AddProductModal from "../components/AddProductModal";
import { motion } from "framer-motion";

const productData = [
  { id: 1, name: "CRM Enterprise License", category: "Software", price: "₹25,000", stock: 120 },
  { id: 2, name: "Cloud Migration Service", category: "Service", price: "₹45,000", stock: 50 },
  { id: 3, name: "Annual Support Package", category: "Support", price: "₹12,000", stock: 200 },
  { id: 4, name: "CRM Enterprise License", category: "Software", price: "₹25,000", stock: 120 },
  { id: 5, name: "Cloud Migration Service", category: "Service", price: "₹45,000", stock: 50 },
  { id: 6, name: "Annual Support Package", category: "Support", price: "₹12,000", stock: 200 }
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

  // Dutch Animated Layout mapping
  const listAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" }
    })
  };

  const fontInter = { fontFamily: '"Inter", sans-serif' };

  return (
    <div className="p-4 md:p-6 bg-[#f8fafc] min-h-screen" style={fontInter}>

      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-[26px] tracking-[-0.5px] font-bold text-[#111827] leading-tight">
            Products
          </h1>
          <p className="text-[14px] text-[#6b7280] mt-1">
            Manage your CRM products and services
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-[#1677ff] hover:bg-[#0958d9] transition-colors text-white px-4 h-10 rounded-[8px] font-medium text-[14px] shadow-sm"
        >
          <Plus size={18}/>
          Add Product
        </button>
      </div>

      {/* ================= SEARCH AREA ================= */}
      <div className="bg-white p-4 lg:px-5 rounded-[12px] shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-[#e5e7eb] mb-6">
        <div className="flex items-center gap-3 w-full lg:max-w-sm bg-[#f9fafb] border border-[#d1d5db] px-3 h-10 rounded-[8px]">
          <Search size={18} className="text-[#9ca3af]"/>
          <input
            type="text"
            placeholder="Search product..."
            className="outline-none bg-transparent w-full text-[14px] text-[#111827]"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            style={fontInter}
          />
        </div>
      </div>

      {/* ================= PRODUCT LIST ================= */}
      <div className="space-y-4">
        {filteredProducts.map((product, i) => (
          <motion.div
            key={product.id}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={listAnimation}
            className="bg-white p-5 lg:px-6 rounded-[14px] shadow-[0_6px_18px_rgba(15,23,42,0.06)] border border-[transparent] flex flex-col md:flex-row md:justify-between md:items-center gap-4 hover:border-[#e2e8f0] hover:shadow-[0_10px_30px_rgba(2,6,23,0.08)] transition-all"
          >
            {/* LEFT SIDE: Name & Data */}
            <div className="flex items-center gap-4">
              
              {/* Dutch Pastel Icon Circle */}
              <div className="bg-[#f0f5ff] text-[#1677ff] w-[48px] h-[48px] rounded-[12px] flex items-center justify-center shrink-0">
                <Package size={22} />
              </div>

              <div>
                <h3 className="text-[16px] font-bold text-[#111827]">
                  {product.name}
                </h3>

                <div className="text-[#6b7280] text-[13px] mt-[4px] font-medium flex items-center gap-2">
                  <span>Category: <span className="text-[#4b5563]">{product.category}</span></span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>Stock: <span className="text-[#4b5563]">{product.stock}</span></span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Price & Button */}
            <div className="md:text-right flex items-center justify-between md:flex-col md:items-end border-t border-gray-100 pt-4 md:border-none md:pt-0 mt-2 md:mt-0">
              
              {/* Product Price (NOW BLACK TEXT) */}
              <div className="md:mb-2 text-[#111827] font-[800] text-[20px] leading-none">
                {product.price}
              </div>

              <button className="flex items-center justify-center border border-[#d1d5db] bg-white text-[#4b5563] hover:text-[#1890ff] hover:border-[#1890ff] px-4 h-9 rounded-lg text-[13px] font-medium transition-colors hover:bg-blue-50">
                View Details
              </button>

            </div>
          </motion.div>
        ))}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-[14px] border border-dashed border-gray-300">
             <p className="text-[#6b7280] font-medium text-[14px]">No products found matching your search.</p>
          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}
      <AddProductModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onAdd={handleAddProduct}
      />
    </div>
  );
}
