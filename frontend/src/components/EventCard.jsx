export default function EventCard({
  title,
  date,
  location,
  image,
  price,
  category,
  onClick,
}) {
  return (
    <article
      onClick={onClick}
      className="group overflow-hidden rounded-[1.75rem] border border-emerald-100 bg-white shadow-lg shadow-emerald-100/60 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-200/70"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
            {category}
          </span>
          <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
            {price}
          </span>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h2 className="text-xl font-black text-slate-900">{title}</h2>
          <p className="mt-2 text-sm font-medium text-slate-500">{date}</p>
          <p className="text-sm text-slate-500">{location}</p>
        </div>

        <button
          type="button"
          className="inline-flex items-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          View Details
        </button>
      </div>
    </article>
  );
}
