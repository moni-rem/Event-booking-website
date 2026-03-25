const categories = [
  { label: "Mansions", icon: "castle" },
  { label: "Countryside", icon: "mountain" },
  { label: "Beachfront", icon: "wave" },
  { label: "Cabins", icon: "home" },
  { label: "Penthouses", icon: "building" },
  { label: "Amazing Pools", icon: "pool" },
  { label: "Arctic", icon: "frame" },
  { label: "Vineyards", icon: "glass" },
];

const Icon = ({ type }) => {
  const commonProps = {
    className: "h-5 w-5 text-slate-700",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  };

  switch (type) {
    case "castle":
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 20h16M5 20V8l3 2V6l4 2 4-2v4l3-2v12M9 20v-4h6v4" />
        </svg>
      );
    case "mountain":
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 19h18L14 8l-2 3-2-2-7 10Z" />
        </svg>
      );
    case "wave":
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 2-2M3 19c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 2-2" />
        </svg>
      );
    case "home":
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 11 12 5l8 6M6 10.5V19h12v-8.5M10 19v-5h4v5" />
        </svg>
      );
    case "building":
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 20V8h12v12M9 11h.01M9 14h.01M9 17h.01M12 11h.01M12 14h.01M12 17h.01M15 11h.01M15 14h.01M15 17h.01M4 20h16" />
        </svg>
      );
    case "pool":
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 10V5h4a3 3 0 0 1 0 6H7Zm0 0h10M4 19c1.5 0 1.5-1 3-1s1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1" />
        </svg>
      );
    case "frame":
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M5 5h14v14H5zM9 15l2-2 2 2 3-4" />
        </svg>
      );
    case "glass":
      return (
        <svg {...commonProps}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M8 4h8l-3 7v5l2 4H9l2-4v-5L8 4Z" />
        </svg>
      );
    default:
      return null;
  }
};

const SearchItem = ({ icon, label, value, withBorder = true }) => (
  <div className={`flex items-center gap-3 px-5 py-4 ${withBorder ? "border-b border-slate-200 md:border-b-0 md:border-r" : ""}`}>
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">
      <Icon type={icon} />
    </div>
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-slate-400">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium text-slate-500">{value}</p>
    </div>
  </div>
);

export default function HeroSection({ title, image }) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-xl shadow-slate-200/70">
        <div className="relative min-h-[560px] overflow-hidden sm:min-h-[620px]">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/20 to-slate-100/15" />

          <div className="relative flex min-h-[560px] flex-col items-center justify-center px-6 pb-28 pt-16 text-center sm:min-h-[620px] sm:px-12">
            <h1 className="max-w-3xl text-4xl font-black leading-[0.95] text-white drop-shadow-lg sm:text-6xl">
              {title}
            </h1>

            <div className="absolute bottom-10 left-1/2 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 rounded-[1.75rem] bg-white shadow-2xl shadow-slate-900/20">
              <div className="grid md:grid-cols-[1.2fr_1fr_0.95fr_auto]">
                <SearchItem icon="castle" label="Where" value="Explore destinations" />
                <SearchItem icon="building" label="When" value="Add dates" />
                <SearchItem icon="home" label="Who" value="Add guests" withBorder={false} />
                <button
                  type="button"
                  className="m-4 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 px-4 py-6 sm:px-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {categories.map((category) => (
              <button
                key={category.label}
                type="button"
                className="flex flex-col items-center gap-3 rounded-2xl bg-white px-3 py-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50">
                  <Icon type={category.icon} />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                  {category.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
