import Image from "next/image";

export function Divider() {
  return (
    <div aria-hidden className="mx-auto max-w-6xl px-5 sm:px-8">
      <Image
        src="/images/divider.png"
        alt=""
        width={2400}
        height={240}
        className="h-auto w-full opacity-50"
      />
    </div>
  );
}
