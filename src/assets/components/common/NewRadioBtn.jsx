import { CheckCircle } from "lucide-react";

function NewRadioBtn({ label, options = [], value, onChange }) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-medium text-gray-700">{label}</p>

      <div className="grid sm:grid-cols-2 gap-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`flex items-center gap-3 p-3 border rounded-md text-sm
              ${value === opt.value
                ? "border-teal-600 bg-teal-50"
                : "border-gray-300 hover:border-teal-400"}
            `}
          >
            <CheckCircle
              className={`w-5 h-5 ${
                value === opt.value ? "text-teal-600" : "text-gray-300"
              }`}
            />
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NewRadioBtn;
