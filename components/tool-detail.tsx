"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import { Tool } from "@/types/tool"
import { Sheet, SheetContent } from "@/components/ui/sheet"

interface ToolDetailProps {
  tool: Tool
}

export default function ToolDetail({ tool }: ToolDetailProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  // Open the sheet automatically when the component mounts
  useEffect(() => {
    setIsOpen(true)
  }, [])

  // Handle close action
  const handleClose = () => {
    setIsOpen(false)
    // Navigate back after animation completes
    setTimeout(() => {
      router.push("/")
    }, 300)
  }

  return (
    <Sheet
      open={isOpen}
      onOpenChange={(value) => {
        setIsOpen(value)
        if (!value) handleClose()
      }}
    >
      <SheetContent side="right" className="w-screen md:w-[70vw] p-0">
        <iframe
          src={tool.url}
          title={tool.title}
          className="w-full h-screen border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </SheetContent>
    </Sheet>
  )
}
