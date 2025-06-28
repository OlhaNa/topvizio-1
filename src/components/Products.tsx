import { ArrowUpRight } from "lucide-react";
import { pillars } from "../data/pillars";

const Products: React.FC = () => (
  <section className="bg-black text-white font-alumni">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-12">
      <header className="flex items-center gap-2 py-8 lg:col-span-3">
        <span className="w-2 h-2 rounded-full bg-white" />
        <h3 className="uppercase text-xs tracking-wider font-semibold">
          we create trustful digital products
        </h3>
      </header>

      <h2 className="text-[48px] font-extrabold leading-[93%] uppercase  lg:col-start-1 lg:row-start-2 mb-12 pb-10">
        we create full of confidence products due to the following&nbsp;pillars
      </h2>

      

      <ol className="lg:col-span-3 ">
        {pillars.map((p, idx) => (
          <li
            key={p.title}
            className={`py-10 border-t-2 border-white lg:grid lg:grid-cols-3 lg:gap-x-12 ${
              idx === pillars.length - 1 ? "border-b-2" : ""
            }`}
          >
            <h3 className="text-[48px] font-extrabold leading-[93%] uppercase lg:col-span-1">
              {p.title}
            </h3>

            <p className="text-[20px] leading-[150%] font-normal lg:col-start-3 lg:row-start-1 lg:mt-0 mt-6">
              {p.description}
            </p>
          </li>
        ))}
      </ol>

      {/* ───── CTA button ───── */}
      <button
        type="button"
        className="mt-12 inline-flex items-center gap-2
                     px-6 py-2 border-2 border-white
                     text-[20px] font-normal uppercase
                     hover:bg-white hover:text-black transition-colors
                     self-start lg:col-start-3 lg:justify-self-start"
      >
        find out more
        <ArrowUpRight className="w-4 h-4 stroke-[3]" />
      </button>
    </div>
  </section>
);

export default Products;
