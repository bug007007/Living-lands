import { useTranslation } from '@/hooks/useTranslation';

export function FooterSection() {
  const { t } = useTranslation();

  return (
    <>
      {/* Fixed Subscribe Bar - Kinfolk Style */}
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Left Side - Text */}
            <div className="flex flex-col gap-0.5">
              <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                Newsletter
              </span>
              <p className="text-sm text-white/80 font-light">
                Get access to real cultural life in contemporary China
              </p>
            </div>

            {/* Right Side - Actions */}
            <div className="flex items-center gap-6">
              <button className="text-sm text-white/70 hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-white/30 hover:decoration-white">
                Login
              </button>
              <button className="px-5 py-2 text-sm uppercase tracking-[0.15em] border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black text-white pb-28 md:pb-24">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7m0 0L9.553 4.553A1 1 0 009 4.118v.006"
                />
              </svg>
            </div>
            <span className="text-xl font-serif text-white tracking-wide">
              {t('footer.chinaMap')}
            </span>
          </div>

          <nav className="flex items-center gap-8">
            <a
              href="#map"
              className="text-sm text-white/60 hover:text-white transition-colors duration-300"
            >
              {t('footer.mapView')}
            </a>
            <a
              href="#features"
              className="text-sm text-white/60 hover:text-white transition-colors duration-300"
            >
              {t('footer.features')}
            </a>
          </nav>

          <div className="text-xs text-white/40 tracking-wider">
            {t('footer.copyright')}
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
