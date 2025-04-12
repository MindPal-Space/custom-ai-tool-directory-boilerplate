"use client"

import { useState } from "react"

import { Tool } from "@/types/tool"
import { copywritingConfig } from "@/config/copywriting"
import { ToolCategory } from "@/config/tools"

import ToolCard from "./tool-card"
import { Input } from "./ui/input"

interface ToolListProps {
  data: Tool[]
}

export default function ToolList({ data }: ToolListProps) {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<
    ToolCategory | "All"
  >("All")

  const categories: ("All" | ToolCategory)[] = [
    "All",
    ...Array.from(new Set(data.flatMap((item) => item.categories))),
  ]

  const filteredItems = data.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory =
      selectedCategory === "All" ||
      item.categories.includes(selectedCategory as ToolCategory)

    return matchesSearch && matchesCategory
  })

  return (
    <section id="workflows" className="container grid items-center gap-6 pb-16">
      <div className="w-full flex flex-col gap-4">
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search workflows..."
          className="w-full"
        />

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredItems.length > 0 ? (
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredItems.map((item) => (
            <li key={item.slug} className="w-full h-full">
              <ToolCard data={item} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="w-full py-16 text-center">
          <h3 className="text-xl font-medium">
            {copywritingConfig.sections.empty.title}
          </h3>
          <p className="text-muted-foreground">
            {copywritingConfig.sections.empty.description}
          </p>
        </div>
      )}
    </section>
  )
}
