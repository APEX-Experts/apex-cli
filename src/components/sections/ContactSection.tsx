import { CinematicGlobe } from "../Globe";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell relative scroll-mt-28 overflow-hidden">
      {/* Decorative background element */}
      <div className="apex-ambient-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-55" />

      <div className="section-label">
        06 // Contact
      </div>

      <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold tracking-normal text-white md:text-6xl">
            Initialize <span className="opacity-40">Presence.</span>
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-zinc-500 sm:text-xl">
            Strategically positioned to architect your AI future. From our central hub in Alexandria, we deploy elite systems globally.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-sinai-glow-orange group-hover:border-sinai-glow-orange/40 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Direct Channel</div>
                <div className="text-lg font-bold text-white">info@apexexperts.net</div>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-sinai-glow-orange group-hover:border-sinai-glow-orange/40 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              </div>
              <div>
                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mb-1">Encrypted HQ</div>
                <div className="text-lg font-bold text-white">Alexandria, EGYPT</div>
              </div>
            </div>
          </div>
        </div>

        <div className="group relative flex min-h-[280px] items-center justify-center lg:min-h-[340px]">
          <CinematicGlobe />
        </div>
      </div>
    </section>
  );
}
