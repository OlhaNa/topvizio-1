import heroImg from "../assets/values-image.png";
import { values } from "../data/values";


export const Values: React.FC = () => (
  <section className="bg-black text-white font-alumni">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      {/* header */}
      <header className="flex items-center gap-2 py-10">
        <span className="w-2 h-2 rounded-full bg-white shrink-0" />
        <h2 className="uppercase tracking-widest text-sm font-semibold">
          Our Values
        </h2>
      </header>

      <div className="h-px lg:h-[2px] w-full bg-white/80 mb-12" />

      <div className="lg:grid lg:grid-cols-3 lg:grid-rows-7 gap-x-12">
        {/* fluid-scaling image */}
        <figure className="mb-12 lg:mb-0 w-[220px] shrink-0 lg:col-span-1 lg:row-start-1 lg:row-span-2">
          <img
            src={heroImg}
            alt="Tablet with growth chart"
            className="w-full h-full object-cover"
          />
        </figure>

        {/* ordered list */}
        <ol className="flex-1 gap-y-6 lg:col-start-2 lg:col-span-2 lg:row-start-3 lg:row-span-5">
          {values.map((v) => (
            <li
              key={v.id}
              className={`grid lg:grid-cols-[auto_20rem_1fr] lg:gap-x-0 py-4 sm:py-8 mb-6 border-t-2 border-b-2 border-white/80` } 
            >
              <span className="text-3xl lg:text-4xl font-bold shrink-0 lg:col-start-1 lg:justify-self-end">
                {"{"}
                {v.id}
                {"}"}
              </span>
              <p className="text-2xl leading-[150%] tracking-normal lg:max-w-lg lg:col-start-3">
                {v.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Values;