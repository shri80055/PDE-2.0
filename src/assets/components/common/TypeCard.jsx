function TypeCard({ icon: Icon, title, subtitle, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-left bg-white border rounded-xl p-6
                 hover:border-teal-600 hover:shadow-sm
                 transition focus:outline-none focus:ring-2 focus:ring-teal-600"
    >
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center
                      rounded-lg bg-gray-50 mb-4">
        <Icon className="text-gray-700" size={20} />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-gray-800 mb-1">
        {title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-gray-500 leading-snug">
        {subtitle}
      </p>
    </button>
  );
}
