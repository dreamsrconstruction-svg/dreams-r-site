"use client";

import Image from "next/image";

const services = [
  {
    title: "Drywall & Taping",
    desc: "Smooth finishes, clean edges, patching, mudding, and professional wall preparation.",
    image: "/service1.jpg",
  },
  {
    title: "Cleaning Services",
    desc: "Deep cleaning, move-out cleaning, residential, and commercial cleaning.",
    image: "/service2.jpg",
  },
  {
    title: "Landscaping",
    desc: "Outdoor cleanup, lawn care, yard improvement, and seasonal property maintenance.",
    image: "/service3.jpg",
  },
];

const galleryImages = [
  "/work1.jpg",
  "/work2.jpg",
  "/work3.jpg",
  "/work4.jpg",
  "/work5.jpg",
  "/work6.jpg",
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* HEADER */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Dreams R Construction Logo"
              width={200}
              height={250}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-lg font-bold leading-none text-white">
                Dreams R Construction
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-blue-400">
                Calgary
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm text-white/80 transition hover:text-white">
              Services
            </a>
            <a href="#gallery" className="text-sm text-white/80 transition hover:text-white">
              Gallery
            </a>
            <a href="#social" className="text-sm text-white/80 transition hover:text-white">
              Social
            </a>
            <a
              href="https://wa.me/16474518582"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105 hover:bg-blue-500"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Dreams R Construction hero image"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black" />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
              Premium Finishing Services
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              Clean Work.
              <span className="block text-blue-400">Professional Results.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base text-gray-200 md:text-xl">
              Drywall, taping, mudding, cleaning, and landscaping services with
              detail, quality, and a premium finish for homes and businesses.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/16474518582"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.45)] transition hover:scale-105 hover:bg-blue-500"
              >
                Get Free Quote
              </a>

              <a
                href="#gallery"
                className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.25em] text-blue-400">
            Our Services
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Quality Work For Homes & Businesses
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            We focus on clean finishes, strong presentation, and reliable service.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-gray-300">{service.desc}</p>

                <a
                  href="https://wa.me/16474518582"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  Ask for this service →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-zinc-950 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-blue-400">
              Gallery
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">Our Recent Work</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Add your real project pictures here to show your quality and results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((src, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-black shadow-xl"
              >
                <div className="relative h-80 w-full">
                  <Image
                    src={src}
                    alt={`Work image ${index + 1}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent opacity-90" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-950/40 to-zinc-900 p-10 text-center shadow-2xl">
          <h2 className="text-3xl font-bold md:text-5xl">
            Ready to Start Your Project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Contact Dreams R Construction today for a free quote and fast response.
          </p>

          <a
            href="https://wa.me/16474518582"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(37,99,235,0.45)] transition hover:scale-105 hover:bg-blue-500"
          >
            Message on WhatsApp
          </a>
        </div>
      </section>

      {/* SOCIAL */}
      <section
        id="social"
        className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-20"
      >
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-1/4 top-10 h-40 w-40 rounded-full bg-blue-500 blur-3xl" />
          <div className="absolute bottom-10 right-1/4 h-40 w-40 rounded-full bg-pink-500 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Social Media
          </p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Follow Dreams R Construction
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            See project pictures, videos, before-and-after work, and direct contact options.
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
                Follow our Facebook page to see finished jobs, project photos, and business updates.
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
                Watch quick videos of our work, transformations, and premium finishing results.
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

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Dreams R Construction. All rights reserved.
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/16474518582"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_0_30px_rgba(34,197,94,0.55)] transition hover:scale-110 hover:bg-green-400"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="h-8 w-8"
        >
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.6c1.7.9 3.6 1.4 5.6 1.4 6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.1-3.3-8.4zM12 21.3c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7.9.9-3.6-.3-.4a9.3 9.3 0 0 1-1.5-5c0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.8 1 6.6 2.7a9.3 9.3 0 0 1 2.8 6.7c0 5.2-4.2 9.4-9.4 9.4zm5.3-7.1c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.2-.7.9-.8 1-.1.1-.3.2-.5.1-.3-.1-1.2-.4-2.3-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.4.1-.5.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5s-.6-1.5-.8-2c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3 1 2.5 1.1 2.7.1.2 2 3 4.8 4.2.7.3 1.3.5 1.8.6.8.2 1.5.2 2 .1.6-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.3z" />
        </svg>
      </a>
    </main>
  );
}
