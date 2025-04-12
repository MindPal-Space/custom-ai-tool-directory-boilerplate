"use client"

import { Product } from "@prisma/client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";

interface ProductInfoProps {
  data: Product;
}

export default function ProductInfo ({ data } : ProductInfoProps) {

  const router = useRouter();

  const handleOnOpenChange = (value: boolean) => {
    if (!value) {
      router.push("/");
    }
  }

  return (
    <Dialog open={true} onOpenChange={handleOnOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-start gap-3">
            <div className="w-20 h-20 flex-none rounded-lg overflow-hidden">
              <img src={data.logoUrl} className="w-full h-full aspect-square" />
            </div>
            <h1 className="text-2xl font-bold">
              {data.name}
            </h1>
          </DialogTitle>
          <DialogDescription>
            <h2 className="text-base text-left">{data.tagline}</h2>
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-3">
          <Link
            href={data.productUrl} target="_blank"
            className={buttonVariants()}
          >
            Visit <span className="ml-2"><ArrowUpRightIcon size={16} /></span>
          </Link>
          <Link
            href={`mailto:${data.contactEmail}`}
            target="_blank"
            className={buttonVariants({ variant: "outline" })}
          >
            Contact
          </Link>
        </div>
        <section className="w-full flex flex-col gap-4">
          <p className="prose dark:text-gray-500">{data.desc}</p>
        </section>
      </DialogContent>
    </Dialog>
  )
}