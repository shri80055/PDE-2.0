import React from "react";
import { Bell, Newspaper } from "lucide-react";

function NoticeCard({ item, onView }) {
  const isNotice = item.type === "notice";

  return (
    <div className="bg-white border rounded-xl p-6 hover:shadow-sm transition">
      
      {/* Icon + Badge */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center">
          {isNotice ? (
            <Bell size={18} className="text-red-600" />
          ) : (
            <Newspaper size={18} className="text-teal-700" />
          )}
        </div>

        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            isNotice
              ? "bg-red-50 text-red-700"
              : "bg-teal-50 text-teal-700"
          }`}
        >
          {isNotice ? "Notice" : "News"}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-gray-800 mb-2">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        {item.desc}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-400">{item.date}</span>
        <button className="text-teal-700 hover:underline font-medium" onClick={onView}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default NoticeCard;
