// src/components/FreeConsultation.tsx
// import { ArrowUpRight } from "lucide-react";

export const FreeConsultation: React.FC = () => (
  <section className="bg-white text-black font-alumni">
    <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:grid lg:grid-cols-[25rem_1fr_auto]">
      {/* header */}
      <header className="flex items-center gap-2 py-10 lg:col-span-3">
        <span className="w-2 h-2 rounded-full bg-black shrink-0" />
        <h2 className="uppercase tracking-widest text-sm font-semibold">
          Get a Free Consultation
        </h2>
      </header>
      <div className="lg:col-span-3 h-px lg:h-[2px] w-full bg-black/80 mb-12" />

      <p className="uppercase lg:col-start-2 lg:col-span-2 text-3xl lg:text-4xl font-bold leading-tight pb-10">
        We will conduct an SEO audit, a superficial UX analysis and suggest that
        you can change it so that the site works better. Let's hear the results
        through 5 days to your mail
      </p>
    </div>
  </section>
);

export default FreeConsultation;