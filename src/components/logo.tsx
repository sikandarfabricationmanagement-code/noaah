import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image 
      src="/images/logonoaah.png"
      alt="Noaah uPVC Logo"
      width={150}
      height={150}
      className={className}
      data-ai-hint="logo"
    />
  );
}
