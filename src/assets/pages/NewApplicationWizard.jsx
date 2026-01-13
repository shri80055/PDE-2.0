import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Users,
LandPlot,
    User,
    Phone,
  FileText,
  Upload,
  CheckCircle,
  Printer,
  Download,
  Mail,
} from "lucide-react";

import DropInput from "../components/common/DropInput";
import NewBtn from "../components/common/NewBtn";
import InputField from "../components/common/InputField";
import InputGroup from "../components/common/InputGroup";
import OTPInput from "../components/common/OPTInput";
import LivePreview from "../components/LivePreview";
import TypeCard from "../components/common/TypeCard";

/* ================= MOCK DATA ================= */

const DISTRICTS = [
  { id: "pune", name: "Pune" },
  { id: "nashik", name: "Nashik" },
];

const TALUKAS = {
  pune: [
    { id: "haveli", name: "Haveli" },
    { id: "mulshi", name: "Mulshi" },
  ],
};

const VILLAGES = {
  haveli: [
    { id: "wagholi", name: "Wagholi" },
    { id: "baner", name: "Baner" },
  ],
};

const SURVEY_MAP = {
  "1": [
    { id: "1", name: "1" },
    { id: "1/1", name: "1/1" },
    { id: "1/2", name: "1/2" },
    { id: "1/3", name: "1/3" },
  ],
  "2": [
    { id: "2", name: "2" },
    { id: "2/1", name: "2/1" },
  ],
  "3": [
    { id: "3", name: "3" },
  ],
};

/* ================= MAIN ================= */

function NewApplicationWizard() {
  const [step, setStep] = useState(0);

  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem("pde-draft");
    return saved
      ? JSON.parse(saved)
      : {
          district: "",
          taluka: "",
          village: "",
          mutationType: "",
          nameEn: "",
          nameMr: "",
          email: "",
          mobile: "",
          survey: "",
          mutation: "",
          otp: "",
        };
  });


  const [surveyPart1, setSurveyPart1] = useState("");
