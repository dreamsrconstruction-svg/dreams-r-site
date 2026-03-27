import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>{/* SOCIAL MEDIA */}
<section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-20">
  <div className="absolute inset-0 opacity-20">
    <div className="absolute left-1/4 top-10 h-40 w-40 rounded-full bg-blue-500 blur-3xl" />
    <div className="absolute right-1/4 bottom-10 h-40 w-40 rounded-full bg-pink-500 blur-3xl" />
  </div>

  <div className="relative mx-auto max-w-6xl px-6 text-center">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
      Social Media
    </p>
    <h2 className="text-3xl font-bold md:text-5xl">
      Follow Dreams R Construction
    </h2>
    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
      See our newest projects, transformations, behind-the-scenes videos, and
      updates on Facebook, TikTok, and WhatsApp.
    </p>

    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {/* FACEBOOK */}
      <a
        href="https://www.facebook.com/profile.php?id=61584520979545"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-3xl border border-blue-500/20 bg-white/5 p-8 text-left shadow-[0_0_30px_rgba(37,99,235,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:bg-white/10"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.45)] transition group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="h-8 w-8"
            >
              <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.03 3.66 9.2 8.44 9.93v-7.02H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34v7.02C18.34 21.27 22 17.1 22 12.07z" />
            </svg>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">Facebook</h3>
            <p className="text-sm text-gray-400">Photos • Updates • Business page</p>
          </div>
        </div>

        <p className="mt-6 text-gray-300">
          Follow our Facebook page to see finished jobs, project photos, and
          business updates.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition group-hover:text-blue-300">
          Visit Facebook
          <span className="transition group-hover:translate-x-1">→</span>
        </div>
      </a>

      {/* TIKTOK */}
      <a
        href="https://www.tiktok.com/@dreams.r.construc"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-3xl border border-pink-500/20 bg-white/5 p-8 text-left shadow-[0_0_30px_rgba(236,72,153,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-pink-400/40 hover:bg-white/10"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-cyan-400 shadow-[0_0_25px_rgba(236,72,153,0.35)] transition group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="h-8 w-8"
            >
              <path d="M16.5 3c.3 2.4 1.9 4.3 4.2 4.7v3.1c-1.5 0-3-.5-4.2-1.3v5.9c0 3.5-2.8 6.3-6.3 6.3S3.9 18.9 3.9 15.4 6.7 9.1 10.2 9.1c.3 0 .6 0 .9.1v3.2c-.3-.1-.6-.1-.9-.1-1.8 0-3.2 1.4-3.2 3.1s1.4 3.1 3.2 3.1 3.2-1.4 3.2-3.1V3h3.1z" />
            </svg>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">TikTok</h3>
            <p className="text-sm text-gray-400">Videos • Before/After • Reels</p>
          </div>
        </div>

        <p className="mt-6 text-gray-300">
          Watch quick videos of our work, transformations, and premium finishing
          results on TikTok.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-pink-400 transition group-hover:text-pink-300">
          Watch TikTok
          <span className="transition group-hover:translate-x-1">→</span>
        </div>
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/16474518582"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-3xl border border-green-500/20 bg-white/5 p-8 text-left shadow-[0_0_30px_rgba(34,197,94,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-green-400/40 hover:bg-white/10"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500 shadow-[0_0_25px_rgba(34,197,94,0.45)] transition group-hover:scale-110">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="h-8 w-8"
            >
              <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.6 1.4 5.6 1.4 6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.1-3.3-8.4zM12 21.3c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7.9.9-3.6-.3-.4a9.3 9.3 0 0 1-1.5-5c0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.8 1 6.6 2.7a9.3 9.3 0 0 1 2.8 6.7c0 5.2-4.2 9.4-9.4 9.4zm5.3-7.1c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.2-.7.9-.8 1-.1.1-.3.2-.5.1-.3-.1-1.2-.4-2.3-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.4.1-.5.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5s-.6-1.5-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3 1 2.5 1.1 2.7.1.2 2 3 4.8 4.2.7.3 1.3.5 1.8.6.8.2 1.5.2 2 .1.6-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.3z" />
            </svg>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">WhatsApp</h3>
            <p className="text-sm text-gray-400">Quotes • Fast replies • Booking</p>
          </div>
        </div>

        <p className="mt-6 text-gray-300">
          Message us directly for quotes, service questions, and fast booking.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-400 transition group-hover:text-green-300">
          Chat on WhatsApp
          <span className="transition group-hover:translate-x-1">→</span>
        </div>
      </a>
    </div>
  </div>
</section>
    </div>
  );
}
