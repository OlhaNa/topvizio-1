import valuesImage from "../assets/values-image.png";
import { values } from "../data/values";

const Values = () => {
  return (
    <section className="py-16 px-4 sm:px-6 text-white font-sans bg-black">
      {/* Title */}
      <h2 className="text-sm uppercase font-bold tracking-wider mb-10 flex items-center gap-2">
        <span className="text-xl">●</span> Our Values
      </h2>

      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={valuesImage}
            alt="Tablet with analytics chart"
            className="w-full h-auto object-cover rounded"
          />
        </div>

        {/* Right: Values List */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {values.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 border-y border-white py-4"
            >
              <div className="text-xl font-bold">{`{${item.id}}`}</div>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;