import { useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard";
import HeroSection from "../components/heroSection";

const featuredEvents = [
  {
    id: "music-festival",
    title: "Mekong Music Festival",
    date: "March 30, 2026",
    location: "Phnom Penh",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
    price: "$29",
    category: "Live Music",
    description:
      "A waterfront celebration packed with live performances, local food, and late-night energy.",
  },
  {
    id: "tech-conference",
    title: "Future Tech Conference",
    date: "April 5, 2026",
    location: "Siem Reap",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    price: "$49",
    category: "Technology",
    description:
      "Talks, product demos, and networking sessions with builders, founders, and designers.",
  },
  {
    id: "food-market",
    title: "Night Food Market",
    date: "April 12, 2026",
    location: "Battambang",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    price: "Free",
    category: "Food & Culture",
    description:
      "Street food, crafts, and family-friendly performances in a lively evening market setting.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const openEvent = (event) => {
    navigate(`/events/${event.id}`, { state: { event } });
  };

  return (
    <main className="bg-gradient-to-b from-emerald-50 via-white to-white">
      <HeroSection
        title="Discover the Art of Refined Travel"
        image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Featured Events
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">
              Start with what&apos;s trending now
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-500">
            These are sample featured events for now. Once the backend event API
            is wired up, we can replace them with live data.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredEvents.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              location={event.location}
              image={event.image}
              price={event.price}
              category={event.category}
              onClick={() => openEvent(event)}
            />
          ))}
        </div>
      </section>


      <section>
        <div>
            <p className="text-green font-semi">EDITORIAL INSIGHTS</p>
            <h1 className="text-3xl">Get our curated travel guides.</h1>
            <p className="text-green font-semi">weekly insights from our concierges on the world's most hodden gems and exclusive stays.</p>
          
        </div>
      </section>
    </main>
  );
};

export default Home;
