import Image from "next/image"
import Link from "next/link"

import { Tool } from "@/types/tool"

import { Card } from "./ui/card"

interface ToolCardProps {
  data: Tool
}

export default function ToolCard({ data }: ToolCardProps) {
  return (
    <Link href={`/tool/${data.slug}`} className="w-full h-full">
      <Card className="px-4 py-4 w-full h-full flex flex-col items-start gap-4 duration-150 hover:shadow-lg">
        <div className="w-16 h-16 flex-none rounded-lg overflow-hidden bg-muted flex items-center justify-center">
          {data.iconUrl ? (
            <Image
              src={data.iconUrl}
              alt={data.title}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary text-2xl">
              {data.title.charAt(0)}
            </div>
          )}
        </div>
        <div className="w-full flex flex-col items-start gap-1">
          <h2 className="text-lg font-bold">{data.title}</h2>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {data.description}
          </p>
          <div className="flex gap-2 mt-1">
            {data.categories.map((category) => (
              <span
                key={category}
                className="text-xs bg-muted px-2 py-0.5 rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  )
}
