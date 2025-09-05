export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2" aria-label="Noaah Home">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path d="M0 10L10 0L20 10V32H0V10Z" fill="currentColor" fillOpacity="0.5"/>
        <path d="M12 22L22 12L32 22V32H12V22Z" fill="currentColor"/>
      </svg>
      <span className="text-xl font-bold text-foreground font-headline">Noaah</span>
    </div>
  );
}
