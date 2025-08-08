
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CarouselRow from '../components/CarouselRow'

const asset = (p) => new URL(`../assets/${p}`, import.meta.url).href

export default function Beranda() {
  return (
    <div className="bg-[#181A1C] text-white">
      <header>
        <Navbar />
      </header>

      <main>
        {/* Hero */}
        <section className="relative w-full h-[600px] bg-cover bg-center" style={{ backgroundImage: `url(${asset('img/film/hero-film.png')})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-b from-transparent to-[#181A1C]" />
          <section className="w-full px-4 md:px-[80px] py-[40px] flex flex-col gap-[32px] relative">
            <div className="pt-[148px] pb-[40px] md:pt-[235px] md:pb-[40px] text-white flex flex-col justify-center h-full space-y-4">
              <h1 className="text-4xl leading-[1.1] font-bold">Duty After School</h1>
              <p className="max-w-2xl text-[17px] md:text-base font-medium text-gray-200 tracking-[0.2px] leading-[1.4]">
                Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
                Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa
                sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
              </p>
              <div className="flex justify-between items-center pt-4">
                <div className="flex items-center space-x-4">
                  <button className="px-6 py-2 bg-[#0F1E93] text-white rounded-full font-bold text-base leading-[140%] tracking-[0.2px] hover:bg-blue-500 transition">
                    Mulai
                  </button>
                  <button className="flex items-center gap-2 px-5 py-2 bg-[#2A2A2A] text-white rounded-full hover:bg-[#3a3a3a] transition font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#FFFFFF">
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    </svg>
                    Selengkapnya
                  </button>
                  <div className="border border-[#C1C2C4] px-3 py-2 rounded-full font-bold text-sm text-[#C1C2C4]">18+</div>
                </div>
                <button className="bg-transparent border border-[#C1C2C4] rounded-full p-2 hover:bg-white hover:bg-opacity-10 transition" aria-label="mute">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#FFFFFF">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M4.34 2.93L2.93 4.34 7.29 8.7 7 9H3v6h4l5 5v-6.59l4.18 4.18c-.65.49-1.38.88-2.18 1.11v2.06c1.34-.3 2.57-.92 3.61-1.75l2.05 2.05 1.41-1.41L4.34 2.93zM10 15.17L7.83 13H5v-2h2.83l.88-.88L10 11.41v3.76zM19 12c0 .82-.15 1.61-.41 2.34l1.53 1.53c.56-1.17.88-2.48.88-3.87 0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zm-7-8l-1.88 1.88L12 7.76zm4.5 8c0-1.77-1.02-3.29-2.5-4.03v1.79l2.48 2.48c.01-.08.02-.16.02-.24z" />
                  </svg>
                </button>
              </div>
            </div>
          </section>
        </section>

        {/* Rows */}
        <CarouselRow
          title="Melanjutkan Tonton Film"
          items={[
            { src: 'img/film/1.png', title: "Don't Look Up", rating: '4.5/5' },
            { src: 'img/film/2.png', title: 'The Batman', rating: '4.2/5' },
            { src: 'img/film/3.png', title: 'Blue Lock', rating: '4.6/5', badge: 'Episode Baru' },
            { src: 'img/film/1.png', title: 'A Man Called Otto', rating: '4.4/5' },
          ]}
        />

        <CarouselRow
          title="Top Rating Film dan Series Hari Ini"
          items={[
            { src: 'img/Poster/Number=14.png', title: 'Top 1', badge: 'Episode Baru' },
            { src: 'img/Poster/Number=25.png', title: 'Top 2' },
            { src: 'img/Poster/Number=29.png', title: 'Top 3' },
            { src: 'img/Poster/Number=9.png', title: 'Top 4', badge: 'Episode Baru' },
            { src: 'img/Poster/Number=12.png', title: 'Top 5' },
          ]}
        />

        <CarouselRow
          title="Film Trending"
          items={[
            { src: 'img/Poster/Number=1.png', title: 'Top 1', badge: 'Top 10' },
            { src: 'img/Poster/Number=2.png', title: 'Top 2', badge: 'Top 10' },
            { src: 'img/Poster/Number=3.png', title: 'Top 3', badge: 'Top 10' },
            { src: 'img/Poster/Number=4.png', title: 'Top 4', badge: 'Top 10' },
            { src: 'img/Poster/Number=5.png', title: 'Top 5' },
          ]}
        />
      </main>

      <Footer />
    </div>
  )
}
