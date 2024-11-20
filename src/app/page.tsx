import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full align-middle justify-center">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
        <Image
          className="dark:invert"
          src="/images/tm_logo.png"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        Training Manager
      </main>
    </div>
  );
}
