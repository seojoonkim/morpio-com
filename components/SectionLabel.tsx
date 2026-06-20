/**
 * Section eyebrow marker — `[ 01 — STAGE ]` mono index format.
 * Used as the section intro label across the Kinetic Stage system.
 */
export default function SectionLabel({
  index,
  label,
  trailing,
}: {
  index: string;
  label: string;
  trailing?: string;
}) {
  return (
    <p className="eyebrow">
      <span className="dash" />
      <span className="num">
        [ {index} — {label} ]
      </span>
      {trailing ? ` ${trailing}` : null}
    </p>
  );
}
