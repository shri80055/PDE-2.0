import { Search } from "lucide-react";

function InputGroup({
  label,
  required,
  value,
  onChange,
  onSearch,
  placeholder = "Search...",
}) {
  return (
    <div className="w-full space-y-1">
      {/* Label */}
      <label className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>

      {/* Input Group */}
      <div
        className="flex items-center rounded-lg border border-gray-300 bg-white
                   focus-within:ring-2 focus-within:ring-teal-600"
      >
        {/* Left Icon */}
        <span className="pl-3 text-gray-400">
          <Search size={16} />
        </span>

        {/* Input */}
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 px-2 py-2 text-sm bg-transparent outline-none"
        />

        {/* Divider */}
        <span className="h-6 w-px bg-gray-300" />

        {/* Button */}
        <button
          type="button"
          onClick={onSearch}
          className="px-5 py-2 text-sm font-medium text-teal-700
                     hover:bg-teal-50 rounded-r-lg focus:outline-none"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default InputGroup;
