import { Metadata } from "next"
import { notFound } from "next/navigation"

import { siteConfig } from "@/config/site"
import { toolsConfig } from "@/config/tools"
import ToolDetail from "@/components/tool-detail"

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const tool = toolsConfig.find((tool) => tool.slug === params.slug)

  if (!tool) {
    return {
      title: "Tool Not Found",
    }
  }

  return {
    title: `${tool.title} - ${siteConfig.name}`,
    description: tool.description,
  }
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = toolsConfig.find((tool) => tool.slug === params.slug)

  if (!tool) {
    notFound()
  }

  return <ToolDetail tool={tool} />
}
