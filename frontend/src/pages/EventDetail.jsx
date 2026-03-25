import { Link, useLocation, useParams } from "react-router-dom";

export default function EventDetail() {
  const { state } = useLocation();
  const { eventId } = useParams();
  const event = state?.event;

  if (!event) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-emerald-100 bg-white p-8 text-center shadow-xl shadow-emerald-100/60">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
            Event Detail
          </p>
          <h1 className="mt-3 text-3xl font-black text-slate-900">
            Event data is not available yet
          </h1>
          <p className="mt-4 text-sm leading-6 text-slate-500">
            We reached the detail route for <span className="font-semibold text-slate-700">{eventId}</span>,
            but no event payload was passed in navigation state.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gradient-to-b from-emerald-50 via-white to-white">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-xl shadow-emerald-100/60">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative min-h-[320px]">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-between p-8 sm:p-10">
              <div>
                <p className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                  {event.category}
                </p>
                <h1 className="mt-5 text-4xl font-black text-slate-900">
                  {event.title}
                </h1>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {event.description}
                </p>
              </div>

              <div className="mt-8 grid gap-4 rounded-[1.5rem] bg-emerald-50 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                    Date
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    {event.date}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                    Location
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    {event.location}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                    Price
                  </p>
                  <p className="mt-1 text-base font-semibold text-slate-900">
                    {event.price}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Book Now
                </button>
                <Link
                  to="/"
                  className="rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
