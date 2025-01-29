import type React from "react"
import { cn } from "@/lib/utils"

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export function Heading({ children, className, as: Component = "h2", ...props }: HeadingProps) {
  return (
    <Component
      className={cn(
        "font-inter text-[48px] font-semibold leading-[58.09px] tracking-[-0.04em]",
        "text-left underline-offset-from-font decoration-skip-ink-none",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

