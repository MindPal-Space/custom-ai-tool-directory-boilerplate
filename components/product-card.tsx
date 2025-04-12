import { Product } from "@prisma/client";
import Link from "next/link";
import { Card } from "./ui/card";

interface ProductCardProps {
  data: Product;
}

export default function ProductCard ({
  data
} : ProductCardProps) {

  return (
    <Link href={`/product/${data.slug}`} className="w-full h-full">
      <Card className="px-4 py-2.5 w-full h-full flex items-center gap-4 duration-150 hover:shadow-lg">
        <div className="w-12 h-12 flex-none rounded-lg overflow-hidden">
          <img src={data.logoUrl} className="w-full h-full aspect-square" />
        </div>
        <div className="w-full flex flex-col items-start gap-0">
          <h2 className="text-lg font-bold">{data.name}</h2>
          <p className="text-sm text-gray-500">{data.tagline}</p>
        </div>
      </Card>
    </Link>
  )
}