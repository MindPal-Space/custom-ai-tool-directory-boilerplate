import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  return (
    <section className="container flex flex-col items-center justify-center gap-6 py-16 md:py-24">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          404 - Not Found
        </h1>
        <p className="max-w-[600px] text-muted-foreground">
          The page or workflow you were looking for doesn&apos;t exist. It may
          have been moved or removed.
        </p>
      </div>
      <Link href="/" className={buttonVariants()}>
        Return to Home
      </Link>
    </section>
  )
}
