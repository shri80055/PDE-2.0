import React from "react";

function InputField({
  label,
  icon: Icon,
  required,
  type = "text",
  ...props
}) {
  return (
    <div className="w-full space-y-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-600 ml-1">*</span>}
      </label>

      <div className="relative">
 {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        )}
        <input
          type={type}
          {...props}
          className="w-full pl-10 pr-3 py-2 border rounded-md bg-white text-sm 
          focus:ring-2 focus:ring-teal-600 focus:outline-none"
        />
      </div>
    </div>
  );
}

export default InputField;
