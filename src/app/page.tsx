export default function Home() {
  return (
    <>
      <div className="noise-overlay" />
      
      <main className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6 lg:px-12 py-24">
        
        {/* Background decorative elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[120px] animate-fade-up mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-accent/20 blur-[100px] animate-fade-up delay-200 mix-blend-multiply dark:mix-blend-screen" />

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left/Top Content */}
          <div className="flex-1 flex flex-col items-start text-left">
            <div className="overflow-hidden mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-medium tracking-wide uppercase animate-fade-up">
                Architecture Standard
              </span>
            </div>
            
            <h1 className="font-display text-6xl md:text-7xl lg:text-[9rem] font-bold leading-[0.85] tracking-tighter mix-blend-difference opacity-90 animate-fade-up delay-100 uppercase">
              Agent <br />
              <span className="text-primary italic font-semibold">Ops.</span>
            </h1>
            
            <p className="mt-8 max-w-lg text-lg md:text-xl font-light text-foreground/80 leading-relaxed animate-fade-up delay-200">
              The 3-layer deterministic execution model mapping human intent to reliable outputs. Focus on decision-making, let scripts handle complexity.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-up delay-300">
              <button className="group relative px-8 py-4 bg-foreground text-background font-medium overflow-hidden border border-foreground">
                <span className="relative z-10 group-hover:text-black mix-blend-difference transition-colors duration-300 uppercase tracking-wider text-sm">Initialize Directives</span>
                <div className="absolute inset-0 bg-accent transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100 z-0"></div>
              </button>
              <a href="#docs" className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors underline-offset-8 decoration-primary/50 hover:underline">
                Read the Docs ↗
              </a>
            </div>
          </div>

          {/* Right/Bottom Decorative Graphic */}
          <div className="flex-1 w-full aspect-square md:aspect-[4/5] relative animate-fade-up delay-400 group max-w-md mx-auto md:max-w-none">
            <div className="absolute inset-0 border border-foreground/10 flex flex-col group-hover:border-primary/50 transition-colors duration-500">
               {/* 3-Layer Visualizer */}
               <div className="flex-1 border-b border-foreground/10 flex items-center justify-between px-8 bg-foreground/[0.02]">
                  <span className="font-display text-2xl md:text-3xl font-bold tracking-tight">01 // Directives</span>
                  <span className="text-xs uppercase tracking-widest text-foreground/50 hidden sm:block">Markdown SOPs</span>
               </div>
               <div className="flex-1 border-b border-foreground/10 flex items-center justify-between px-8 bg-foreground/[0.04]">
                  <span className="font-display text-2xl md:text-3xl font-bold tracking-tight">02 // Orchestrator</span>
                  <span className="text-xs uppercase tracking-widest text-primary hidden sm:block">Intelligent Routing</span>
               </div>
               <div className="flex-1 flex items-center justify-between px-8 bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  <span className="font-display text-2xl md:text-3xl font-bold tracking-tight text-primary">03 // Execution</span>
                  <span className="text-xs uppercase tracking-widest text-foreground/50 hidden sm:block">Python Scripts</span>
               </div>
            </div>
            
            {/* Grid-breaking element */}
            <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-32 h-32 md:w-40 md:h-40 bg-accent rounded-full flex flex-col items-center justify-center -rotate-12 group-hover:rotate-0 transition-transform duration-700 shadow-2xl z-20">
               <span className="font-display font-bold text-black text-center leading-tight tracking-tighter text-lg md:text-xl">
                 DETER-<br/>MINISTIC
               </span>
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
