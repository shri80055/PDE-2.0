import React from "react";
import {
  Landmark,
  ShieldCheck,
  Users,
  FileCheck,
  ClipboardList,
  Accessibility,
} from "lucide-react";
import NewCard from "../components/common/NewCard";
import About from "../Images/about.png";
function AboutUs() {
  return (
    <main
      id="main-content"
      className="max-w-7xl mx-auto px-4 py-2 space-y-16"
    >
      {/* ================= HERO SECTION ================= */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Public Data Entry System (PDE)
          </h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            A citizen-centric digital platform developed by the Land Records
            Department, Government of Maharashtra, to simplify access to land
            record services in a secure, transparent, and accountable manner.
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-700">
            <Badge icon={ShieldCheck} text="Secure & Verified" />
            <Badge icon={Accessibility} text="GIGW 3.0 Compliant" />
          </div>
        </div>

        {/* Illustration Placeholder */}
        <div className=" items-center justify-center">
          <img
            src={About}
            alt="Digital land records service illustration"
            className=""
          />
        </div>
      </section>

      {/* ================= WHAT IS PDE ================= */}
      <NewCard>
        <SectionHeader
          icon={Landmark}
          title="What is the Public Data Entry System?"
        />
        <p className="text-gray-700 leading-relaxed">
          The Public Data Entry System (PDE) enables citizens to submit
          applications related to land record services such as mutations,
          corrections, and updates through an online platform. The system
          minimizes physical visits to offices and ensures structured,
          traceable, and accurate submissions.
        </p>
      </NewCard>

      {/* ================= WHY PDE ================= */}
      <NewCard>
        <SectionHeader
          icon={Users}
          title="Why the PDE System was Introduced"
        />

        <div className="grid md:grid-cols-2 gap-6 text-gray-700">
          <Reason text="To make land record services easily accessible to citizens" />
          <Reason text="To reduce dependency on physical visits and intermediaries" />
          <Reason text="To improve the quality and completeness of applications" />
          <Reason text="To enhance transparency and accountability in processing" />
        </div>
      </NewCard>

      {/* ================= HOW IT WORKS ================= */}
      <NewCard>
        <SectionHeader
          icon={ClipboardList}
          title="How the PDE System Works"
        />

        <div className="grid md:grid-cols-4 gap-6 text-center text-sm">
          <Step number="1" text="Citizen submits application online" />
          <Step number="2" text="Documents uploaded securely" />
          <Step number="3" text="Application verified by department" />
          <Step number="4" text="Status updated and communicated" />
        </div>
      </NewCard>

      {/* ================= KEY FEATURES ================= */}
      <NewCard>
        <SectionHeader
          icon={FileCheck}
          title="Key Features"
        />

        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <Feature text="Online application submission and tracking" />
          <Feature text="Draft save and resume facility" />
          <Feature text="OTP-based authentication and verification" />
          <Feature text="Digital acknowledgement and receipt generation" />
          <Feature text="Secure document upload mechanism" />
          <Feature text="Role-based access and processing" />
        </div>
      </NewCard>

      {/* ================= COMPLIANCE ================= */}
      <NewCard>
        <SectionHeader
          icon={Accessibility}
          title="Standards & Accessibility"
        />
        <p className="text-gray-700 leading-relaxed">
          This portal is designed in accordance with the Guidelines for Indian
          Government Websites (GIGW) 3.0. It follows accessibility,
          usability, and security best practices to ensure inclusive access
          for all citizens, including persons with disabilities.
        </p>
      </NewCard>

      {/* ================= DISCLAIMER ================= */}
      <NewCard>
        <SectionHeader
          icon={ShieldCheck}
          title="Disclaimer"
        />
        <p className="text-gray-700 text-sm leading-relaxed">
          Submission of applications through the Public Data Entry System
          does not guarantee approval. All applications are subject to
          verification and approval by the competent authority as per
          applicable laws and regulations.
        </p>
      </NewCard>
    </main>
  );
}

export default AboutUs;

/* ================= SUB COMPONENTS ================= */

function SectionHeader({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-6 h-6 text-teal-700" />
      <h2 className="text-xl font-semibold text-gray-800">
        {title}
      </h2>
    </div>
  );
}

function Badge({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 bg-white border rounded-full px-4 py-1">
      <Icon className="w-4 h-4 text-teal-700" />
      <span>{text}</span>
    </div>
  );
}

function Reason({ text }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-teal-700 font-bold">•</span>
      <span>{text}</span>
    </div>
  );
}

function Step({ number, text }) {
  return (
    <div className="bg-[#F2FBF9] rounded-lg p-4">
      <div className="text-xl font-bold text-teal-700 mb-2">
        {number}
      </div>
      <p>{text}</p>
    </div>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-teal-700 font-bold">✔</span>
      <span>{text}</span>
    </div>
  );
}
