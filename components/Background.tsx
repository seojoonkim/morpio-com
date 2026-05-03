"use client";

/**
 * Background — recreates pacomepertant.com's SVG grid + dark center blur.
 * - Grid pattern (rect with pattern fill, opacity 0.2)
 * - Dark blob with blur to darken center (so corner UI is readable)
 */
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      {/* Center blurred dark blob */}
      <div className="absolute inset-0 center-vignette" />
      {/* Subtle accent glow top-left */}
      <div
        className="absolute -top-20 -left-20 w-[60vw] h-[60vw] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, var(--color-accent) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      {/* Subtle green glow bottom-right */}
      <div
        className="absolute bottom-0 right-0 w-[50vw] h-[50vw] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, var(--color-green) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />
    </div>
  );
}
