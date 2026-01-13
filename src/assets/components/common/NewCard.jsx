function NewCard({ title, children }) {
  return (
    <section className="bg-white border rounded-lg p-6 space-y-4">
      {title && (
        <h3 className="text-lg font-semibold text-gray-800">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
}

export default NewCard;
