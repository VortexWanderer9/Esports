import './App.css'

export default function App() {
  const features = [
    {
      title: 'Daily 9PM PUBG Scrims',
      desc: 'Compete with Nepal’s strongest T1 squads in smooth custom room scrims every night.',
    },
    {
      title: 'Instant Gaming Top-Ups',
      desc: 'Fast and secure top-ups for PUBG Mobile, Free Fire, Valorant, Fortnite, and more.',
    },
    {
      title: 'Growing Esports Community',
      desc: 'Join a competitive gaming ecosystem built for future tournaments and pro-level events.',
    },
  ]

  const games = [
    'PUBG Mobile',
    'Valorant',
    'Free Fire',
    'Counter-Strike',
    'Fortnite',
  ]

  return (
    <div className="min-h-screen bg-[#09090B] text-white overflow-hidden font-sans">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floating {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .fade-up {
          animation: fadeUp 0.9s ease forwards;
        }

        .float-card {
          animation: floating 6s ease-in-out infinite;
        }

        .glass {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.08);
        }
      `}</style>

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-80px] h-[320px] w-[320px] rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#09090B]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-black tracking-tight">
            GP <span className="text-cyan-400">esports</span>
          </h1>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">
              Features
            </a>

            <a href="#games" className="hover:text-white transition-colors">
              Games
            </a>

            <a href="#community" className="hover:text-white transition-colors">
              Community
            </a>
          </nav>

          <a
            href="https://discord.gg/6ACQU4wpb"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
          >
            Join Discord
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative px-6 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div className="fade-up">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 mb-6">
              <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
              Nepal PUBG Esports Community
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight max-w-2xl">
              Gaming
              <span className="block text-zinc-400">
                Community For Nepal
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400">
              Join nightly PUBG scrims, connect with top-tier players,
              access fast gaming top-ups, and grow with one of Nepal’s
              rising esports communities.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://discord.gg/6ACQU4wpb"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-cyan-400 px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
              >
                Join Community
              </a>

              <button className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-medium text-white transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/10">
                Explore Scrims
              </button>
            </div>
          </div>

          <div className="relative flex justify-center fade-up">
            <div className="float-card glass relative w-full max-w-md rounded-[32px] p-6 shadow-2xl shadow-cyan-500/10">
              <div className="rounded-[24px] border border-white/5 bg-[#111114] p-6">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <p className="text-sm uppercase tracking-[3px] text-zinc-500">
                      Community Manager
                    </p>

                    <h2 className="mt-2 text-3xl font-black">
                      ZERONot
                    </h2>

                    <p className="text-zinc-500">Indra</p>
                  </div>

                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500"></div>
                </div>

                <div className="space-y-4">
                  {games.map((game, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]"
                    >
                      <span className="font-medium text-zinc-200">
                        {game}
                      </span>

                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-400"></span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-5 border border-white/5">
                  <p className="text-xs uppercase tracking-[3px] text-cyan-300 mb-2">
                    Vision
                  </p>

                  <p className="text-zinc-300 leading-relaxed">
                    Building a competitive and respected esports scene
                    for Nepalese gamers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16 fade-up">
            <p className="text-sm uppercase tracking-[4px] text-cyan-400 mb-4">
              Features
            </p>

            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Clean, competitive,
              <span className="block text-zinc-400">
                and community focused.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass rounded-[28px] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/20"
              >
                <div className="mb-6 h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-500"></div>

                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  {feature.title}
                </h3>

                <p className="leading-relaxed text-zinc-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GAMES */}
      <section id="games" className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[32px] p-8 md:p-10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-sm uppercase tracking-[4px] text-zinc-500">
                  Supported Games
                </p>

                <h2 className="mt-3 text-4xl font-black">
                  Multi-Game Support
                </h2>
              </div>

              <div className="h-16 w-16 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {games.map((game, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-5 text-center font-medium text-zinc-300"
                >
                  {game}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="community" className="px-6 py-24">
        <div className="max-w-5xl mx-auto rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 p-10 md:p-16 text-center backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[4px] text-cyan-300 mb-4">
            Join The Community
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Play. Compete.
            <span className="block text-zinc-300">
              Grow Together.
            </span>
          </h2>

          <p className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed text-zinc-400">
            Connect with esports players across Nepal,
            participate in daily scrims, and become part
            of the next generation gaming community.
          </p>

          <a
            href="https://discord.gg/6ACQU4wpb"
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-10 rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-semibold text-black transition-transform duration-300 hover:scale-105"
          >
            Join Discord Server
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h3 className="text-2xl font-black">
              GP <span className="text-cyan-400">esports</span>
            </h3>

            <p className="mt-2 text-zinc-500 text-sm">
              Nepal PUBG Esports Community
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-white transition-colors">
              Discord
            </a>

            <a href="#" className="hover:text-white transition-colors">
              Scrims
            </a>

            <a href="#" className="hover:text-white transition-colors">
              Top-Up
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
