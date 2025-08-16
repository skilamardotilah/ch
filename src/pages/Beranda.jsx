// Beranda.jsx
import Navbar from "../components/Navbar.jsx";
import CarouselRow from "../components/CarouselRow.jsx";
import Footer from "../components/Footer.jsx"; // <-- tambahkan ini

const asset = (p) => new URL(`../assets/${p}`, import.meta.url).href;

export default function Beranda() {
  // data contoh (samakan nama file dengan punyamu)
  const cont = [
    { src: asset("img/Poster/1.png"), title: "Don't Look Up", rating: "4.5/5" },
    { src: asset("img/Poster/2.png"), title: "The Batman", rating: "4.2/5" },
    {
      src: asset("img/Poster/3.png"),
      title: "Blue Lock",
      rating: "4.6/5",
      badge: "Episode Baru",
    },
    {
      src: asset("img/Poster/4.png"),
      title: "A Man Called Otto",
      rating: "4.4/5",
    },
  ];
  const topToday = [
    {
      src: asset("img/Poster/Number=14.png"),
      title: "Top 1",
      badge: "Episode Baru",
    },
    { src: asset("img/Poster/Number=25.png"), title: "Top 2" },
    { src: asset("img/Poster/Number=29.png"), title: "Top 3" },
    {
      src: asset("img/Poster/Number=9.png"),
      title: "Top 4",
      badge: "Episode Baru",
    },
    { src: asset("img/Poster/Number=12.png"), title: "Top 5" },
  ];
  const trending = [
    { src: asset("img/Poster/Number=1.png"), title: "Top 1", badge: "Top\n10" },
    { src: asset("img/Poster/Number=2.png"), title: "Top 2", badge: "Top\n10" },
    { src: asset("img/Poster/Number=3.png"), title: "Top 3", badge: "Top\n10" },
    { src: asset("img/Poster/Number=4.png"), title: "Top 4", badge: "Top\n10" },
    { src: asset("img/Poster/Number=5.png"), title: "Top 5", badge: "Top\n10" },
  ];
  const newRelease = [
    { src: asset("img/Poster/Number=1.png"), title: "Top 1", badge: "Top\n10" },
    {
      src: asset("img/Poster/Number=4.png"),
      title: "Episode Baru",
      badge: "Episode Baru",
    },
    { src: asset("img/Poster/Number=1.png"), title: "Top 3", badge: "Top\n10" },
    {
      src: asset("img/Poster/Number=4.png"),
      title: "Episode Baru",
      badge: "Episode Baru",
    },
    { src: asset("img/Poster/Number=5.png"), title: "Top 5" },
  ];

  return (
    <div className="bg-[#181A1C] text-white font-lato min-h-screen">
      <Navbar />

      {/* HERO */}
      <section
        className="relative w-full h-[600px] bg-cover bg-center"
        style={{ backgroundImage: `url(${asset("img/Poster/hero.png")})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-b from-transparent to-[#181A1C]"></div>

        <section className="relative w-full px-4 md:px-[80px] py-[40px]">
          <div className="pt-[148px] pb-[40px] md:pt-[235px] md:pb-[40px]">
            <h1 className="text-4xl leading-[1.1] font-bold">
              Duty After School
            </h1>
            <p className="max-w-2xl text-[17px] md:text-base font-medium text-gray-200 tracking-[0.2px] leading-[1.4]">
              Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
              Departemen Pertahanan mulai merekrut lebih banyak tentara,
              termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang
              garis depan dalam perang.
            </p>

            <div className="flex justify-between items-center pt-4">
              <div className="flex items-center space-x-4">
                <button className="px-6 py-2 bg-[#0F1E93] text-white rounded-full font-bold">
                  Mulai
                </button>
                <button className="flex items-center gap-2 px-5 py-2 bg-[#2A2A2A] text-white rounded-full hover:bg-[#3a3a3a] transition font-medium">
                  {/* icon info */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    fill="#fff"
                  >
                    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                  Selengkapnya
                </button>
                <div className="border border-[#C1C2C4] px-3 py-2 rounded-full font-bold text-sm text-[#C1C2C4]">
                  18+
                </div>
              </div>

              <button className="bg-transparent border border-[#C1C2C4] rounded-full p-2 hover:bg-white hover:bg-opacity-10 transition">
                {/* icon mute */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  fill="#fff"
                >
                  <path d="M4.34 2.93 2.93 4.34 7.29 8.7 7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06c1.34-.3 2.57-.92 3.61-1.75l2.05 2.05 1.41-1.41L4.34 2.93z" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </section>

      {/* SECTION 2–5 */}
      <CarouselRow
        title="Melanjutkan Tonton Film"
        items={cont}
        variant="landscape"
      />
      <CarouselRow
        title="Top Rating Film dan Series Hari Ini"
        items={topToday}
        variant="portrait"
      />
      <CarouselRow title="Film Trending" items={trending} variant="portrait" />
      <CarouselRow title="Rilis Baru" items={newRelease} variant="portrait" />
      <Footer />
    </div>
  );
}
