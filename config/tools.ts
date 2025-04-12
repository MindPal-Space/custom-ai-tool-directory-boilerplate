import { Tool } from "@/types/tool"

export type ToolCategory =
  | "Marketing"
  | "Content Creation"
  | "Research"
  | "Productivity"
  | "Business"
  | "Education"

export const toolsConfig: Tool[] = [
  {
    url: "https://workflow.getmindpal.com/monitor-competitor-blog-posts",
    title: "Monitor Competitor Blog Posts",
    slug: "monitor-competitor-blog-posts",
    categories: ["Marketing", "Research"],
    description:
      "Track and analyze competitor blog content to stay informed about industry trends.",
    iconUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    url: "https://workflow.getmindpal.com/ads-campaign-generator",
    title: "Ads Campaign Generator",
    slug: "ads-campaign-generator",
    categories: ["Marketing", "Content Creation"],
    description:
      "Generate effective advertising campaigns with compelling copy and targeting suggestions.",
    iconUrl:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    url: "https://workflow.getmindpal.com/course-generator",
    title: "End-to-End Course Generator",
    slug: "course-generator",
    categories: ["Education", "Content Creation"],
    description:
      "Create comprehensive course materials including curriculum, lessons, and assessments.",
    iconUrl:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    url: "https://workflow.getmindpal.com/email-sequence-generation-workflow-ftkk4nu",
    title: "Email Sequence Generator",
    slug: "email-sequence-generator",
    categories: ["Marketing", "Content Creation"],
    description:
      "Develop effective email sequences for nurturing leads and engaging customers.",
    iconUrl:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    url: "https://workflow.getmindpal.com/web-page-audit-generator",
    title: "Webpage Audit Generator",
    slug: "web-page-audit-generator",
    categories: ["Marketing", "Business"],
    description:
      "Analyze webpages for SEO, usability, and performance improvements.",
    iconUrl:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    url: "https://workflow.getmindpal.com/webinar-recap-generator",
    title: "Webinar Recap Generator",
    slug: "webinar-recap-generator",
    categories: ["Content Creation", "Productivity"],
    description:
      "Transform webinar recordings into comprehensive summaries and key takeaways.",
    iconUrl:
      "https://images.unsplash.com/photo-1528747045269-390fe33c19f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    url: "https://workflow.getmindpal.com/ebook-generator",
    title: "End-to-End Ebook Generator",
    slug: "ebook-generator",
    categories: ["Content Creation", "Business"],
    description:
      "Create professional ebooks from concept to final formatted document.",
    iconUrl:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
]
