import React, { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  FileText,
  Landmark,
  UserCheck,
} from "lucide-react";

/* ================= FAQ DATA ================= */

const FAQ_DATA = [
  {
    id: 1,
    icon: Landmark,
    question: "What is Public Data Entry (PDE) System?",
    answer:
      "Public Data Entry (PDE) System allows citizens to submit land mutation applications online without visiting government offices.",
  },
  {
    id: 2,
    icon: UserCheck,
    question: "Who can apply through PDE 2.0?",
    answer:
      "Any citizen related to land ownership, heirship, mortgage, or correction in land records can apply through PDE 2.0.",
  },
  {
    id: 3,
    icon: FileText,
    question: "Which mutation services are available?",
    answer:
      "Services include Heir Entry (Varse), Mortgage Entry (Boja), Mortgage Reduction, and Name Correction.",
  },
  {
    id: 4,
    icon: FileText,
    question: "What documents are required?",
    answer:
      "Documents depend on application type. Common documents include death certificate, affidavit, identity proof, and land documents.",
  },
  {
    id: 5,
    icon: HelpCircle,
    question: "How can I track my application?",
    answer:
      "After submission, an acknowledgement receipt is generated. You can track the application using the provided Application Number.",
  },
];

/* ================= PAGE ================= */

function FAQ() {
  const [openId, setOpenId] = useState(null);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      
      {/* Hero Header */}
      <div className=" text-[#0f4450] mb-10">
        <div className="flex items-center gap-3 mb-2">
          <HelpCircle size={28} />
          <h1 className="text-2xl font-semibold">
            Help & FAQs
          </h1>
        </div>
      </div>

      {/* FAQ Cards */}
      <div className="space-y-5">
        {FAQ_DATA.map((item) => (
          <FAQCard
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() =>
              setOpenId(openId === item.id ? null : item.id)
            }
          />
        ))}
      </div>
    </main>
  );
}

export default FAQ;

/* ================= COMPONENT ================= */

function FAQCard({ item, isOpen, onToggle }) {
  const Icon = item.icon;

  return (
    <div
      className={`rounded-2xl border transition-all duration-200 ${
        isOpen
          ? "border-teal-600 bg-teal-50"
          : "border-gray-200 bg-white hover:border-teal-300"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left
                   focus:outline-none focus:ring-2 focus:ring-teal-600 rounded-2xl"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-lg ${
              isOpen
                ? "bg-teal-600 text-white"
                : "bg-gray-100 text-teal-700"
            }`}
          >
            <Icon size={20} />
          </div>

          {/* Question */}
          <div>
            <h3 className="font-medium text-gray-800">
              {item.question}
            </h3>
            {!isOpen && (
              <p className="text-xs text-gray-500 mt-1">
                Click to view details
              </p>
            )}
          </div>
        </div>

        {/* Arrow */}
        <ChevronDown
          className={`transition-transform ${
            isOpen ? "rotate-180 text-teal-700" : "text-gray-400"
          }`}
        />
      </button>

      {/* Answer */}
      {isOpen && (
        <div className="px-6 pb-5 pl-[4.5rem] text-sm text-gray-700 leading-relaxed">
          {item.answer}
        </div>
      )}
    </div>
  );
}
