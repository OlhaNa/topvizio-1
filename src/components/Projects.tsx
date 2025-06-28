import { projects } from "../data/projects";
import { ArrowUpRight } from "lucide-react";

const Projects: React.FC = () => (
  <section id="projects" className="bg-black text-white font-alumni">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* ── breadcrumb ────────────────────────────────────────────── */}
      <header className="flex items-center gap-2 py-8 lg:col-span-3">
        <span className="w-2 h-2 rounded-full bg-white" />
        <h2 className="uppercase text-xs tracking-wider font-semibold">
          our projects
        </h2>
      </header>

      {/* ── top rail ──────────────────────────────────────────────── */}
      <div className="h-[2px] w-full bg-white lg:col-span-3" />

      {/* ── project list ─────────────────────────────────────────── */}
      <ol>
        {projects.map((proj) => (
          <li
            key={proj.id}
            className="pt-12 pb-0 lg:grid lg:auto-rows-min   lg:grid-cols-[0.4fr_0.25fr_0.35fr] lg:gap-x-12"
          >
            {/* col‑1 : title (row‑1) */}
            <h3 className="w-max inline-block text-[40px] lg:text-[48px] font-extrabold uppercase border-y-2 border-white py-0 lg:col-start-1 lg:row-start-1">
              {proj.title}
            </h3>

            {/* col‑2 : bullet tags (row‑1) */}
            <ul className="mt-6 lg:mt-0 lg:col-start-2 lg:row-start-1 space-y-2">
              {proj.tags.map((tag) => (
                <li key={tag} className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  {tag}
                </li>
              ))}
            </ul>

            {/* col‑1 : button (row‑2) */}
            <button
              type="button"
              className="mt-12 inline-flex items-center gap-2
                     px-6 py-2 border-2 border-white
                     text-[20px] font-normal uppercase
                     hover:bg-white hover:text-black transition-colors
                     self-start lg:col-start-1 lg:row-start-4 lg:justify-self-start"
            >
              find out more
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </button>

            {/* col‑3 : image */}
            <figure className="mt-0 lg:mt-0 lg:col-start-3 lg:row-start-1 lg:row-span-4">
              <img
                src={proj.image}
                alt={proj.alt}
                className="w-full max-h-[480px] object-cover lg:object-contain"
              />
            </figure>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Projects;
  
