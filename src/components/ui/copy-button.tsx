"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface CopyButtonProps {
  value: string
  className?: string
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  tooltipMessage?: string
  successMessage?: string
  duration?: number
}

export function CopyButton({
  value,
  className,
  variant = "outline",
  size = "icon",
  tooltipMessage = "Copy to clipboard",
  successMessage = "Copied!",
  duration = 2000,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, duration)
    } catch (error) {
      console.error("Failed to copy text: ", error)
    }
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size={size}
            variant={variant}
            className={cn(
              "transition-all duration-200",
              copied && "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
              className,
            )}
            onClick={copyToClipboard}
            aria-label={copied ? successMessage : tooltipMessage}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            <span className="sr-only">{copied ? successMessage : tooltipMessage}</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{copied ? successMessage : tooltipMessage}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

