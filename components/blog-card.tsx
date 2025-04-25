"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

interface BlogCardProps {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  author: string
  authorRole: string
  authorImage: string
  slug: string
}

export function BlogCard({
  title,
  excerpt,
  image,
  category,
  date,
  author,
  authorRole,
  authorImage,
  slug,
}: BlogCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        <Badge
          variant="outline"
          className="absolute top-4 left-4 bg-white/80 hover:bg-white text-blue-600 border-transparent"
        >
          {category}
        </Badge>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex-1">
          <p className="text-xs text-muted-foreground mb-2">{date}</p>
          <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-blue-600 transition-colors">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3">{excerpt}</p>
        </div>
        <div className="mt-6 flex items-center gap-3 pt-4 border-t">
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
            <Image src={authorImage || "/placeholder.svg"} alt={author} fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-medium">{author}</p>
            <p className="text-xs text-muted-foreground">{authorRole}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
