export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-4 mb-10 md:mb-14">
      <span className="block h-px w-10 md:w-16 bg-line-strong" />
      <span className="section-label">{children}</span>
      <span className="block h-px w-10 md:w-16 bg-line-strong" />
    </div>
  );
}
