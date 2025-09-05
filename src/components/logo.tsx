export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2" aria-label="Noaah Tech Home">
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path
          d="M4 4H8V8H4V4Z"
          fill="currentColor"
          className="opacity-50"
        />
        <path
          d="M4 12H8V16H4V12Z"
          fill="currentColor"
          className="opacity-75"
        />
        <path
          d="M4 20H8V24H4V20Z"
          fill="currentColor"
        />
        <path
          d="M12 4H16V8H12V4Z"
          fill="currentColor"
          className="opacity-75"
        />
        <path
          d="M12 12H16V16H12V12Z"
          fill="hsl(var(--accent))"
        />
        <path
          d="M12 20H16V24H12V20Z"
          fill="currentColor"
          className="opacity-50"
        />
        <path
          d="M20 4H24V8H20V4Z"
          fill="currentColor"
        />
        <path
          d="M20 12H24V16H20V12Z"
          fill="currentColor"
          className="opacity-50"
        />
        <path
          d="M20 20H24V24H20V20Z"
          fill="currentColor"
          className="opacity-75"
        />
      </svg>
      <span className="text-xl font-bold text-foreground font-headline">Noaah Tech</span>
    </div>
  );
}
