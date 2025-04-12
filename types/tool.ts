import { ToolCategory } from "@/config/tools"

export interface Tool {
  url: string
  title: string
  slug: string
  categories: ToolCategory[]
  description: string
  iconUrl?: string
}
