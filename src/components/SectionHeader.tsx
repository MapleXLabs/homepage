type Props = {
  number: string;
  label: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ number, label, title, description }: Props) {
  return (
    <div className="reveal grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 mb-12">
      <div>
        <div className="font-display font-normal text-ink text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight tracking-tight">
          {number}
        </div>
        <div className="mt-2 font-mono text-[11px] tracking-[0.12em] uppercase text-neutral-500">
          {label}
        </div>
      </div>
      <div>
        <h2 className="display-h2 max-w-[28ch]">{title}</h2>
        {description && (
          <p className="mt-4 max-w-[60ch] text-[17px] text-neutral-700">{description}</p>
        )}
      </div>
    </div>
  );
}
