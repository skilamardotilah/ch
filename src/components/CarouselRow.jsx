// CarouselRow.jsx
const asset = (p) => new URL(`../assets/${p}`, import.meta.url).href;

function PosterCard({ src, title, rating, badge, variant = "landscape" }) {
  const isPortrait = variant === "portrait";

  // ukuran mengikuti HTML
  const box = isPortrait
    ? "w-[120px] h-[194px] md:w-[225px] md:h-[365px]" // portrait
    : "min-w-[260px] md:min-w-[290px] h-[162px]"; // landscape

  return (
    <div
      className={`relative ${box} rounded-lg overflow-hidden shrink-0 md:transform md:transition-transform md:duration-300 md:ease-in-out ${
        isPortrait ? "md:hover:scale-105" : ""
      }`}
    >
      {badge && (
        <div
          className={`absolute ${
            isPortrait ? "top-2 left-2 md:top-4 md:left-4" : "top-2 left-2"
          } bg-[#0F1E93] text-white ${
            isPortrait ? "text-[8px] md:text-xs" : "text-xs"
          } font-semibold px-2 py-1 rounded-full shadow`}
        >
          {badge}
        </div>
      )}
      <img src={src} alt={title} className="w-full h-full object-cover" />

      {/* footer gradien + judul + rating */}
      <div className="absolute bottom-0 left-0 w-full h-[54px] px-4 md:px-[16px] flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent text-white">
        <h6
          className={`${
            isPortrait ? "text-[14px] md:text-[18px]" : "text-[18px]"
          } font-['Lato'] line-clamp-1`}
        >
          {title}
        </h6>
        {rating && (
          <div className="flex items-center gap-[4px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[16px] h-[16px] text-yellow-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="text-[14px] font-normal font-['Lato']">
              {rating}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CarouselRow({ title, items, variant = "landscape" }) {
  const left = asset("img/arrow-left.png");
  const right = asset("img/arrow-right.png");

  return (
    <section className="w-full px-4 md:px-[80px] py-[40px] flex flex-col gap-[32px]">
      <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>

      <div className="relative w-full">
        {/* tombol kiri */}
        <button className="hidden md:flex absolute left-[-32px] top-1/2 -translate-y-1/2 z-10 bg-[#333] rounded-full w-[48px] h-[48px] items-center justify-center shadow-md">
          <img src={left} alt="Left Arrow" className="w-6 h-6" />
        </button>

        {/* list */}
        <div className="overflow-x-auto w-full">
          <div className="flex gap-[10px] flex-nowrap w-max">
            {items.map((it, i) => (
              <PosterCard key={i} {...it} variant={variant} />
            ))}
          </div>
        </div>

        {/* tombol kanan */}
        <button className="hidden md:flex absolute right-[-32px] top-1/2 -translate-y-1/2 z-10 bg-[#333] rounded-full w-[48px] h-[48px] items-center justify-center shadow-md">
          <img src={right} alt="Right Arrow" className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
