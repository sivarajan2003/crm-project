export default function DealDetailsModal({ open, onClose, deal }) {

  if (!open || !deal) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">

      <div className="bg-white w-[450px] p-6 rounded-xl shadow-xl">

        <h2 className="text-xl font-bold mb-4">Deal Details</h2>

        <div className="space-y-3 text-sm">

          <p><b>Title:</b> {deal.title}</p>

          <p><b>Company:</b> {deal.company}</p>

          <p><b>Owner:</b> {deal.owner}</p>

          <p><b>Status:</b> {deal.status}</p>

          <p><b>Value:</b> {deal.value}</p>

          <p><b>Close Date:</b> {deal.close}</p>

        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-purple-600 text-white rounded"
          >
            Close
          </button>
        </div>

      </div>

    </div>
  );
}