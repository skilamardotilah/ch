
const asset = (p) => new URL(`../assets/${p}`, import.meta.url).href

function PosterCard({ src, title, rating, badge }) {
  return (
    <div className="relative min-w-[260px] md:min-w-[290px] h-[162px] rounded-lg overflow-hidden shrink-0 md:w-[290px]">
      {badge && <div className="absolute top-2 left-2 bg-[#0F1E93] text-white text-xs font-semibold px-2 py-1 rounded-full shadow">{badge}</div>}
      <img src={asset(src)} alt={title} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 w-full h-[54px] px-4 md:px-[16px] flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent text-white">
        <h6 className="text-[18px] font-['Lato'] text-center">{title}</h6>
        {rating && (
          <div className="flex items-center gap-[4px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span className="text-[14px] font-normal font-['Lato']">{rating}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function CarouselRow({ title, items }) {
  const left = asset('img/arrow-left.png')
  const right = asset('img/arrow-right.png')
  return (
    <section className="w-full px-4 md:px-[80px] py-[40px] flex flex-col gap-[32px]">
      <h2 className="text-xl md:text-2xl font-semibold text-white">{title}</h2>
      <div className="relative w-full">
        <button className="hidden md:flex absolute left-[-32px] top-1/2 -translate-y-1/2 z-10 bg-[#333] rounded-full w-[48px] h-[48px] items-center justify-center shadow-md">
          <img src={left} alt="Left Arrow" className="w-6 h-6" />
        </button>
        <div className="overflow-x-auto w-full">
          <div className="flex gap-[10px] flex-nowrap w-max">
            {items.map((it, idx) => <PosterCard key={idx} {...it} />)}
          </div>
        </div>
        <button className="hidden md:flex absolute right-[-32px] top-1/2 -translate-y-1/2 z-10 bg-[#333] rounded-full w-[48px] h-[48px] items-center justify-center shadow-md">
          <img src={right} alt="Right Arrow" className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}
