import { ChevronDown } from "lucide-react";

function DropInput({ label, data = [], required, ...props }) {
  return (
    <div className="w-full space-y-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>

      <div className="relative">
        <select
          {...props}
          className="w-full appearance-none px-3 py-2 border rounded-md bg-white text-sm
          focus:ring-2 focus:ring-teal-600 focus:outline-none"
        >
          <option value="">Select</option>
          {data.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
    </div>
  );
}

export default DropInput;
