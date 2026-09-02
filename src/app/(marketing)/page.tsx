
import Logo from "@/src/components/logo";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#5DC9A8]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-12 lg:flex-row lg:gap-20 lg:px-12">

        {/* Left: Product Preview */}
        <div className="relative w-full max-w-2xl">

          {/* Decorative blobs */}
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-[#3aa88a]/30 blur-3xl" />

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/20 p-3 shadow-2xl backdrop-blur-sm">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
              <Image
                src="https://bytegrad.com/course-assets/react-nextjs/petsoft-preview.png"
                alt="Artemis pet management dashboard"
                width={1040}
                height={960}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full max-w-xl text-center lg:text-left">

          {/* Logo */}
          <div className="mb-8">
            <Logo />
          </div>

          {/* Badge */}
          <div className="mb-4 inline-flex items-center rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            🐾 Your pet&apos;s health, simplified
          </div>

          {/* Heading */}
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-[#123C32] sm:text-6xl">
            Manage your{" "}
            <span className="font-black">Pet</span>
            <br />
            without the hassle.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-lg leading-8 text-[#174d40]/80 sm:text-xl">
            Use Artemis to manage your pet&apos;s health, appointments, and
            everything in between. One simple place for everything your pet
            needs.
          </p>

          {/* Pricing */}
          <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
            <div className="text-4xl font-black text-[#123C32]">
              $299
            </div>

            <div className="text-left text-sm leading-5 text-[#174d40]/70">
              One-time payment
              <br />
              <span className="font-semibold">
                Lifetime access
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-start">

            <Link href="/signup">
              <Button
                size="lg"
                className="h-14 w-full rounded-xl bg-[#123C32] px-8 text-base font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#0d3028] hover:shadow-xl sm:w-auto"
              >
                Get Started
              </Button>
            </Link>

            <Link href="/login">
              <Button
                variant="outline"
                size="lg"
                className="h-14 w-full rounded-xl border-2 border-[#123C32]/20 bg-white/20 px-8 text-base font-semibold text-[#123C32] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/50 sm:w-auto"
              >
                Log in
              </Button>
            </Link>

          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#174d40]/70 lg:justify-start">
            <span>✓ Lifetime access</span>
            <span>✓ No subscription</span>
            <span>✓ Simple & secure</span>
          </div>

        </div>
      </div>
    </main>
  );
}
  