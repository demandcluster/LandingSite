"use client"

import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

interface ClientLogosProps {
  grayscale?: boolean
  hover?: boolean
}

export function ClientLogos({ grayscale = true, hover = true }: ClientLogosProps) {
  const clients = [
    {
      name: "VD.nl",
      logo: "/client-logos/vd-logo.png", // Replace with actual logo path
      width: 200,
      height: 80,
    },
    {
      name: "Schiphol",
      logo: "/client-logos/schiphol-logo.png", // Replace with actual logo path
      width: 200,
      height: 80,
    },
    {
      name: "To-Be-Dressed",
      logo: "/client-logos/to-be-dressed-logo.png", // Replace with actual logo path
      width: 200,
      height: 80,
    },
    {
      name: "Charluv",
      logo: "/client-logos/charluv-logo.png", // Replace with actual logo path
      width: 200,
      height: 80,
    },
  ]

  return (
    <AnimatedSection className="mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {clients.map((client, index) => (
          <div
            key={index}
            className={`flex justify-center p-4 ${
              grayscale ? "grayscale" : ""
            } ${hover ? "hover:grayscale-0" : ""} transition-all`}
          >
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={`${client.name} Logo`}
              width={client.width}
              height={client.height}
              className="object-contain h-16"
              // Fallback to placeholder if the image fails to load
              onError={(e) => {
                e.currentTarget.src = `/placeholder.svg?height=${client.height}&width=${client.width}`
              }}
            />
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
