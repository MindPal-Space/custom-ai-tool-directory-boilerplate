import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export default function Hero() {

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Tech products by Viet makers
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Bring Viet makers to the world. Bring the world to Viet makers.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          href={"/submit"}
          className={buttonVariants()}
        >
          Submit product
        </Link>
        <Link
          href={siteConfig.links.facebook}
          target="_blank"
          className={buttonVariants({ variant: "outline" })}
        >
          Get notified about new products
        </Link>
      </div>
    </section>
  )
}
