/* ================= LIVE PREVIEW ================= */

function LivePreview({ form, step }) {
  return (
    <div className="sticky top-6">
      <div className="bg-gray-50 border rounded-xl p-6">
        
        <h3 className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wide">
          Application Preview
        </h3>

        <PreviewItem label="District" value={form.district} />
        <PreviewItem label="Taluka" value={form.taluka} />
        <PreviewItem label="Village" value={form.village} />

        <Divider />

        <PreviewItem label="Mutation Type" value={form.mutationType} />

        <Divider />

        <PreviewItem label="Applicant Name" value={form.nameEn} />
        <PreviewItem label="Mobile" value={form.mobile} />
        <PreviewItem label="Email" value={form.email} />

        <Divider />

        <PreviewItem label="Survey No" value={form.survey} />
        <PreviewItem label="Mutation No" value={form.mutation} />

        <Divider />

        <PreviewItem
          label="Documents"
          value={step >= 4 ? "Uploaded / In Progress" : "Pending"}
        />

        <Divider />

        <PreviewItem
          label="Status"
          value={
            step < 6
              ? "Draft / In Progress"
              : "Submitted Successfully"
          }
          highlight
        />
      </div>
    </div>
  );
}
export default LivePreview;




function PreviewItem({ label, value, highlight }) {
  return (
    <div className="flex justify-between text-sm mb-2">
      <span className="text-gray-500">{label}</span>
      <span
        className={`font-medium text-right ${
          highlight ? "text-green-700" : "text-gray-800"
        }`}
      >
        {value || "—"}
      </span>
    </div>
  );
}

function Divider() {
  return <div className="border-t my-3" />;
}
