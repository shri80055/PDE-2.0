import { useRef } from "react";

function OTPInput({ length = 6, onChange }) {
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, "");
    if (!value) return;

    e.target.value = value;
    if (index < length - 1) {
      inputsRef.current[index + 1].focus();
    }

    collectOtp();
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const collectOtp = () => {
    const otp = inputsRef.current.map((i) => i.value).join("");
    onChange?.(otp);
  };

  return (
    <div className="flex  gap-2">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          maxLength={1}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-12 h-12 text-center text-lg font-semibold border rounded-md
          focus:ring-2 focus:ring-teal-600 focus:outline-none"
        />
      ))}
    </div>
  );
}

export default OTPInput;
