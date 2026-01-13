import { FileText } from "lucide-react";

function NewTextarea({ label, required, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>

      <div className="relative">
        <FileText className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
        <textarea
          {...props}
          rows={4}
          className="w-full pl-10 pr-3 py-2 border rounded-md text-sm
          focus:ring-2 focus:ring-teal-600 focus:outline-none resize-none"
        />
      </div>
    </div>
  );
}

export default NewTextarea;
