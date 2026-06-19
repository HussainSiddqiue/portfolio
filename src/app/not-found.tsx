import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-5 text-center">
      <div className="relative mb-6 h-44 w-72 opacity-90 sm:h-52 sm:w-80">
        <Image
          src="/images/404.png"
          alt=""
          fill
          sizes="320px"
          className="object-contain"
          priority
        />
      </div>
      <div className="font-mono text-sm tracking-[0.3em] text-accent">404</div>
      <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-fg-muted">
        The page you are looking for does not exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-[#05130c] transition-transform hover:-translate-y-0.5"
      >
        <ArrowLeft className="h-4 w-4" /> Back home
      </Link>
    </main>
  );
}
