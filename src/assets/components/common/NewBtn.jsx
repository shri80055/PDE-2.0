function NewBtn({ label, variant = "primary", ...props }) {
  const styles = {
    primary:
      "bg-teal-700 text-white hover:bg-teal-800",
    secondary:
      "border border-teal-700 text-teal-700 hover:bg-teal-50",
  };

  return (
    <button
      {...props}
      className={`px-5 py-2 rounded-md text-sm font-medium transition
      focus:ring-2 focus:ring-teal-600 ${styles[variant]}`}
    >
      {label}
    </button>
  );
}

export default NewBtn;
