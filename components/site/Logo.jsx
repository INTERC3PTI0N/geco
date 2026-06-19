import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "", showText = true }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      <Image src="/brand/gtc-logo.png" alt="Geco Trading Corporation" width={48} height={48} className="h-15 w-auto" priority />
      {showText && (
        <span className="font-display text-[0.95rem] font-bold leading-none tracking-tight text-ink">
          GECO TRADING CORPORATION Pvt. Ltd</span>
      )}
    </Link>
  );
}