const [surveyOptions, setSurveyOptions] = useState([]);
const [surveyPart2, setSurveyPart2] = useState("");

  const handleSurveySearch = () => {
  if (SURVEY_MAP[surveyPart1]) {
    setSurveyOptions(SURVEY_MAP[surveyPart1]);
  } else {
    setSurveyOptions([]);
  }
  setSurveyPart2("");
};

  /* ===== AUTO SAVE DRAFT ===== */
  useEffect(() => {
    localStorage.setItem("pde-draft", JSON.stringify(form));
  }, [form]);

  const update = (key, value) =>
    setForm((p) => ({ ...p, [key]: value }));

  /* ===== VALIDATION ===== */
  const isValid = () => {
    switch (step) {
      case 0:
        return form.district && form.taluka && form.village;
      case 1:
        return form.mutationType;
      case 2:
        return form.nameEn && form.mobile;
      case 3:
        return form.survey;
      case 4:
        return true;
      case 5:
        return form.otp;
      default:
        return true;
    }
  };

  return (
<main
  id="main-content"
  className="max-w-auto mx-auto px-4 py-10"
>
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

    <div className="lg:col-span-3">

      {step > 0 && step < 6 && (
        <button
          onClick={() => setStep(step - 1)}
          className="flex items-center gap-2 text-sm text-gray-500 mb-6"
        >
          <ArrowLeft size={16} /> Back
        </button>
      )}

      {step >= 2 && step <= 5 && <Stepper current={step - 2} />}

      {/* ===== STEPS ===== */}
      {step === 0 && (
        <Card title="Select Jurisdiction" icon={MapPin}>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DropInput
            label="District / जिल्हा"
            required
            data={DISTRICTS}
            value={form.district}
            onChange={(e) => {
              update("district", e.target.value);
              update("taluka", "");
              update("village", "");
            }}
          />

          <DropInput
            label="Taluka / तालुका"
            required
            data={TALUKAS[form.district] || []}
            value={form.taluka}
            onChange={(e) => {
              update("taluka", e.target.value);
              update("village", "");
            }}
          />

          <DropInput
            label="Village / गाव"
            required
            data={VILLAGES[form.taluka] || []}
            value={form.village}
            onChange={(e) => update("village", e.target.value)}
          />
</div>
          <Footer>
            <NewBtn
              label="Proceed Next"
              onClick={() => setStep(1)}
              disabled={!isValid()}
            />
          </Footer>
        </Card>
      )}

      {step === 1 && (
  <>
    <h2 className="text-xl font-semibold mb-2">
      Select Application Type
    </h2>
    <p className="text-sm text-gray-500 mb-6">
      Choose the type of mutation entry you wish to apply for.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <TypeCard
        icon={Users}
        title="Heir Entry (Varse)"
        subtitle="Register legal heirs after death of land holder."
        onClick={() => {
          update("mutationType", "Heir Entry");
          setStep(2);
        }}
      />

      <TypeCard
        icon={LandPlot}
        title="Mortgage Entry (Boja)"
        subtitle="Add bank loan or mortgage details to 7/12."
        onClick={() => {
          update("mutationType", "Mortgage Entry");
          setStep(2);
        }}
      />

      <TypeCard
        icon={FileText}
        title="Mortgage Reduction"
        subtitle="Remove mortgage after loan repayment."
        onClick={() => {
          update("mutationType", "Mortgage Reduction");
          setStep(2);
        }}
      />

      <TypeCard
        icon={User}
        title="Khatedar Name Change"
        subtitle="Correction or change in holder's name."
        onClick={() => {
          update("mutationType", "Name Change");
          setStep(2);
        }}
      />

      <TypeCard
        icon={Users}
        title="Deceased Name Removal"
        subtitle="Remove name of deceased person from record."
        onClick={() => {
          update("mutationType", "Deceased Name Removal");
          setStep(2);
        }}
      />
    </div>
  </>
)}


      {step === 2 && (
        <Card title={form.mutationType} icon={Users}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            icon={Users}
            label="Full Name (English)"
            required
            value={form.nameEn}
            onChange={(e) => update("nameEn", e.target.value)}
          />
          <InputField
              icon={Users}
              label="Full Name (Marathi)"
              required
              value={form.nameMr}
              onChange={(e) => update("nameMr", e.target.value)}
            />    
          <InputField
            icon={Phone}
            label="Mobile Number"
            required
            value={form.mobile}
            onChange={(e) => update("mobile", e.target.value)}
          />
          <InputField
            icon={Mail}
            label="Email Address"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
          />
</div>
          <Footer>
            <NewBtn
              label="Save & Continue"
              onClick={() => setStep(3)}
              disabled={!isValid()}
            />
          </Footer>
        </Card>
      )}

      {step === 3 && (
        <Card title="Land Information" icon={FileText}>
          <div className="grid md:grid-cols-3 gap-4 items-end">
  <InputGroup
  label="Survey Number (Part 1)"
  required
  value={surveyPart1}
  onChange={(e) => setSurveyPart1(e.target.value)}
  onSearch={handleSurveySearch}
  placeholder="Enter survey number"
/>

<DropInput
  label="Survey No. (Part 2)"
  required
  data={surveyOptions}
  value={surveyPart2}
  onChange={(e) => {
   setSurveyPart2(e.target.value);
   update("survey", e.target.value);
 }}
  disabled={!surveyOptions.length}
/>
<InputField 
    label="Mutation No."
    icon={LandPlot}
     required
    value={form.mutation}
    onChange={(e) => update("mutation", e.target.value)}
    />

</div>


          <Footer>
           <NewBtn
  label="Save & Continue"
 onClick={() => {
   update("survey", surveyPart2);
  setStep(4);
 }}
  disabled={!isValid()}
/>

          </Footer>
        </Card>
      )}

      {step === 4 && (
        <Card title="Upload Documents" icon={Upload}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <UploadBox title="Supporting Document (PDF/JPG)" />
          <UploadBox title="Supporting Document (PDF/JPG)" />
          <UploadBox title="Supporting Document (PDF/JPG)" />
          <UploadBox title="Supporting Document (PDF/JPG)" />
          </div>
          <Footer>
            <NewBtn label="Save & Continue" onClick={() => setStep(5)} />
          </Footer>
        </Card>
      )}

      {step === 5 && (
        <Card title="Verify & Submit">
            <label className="text-sm font-medium text-gray-700 block">
                      Enter 6-digit OTP
                    </label>
            <OTPInput length={6}  onChange={(value) => update("otp", value)} />
         

          <Footer>
            <NewBtn
              label="Final Submit"
              onClick={() => {
                localStorage.removeItem("pde-draft");
                setStep(6);
              }}
              disabled={!isValid()}
            />
          </Footer>
        </Card>
      )}

      {step === 6 && <Receipt form={form} />}

      </div>

      {/* RIGHT – LIVE PREVIEW (40%) */}
<div className="hidden lg:block lg:col-span-2">
  <LivePreview form={form} step={step} />
</div>

    </div></main>
  );
}

