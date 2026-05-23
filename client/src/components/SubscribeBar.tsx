export function SubscribeBar() {
  return (
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
  );
}
