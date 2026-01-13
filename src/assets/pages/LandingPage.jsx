import React from "react";
import {
  FileText,
  CheckCircle,
  Clock,
  XCircle,
  Plus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import NewCard from "../components/common/NewCard";
import NewBtn from "../components/common/NewBtn";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <main
      id="main-content"
      className="max-w-7xl mx-auto px-4 py-10 space-y-8"
    >
      {/* ================= HEADER ================= */}
      <section className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Welcome back, Rajesh Kulkarni
          </p>
        </div>

        <NewBtn
          label="New Application"
          iconLeft={Plus}
          onClick={() => navigate("/newapp")}
        />
      </section>

      {/* ================= STATS ================= */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={FileText}
          label="Total Applications"
          value="24"
          color="blue"
        />
        <StatCard
          icon={CheckCircle}
          label="Approved"
          value="18"
          color="green"
        />
        <StatCard
          icon={Clock}
          label="Pending Scrutiny"
          value="4"
          color="orange"
        />
        <StatCard
          icon={XCircle}
          label="Rejected"
          value="2"
          color="red"
        />
      </section>

      {/* ================= RECENT ACTIVITY ================= */}
      <NewCard>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold tracking-wide text-gray-700">
            RECENT ACTIVITY
          </h2>
          <button className="text-sm text-blue-600 hover:underline">
            View All Records
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-3">Application ID</th>
                <th>Type</th>
                <th>Village</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              <TableRow
                id="MH-2023-8892"
                type="Heir Entry"
                village="Wagholi"
                status="In Scrutiny"
                date="Oct 24, 2023"
              />
              <TableRow
                id="MH-2023-8893"
                type="Mortgage"
                village="Baner"
                status="Approved"
                date="Oct 23, 2023"
              />
              <TableRow
                id="MH-2023-8894"
                type="Name Change"
                village="Paud"
                status="Rejected"
                date="Oct 22, 2023"
              />
            </tbody>
          </table>
        </div>
      </NewCard>
    </main>
  );
}

export default LandingPage;

/* ================= SUB COMPONENTS ================= */

function StatCard({ icon: Icon, label, value, color }) {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-600",
    red: "bg-red-50 text-red-600",
  };

  return (
    <NewCard>
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors[color]}`}
        >
          <Icon className="w-5 h-5" />
        </div>

        <div>
          <p className="text-2xl font-semibold text-gray-800">
            {value}
          </p>
          <p className="text-sm text-gray-500">
            {label}
          </p>
        </div>
      </div>
    </NewCard>
  );
}

function TableRow({ id, type, village, status, date }) {
  const statusStyles = {
    "In Scrutiny": "bg-orange-50 text-orange-600",
    Approved: "bg-green-50 text-green-600",
    Rejected: "bg-red-50 text-red-600",
  };

  return (
    <tr>
      <td className="py-4 text-gray-600">{id}</td>
      <td className="font-medium text-gray-800">{type}</td>
      <td className="text-gray-600">{village}</td>
      <td>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}
        >
          {status}
        </span>
      </td>
      <td className="text-gray-500">{date}</td>
    </tr>
  );
}