export default NewApplicationWizard;

/* ================= RECEIPT ================= */

function Receipt({ form }) {
  return (
    <div className="max-w-3xl mx-auto bg-white border rounded-2xl shadow-sm p-8 print:shadow-none print:border-none">
      
      {/* Header */}
      <div className="text-center border-b pb-6 mb-6">
        <CheckCircle className="mx-auto text-green-600 mb-3" size={36} />
        <h2 className="text-2xl font-semibold text-gray-800">
          Application Submitted Successfully
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Public Data Entry System – Land Records Department
        </p>
      </div>

      {/* Summary Card */}
      <div className="bg-gray-50 border rounded-xl p-6 mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
          Application Summary
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Applicant Name</span>
            <span className="font-medium text-gray-800">{form.nameEn}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Mutation Type</span>
            <span className="font-medium text-gray-800">{form.mutationType}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Village</span>
            <span className="font-medium text-gray-800">{form.village}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Survey Number</span>
            <span className="font-medium text-gray-800">{form.survey}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Mutation No.</span>
            <span className="font-medium text-gray-800">{form.mutation}</span>
          </div>
        </div>
      </div>

      {/* Info Note */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-sm text-green-800 mb-6">
        This is a system-generated acknowledgement.  
        Please retain this receipt for future reference.
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-4 print:hidden">
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-md border text-sm font-medium
                     text-gray-700 hover:bg-gray-100"
        >
          <Printer size={16} />
          Print
        </button>

        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-teal-700 text-white
                     text-sm font-medium hover:bg-teal-800"
        >
          <Download size={16} />
          Download PDF
        </button>
      </div>
    </div>
  );
}


/* ================= UI HELPERS ================= */

function Card({ title, icon: Icon, children }) {
  return (
    <div className="bg-white border rounded-xl p-6">
      <div className="flex items-center gap-2 mb-4">
        {Icon && <Icon className="text-teal-700" />}
        <h2 className="font-semibold">{title}</h2>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Footer({ children }) {
  return (
    <div className="flex justify-end border-t pt-6 mt-6">
      {children}
    </div>
  );
}



function UploadBox({ title }) {
  return (
    <div className="border-2 border-dashed rounded-xl p-6 text-center">
      <Upload className="mx-auto text-gray-400 mb-2" />
      <p>{title}</p>
    </div>
  );
}

function Stepper({ current }) {
  const steps = ["Applicant", "Land Info", "Documents", "Verify"];
  return (
    <div className="flex justify-between mb-8">
      {steps.map((s, i) => (
        <div key={s} className="flex-1 text-center">
          <div
            className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center
            ${i <= current ? "bg-black text-white" : "border"}`}
          >
            {i + 1}
          </div>
          <p className="text-xs mt-2">{s}</p>
        </div>
      ))}
    </div>
  );
}
