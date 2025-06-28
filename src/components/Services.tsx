import { ArrowUpRight } from "lucide-react";
import servicesImg from "../assets/services-image.png";
import { services } from "../data/services";

export const Services: React.FC = () => (
  <section className="bg-white text-black font-alumni">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {/* header */}
      <header className="flex items-center gap-2 py-10">
        <span className="w-2 h-2 rounded-full bg-black shrink-0" />
        <h2 className="uppercase tracking-widest text-sm font-semibold">
          Core Services
        </h2>
      </header>

      <div className="h-px lg:h-[2px] w-full bg-black/80 mb-12" />

      <div className="lg:grid lg:grid-cols-3 lg:grid-rows-7 gap-x-12">
        {/* fluid-scaling image */}
        <figure className="mb-12 lg:mb-0 w-[220px] shrink-0 lg:col-span-1 lg:row-start-1 lg:row-span-2">
          <img
            src={servicesImg}
            alt="Tablet with growth chart"
            className="w-full h-full object-cover"
          />
        </figure>

        {/* ordered list */}
        <ol className="flex-1 lg:col-start-2 lg:col-span-2 lg:row-start-3 lg:row-span-5">
          {services.map((v, idx) => (
            <li
              key={v.id}
              className={`grid lg:grid-cols-[auto_20rem_1fr] lg:gap-x-0
                py-4 sm:py-8 mb-6
                border-t-2 border-black/80
                ${idx !== services.length - 1 ? "border-b-2" : ""}`}
            >
              <span className="text-3xl lg:text-4xl font-bold shrink-0 lg:col-start-1 lg:justify-self-end">
                {"{"}
                {v.id}
                {"}"}
              </span>
              <h4 className="uppercase text-3xl lg:text-4xl tracking-widest font-semibold lg:col-start-2 pl-2">
                {v.title}
              </h4>
              <div className="lg:col-start-3 flex flex-col items-start space-y-4">
                <p className="font-normal text-2xl leading-[150%] tracking-normal lg:max-w-lg lg:col-start-3">
                  {v.description}
                </p>

                {idx === 0 && (
                  <button
                    type="button"
                    className="mt-4 inline-flex items-center gap-2
             px-4 py-1
                       border-2 border-black bg-transparent
                       text-[20px] leading-[120%] uppercase font-normal
                       hover:bg-black hover:text-white transition-colors"
                  >
                    Learn&nbsp;More
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </button>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

    </div>
  </section>
);

export default Services;
