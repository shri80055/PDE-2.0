import React, { useState } from "react";
import { Bell, Newspaper } from "lucide-react";
import NoticeCard from "../components/common/NoticeCard";
import NewsModal from "../components/common/NewsModal";

/* ================= MOCK DATA ================= */

const DATA = [
  {
    id: 1,
    type: "notice",
    title: "Scheduled Maintenance on PDE Portal",
    desc: "The Public Data Entry portal will be unavailable on 18th Sept 2026 from 10:00 PM to 12:00 AM due to system maintenance.",
    date: "15 Sep 2026",
  },
  {
    id: 2,
    type: "news",
    title: "New Online Mutation Services Launched",
    desc: "Citizens can now apply for Mortgage Entry and Name Change services online through PDE 2.0.",
    date: "10 Sep 2026",
  },
  {
    id: 3,
    type: "notice",
    title: "Important Instructions for Survey Number Entry",
    desc: "Applicants must ensure that Survey and Gat numbers match the 7/12 extract.",
    date: "05 Sep 2026",
  },
];





/* ================= PAGE ================= */

function NewsNotice() {

    const [selectedItem, setSelectedItem] = useState(null);

  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? DATA
      : DATA.filter((item) => item.type === filter);

  return (

    
    <main id="main-content" className="max-w-7xl mx-auto px-4 py-10">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          News & Notices
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Latest updates, announcements, and important information for citizens.
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-6">
        <FilterBtn
          active={filter === "all"}
          onClick={() => setFilter("all")}
        >
          All
        </FilterBtn>

        <FilterBtn
          active={filter === "news"}
          onClick={() => setFilter("news")}
        >
          News
        </FilterBtn>

        <FilterBtn
          active={filter === "notice"}
          onClick={() => setFilter("notice")}
        >
          Notices
        </FilterBtn>
      </div>

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredData.map((item) => (
          <NoticeCard key={item.id} item={item} onView={() => setSelectedItem(item)} />
        ))}

        {filteredData.length === 0 && (
          <p className="text-sm text-gray-500">
            No records found.
          </p>
        )}
      </div>


      {selectedItem && (
  <NewsModal
    item={selectedItem}
    onClose={() => setSelectedItem(null)}
  />
)}
    </main>
  );
}

export default NewsNotice;

/* ================= COMPONENTS ================= */


function FilterBtn({ active, children, ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 text-sm rounded-md border transition ${
        active
          ? "bg-teal-700 text-white border-teal-700"
          : "bg-white text-gray-700 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
  );
}
