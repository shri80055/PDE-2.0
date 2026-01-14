import React, { useEffect } from "react";

function NewsModal({ item, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const isNotice = item.type === "notice";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div
        role="dialog"
        aria-modal="true"
        className="bg-white rounded-xl max-w-xl w-full mx-4 p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>

        <span
          className={`inline-block mb-3 px-3 py-1 text-xs font-medium rounded-full ${
            isNotice
              ? "bg-red-50 text-red-700"
              : "bg-teal-50 text-teal-700"
          }`}
        >
          {isNotice ? "Notice" : "News"}
        </span>

        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {item.title}
        </h2>

        <p className="text-sm text-gray-400 mb-4">{item.date}</p>

        <p className="text-sm text-gray-700 leading-relaxed">
          {item.desc}
        </p>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-md border hover:bg-gray-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsModal;
