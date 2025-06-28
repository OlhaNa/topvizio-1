import { clients } from "../data/clients";

const Clients: React.FC = () => (
  <section id="clients" className="bg-black text-white font-alumni">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* ── breadcrumb style heading ─────────────────────────────── */}
      <header className="flex items-center gap-2 py-8">
        <span className="w-2 h-2 rounded-full bg-white" />
        <h2 className="uppercase text-xs tracking-wider font-semibold">
          our satisfied clients
        </h2>
      </header>

      {/* ── horizontal rule (2 px) ──────────────────────────────── */}
      <div className="h-[2px] w-full bg-white" />

      {/* ── logos grid ───────────────────────────────────────────── */}
      <ul
        className="
          grid gap-x-12 gap-y-8 place-items-center
          grid-cols-2 sm:grid-cols-3 lg:grid-cols-6
          py-12
        "
      >
        {clients.map((c) => (
          <li key={c.id} className="opacity-90 hover:opacity-100 transition">
            <img
              src={c.logo}
              alt={c.alt}
              className="h-10 lg:h-12 w-auto max-w-none"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Clients;
