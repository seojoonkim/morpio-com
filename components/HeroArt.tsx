"use client";

/**
 * HeroArt — ULTRA BLINDING neon orb with intense rainbow trails
 * Maximum visual impact with /gen/hero.webp
 */
export default function HeroArt() {
  return (
    <div className="relative w-full aspect-square max-w-[360px] sm:max-w-[440px] lg:max-w-[520px] mx-auto">
      
      {/* MEGA BLINDING outer pulse - extremely visible */}
      <div 
        className="absolute"
        style={{
          inset: '-50%',
          background: 'radial-gradient(circle, rgba(255,0,255,0.35) 0%, rgba(191,0,255,0.2) 30%, rgba(0,255,255,0.1) 50%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'mega-pulse 2.5s ease-in-out infinite',
        }}
      />
      
      {/* Secondary cyan pulse */}
      <div 
        className="absolute"
        style={{
          inset: '-40%',
          background: 'radial-gradient(circle, rgba(0,255,255,0.25) 0%, rgba(191,0,255,0.15) 40%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'mega-pulse 3s ease-in-out infinite 0.5s',
        }}
      />

      {/* Rainbow conic trail - outer glow */}
      <div 
        className="absolute rounded-full"
        style={{
          inset: '-10%',
          background: 'conic-gradient(from 0deg, #ff00ff60, #00ffff60, #bf00ff60, #ff660060, #00ff8860, #ff00ff60)',
          filter: 'blur(25px)',
          animation: 'spin 6s linear infinite',
        }}
      />
      
      {/* Outer rotating ring - BRIGHT */}
      <div 
        className="absolute rounded-full"
        style={{
          inset: '2%',
          border: '3px solid transparent',
          background: 'linear-gradient(#05060A, #05060A) padding-box, conic-gradient(from 0deg, #ff00ff, #00ffff, #bf00ff, #ff6600, #00ff88, #ff00ff) border-box',
          animation: 'spin 10s linear infinite reverse',
          boxShadow: '0 0 50px rgba(255,0,255,0.5), 0 0 100px rgba(0,255,255,0.3)',
        }}
      >
        {/* Bright orbiting dot */}
        <span 
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full"
          style={{
            background: 'radial-gradient(circle, #fff 0%, #ff00ff 50%, transparent 100%)',
            boxShadow: '0 0 30px #ff00ff, 0 0 60px #ff00ff, 0 0 90px #00ffff',
          }}
        />
      </div>

      {/* Secondary inner ring */}
      <div 
        className="absolute rounded-full"
        style={{
          inset: '10%',
          border: '2px solid rgba(191,0,255,0.4)',
          animation: 'spin 15s linear infinite',
          boxShadow: 'inset 0 0 40px rgba(191,0,255,0.3)',
        }}
      />
      
      {/* Third inner ring */}
      <div 
        className="absolute rounded-full"
        style={{
          inset: '18%',
          border: '1px solid rgba(0,255,255,0.3)',
          animation: 'spin 20s linear infinite reverse',
        }}
      />

      {/* THE ORB - BLINDING center */}
      <div 
        className="absolute rounded-full overflow-hidden"
        style={{ inset: '20%' }}
      >
        {/* Ultra intense glow behind image */}
        <div 
          className="absolute"
          style={{
            inset: '-80%',
            background: 'radial-gradient(circle, rgba(255,0,255,0.7) 0%, rgba(191,0,255,0.5) 30%, rgba(0,255,255,0.3) 50%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'orb-breathe 2s ease-in-out infinite',
          }}
        />
        
        {/* Hero image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/gen/hero.webp"
          alt="morpio AI media studio"
          className="absolute inset-0 w-full h-full object-cover rounded-full"
          style={{
            filter: 'saturate(1.4) brightness(1.15) contrast(1.1)',
            mixBlendMode: 'screen',
          }}
        />
        
        {/* Rainbow overlay spinning */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 180deg, rgba(255,0,255,0.25), rgba(0,255,255,0.25), rgba(191,0,255,0.25), rgba(255,102,0,0.2), transparent)',
            mixBlendMode: 'overlay',
            animation: 'spin 8s linear infinite',
          }}
        />
        
        {/* Inner intense glow ring */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: 'inset 0 0 80px rgba(255,0,255,0.6), inset 0 0 160px rgba(0,255,255,0.4)',
          }}
        />
        
        {/* Center bright spot */}
        <div 
          className="absolute inset-[30%] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
            filter: 'blur(10px)',
          }}
        />
      </div>

      {/* HUD corners - BRIGHT neon */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" aria-hidden>
        <defs>
          <linearGradient id="cornerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff00ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0.7" />
          </linearGradient>
          <filter id="cornerGlow">
            <feGaussianBlur stdDeviation="1" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {[
          "M2 12 L2 2 L12 2",
          "M88 2 L98 2 L98 12",
          "M2 88 L2 98 L12 98",
          "M88 98 L98 98 L98 88",
        ].map((d, i) => (
          <path 
            key={i} 
            d={d} 
            stroke="url(#cornerGrad)" 
            strokeWidth="1.5" 
            fill="none"
            filter="url(#cornerGlow)"
          />
        ))}
      </svg>

      {/* Floating panels with intense borders */}
      <FloatingPanel className="top-[6%] left-[2%] w-[32%] h-[20%] rotate-[-10deg]" delay={0} color="#ff00ff" />
      <FloatingPanel className="top-[12%] right-[0%] w-[30%] h-[18%] rotate-[12deg]" delay={1.2} color="#00ffff" />
      <FloatingPanel className="bottom-[14%] left-[-2%] w-[28%] h-[16%] rotate-[10deg]" delay={2.4} color="#bf00ff" />
      <FloatingPanel className="bottom-[6%] right-[4%] w-[34%] h-[18%] rotate-[-8deg]" delay={1.8} color="#ff6600" />

      {/* Sparkles - LARGER and BRIGHTER */}
      {[
        { top: "8%", left: "26%", size: 8, delay: 0, color: "#ff00ff" },
        { top: "22%", left: "82%", size: 6, delay: 0.8, color: "#00ffff" },
        { top: "48%", left: "4%", size: 5, delay: 1.6, color: "#bf00ff" },
        { top: "66%", left: "92%", size: 7, delay: 0.4, color: "#ff6600" },
        { top: "88%", left: "36%", size: 5, delay: 1.2, color: "#00ff88" },
        { top: "38%", left: "94%", size: 4, delay: 2, color: "#ff00ff" },
        { top: "76%", left: "8%", size: 6, delay: 0.6, color: "#00ffff" },
        { top: "14%", left: "56%", size: 3, delay: 1.4, color: "#bf00ff" },
      ].map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: `radial-gradient(circle, #fff 0%, ${s.color} 60%, transparent 100%)`,
            animation: `sparkle 2s ease-in-out infinite ${s.delay}s`,
            boxShadow: `0 0 15px ${s.color}, 0 0 30px ${s.color}, 0 0 45px ${s.color}80`,
          }}
        />
      ))}

      {/* Bottom portal arc - VERY INTENSE */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 rounded-[50%]"
        style={{
          bottom: '-15%',
          width: '120%',
          height: '60%',
          background: 'linear-gradient(to top, rgba(255,0,255,0.6) 0%, rgba(191,0,255,0.4) 30%, rgba(0,255,255,0.2) 60%, transparent 100%)',
          filter: 'blur(50px)',
          animation: 'portal-pulse 1.5s ease-in-out infinite',
        }}
      />

      <style jsx>{`
        @keyframes mega-pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }
        @keyframes orb-breathe {
          0%, 100% { opacity: 0.85; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.03); }
        }
        @keyframes portal-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 0.9; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
}

function FloatingPanel({
  className = "",
  delay = 0,
  color = "#A78BFF",
}: {
  className?: string;
  delay?: number;
  color?: string;
}) {
  return (
    <div
      className={`absolute rounded-lg overflow-hidden ${className}`}
      style={{ 
        animationName: 'float',
        animationDuration: '5s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationDelay: `${delay}s`,
        background: 'rgba(10,8,20,0.85)',
        border: `2px solid ${color}70`,
        boxShadow: `0 0 30px ${color}40, inset 0 1px 0 rgba(255,255,255,0.15)`,
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Panel content bars */}
      <div 
        className="absolute inset-x-2 top-2 h-2 rounded"
        style={{ background: `linear-gradient(90deg, ${color}80, ${color}40)` }}
      />
      <div 
        className="absolute inset-x-2 top-6 h-px"
        style={{ background: `${color}40` }}
      />
      <div 
        className="absolute inset-x-2 top-8 h-px w-3/5"
        style={{ background: `${color}30` }}
      />
      <div 
        className="absolute inset-x-2 bottom-2 h-2 rounded"
        style={{ background: `linear-gradient(90deg, ${color}50, transparent)` }}
      />
    </div>
  );
}
