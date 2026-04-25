import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-pink-400 text-white shadow-sm shadow-pink-200 hover:bg-pink-500 active:scale-95",
        secondary:
          "border border-pink-200 bg-white text-pink-600 hover:border-pink-300 hover:bg-pink-50 active:scale-95",
        ghost: "text-[#7a5265] hover:bg-pink-50 hover:text-pink-600",
        outline: "border border-pink-200 bg-white text-[#7a5265] hover:bg-pink-50 hover:text-pink-600",
      },
      size: {
        sm: "h-9 px-4 py-2 text-xs",
        default: "h-11 px-6 py-3 text-sm",
        lg: "h-12 px-8 py-3 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, leftIcon, rightIcon, children, ...props }, ref) => {
    const isIconOnly = size === "icon"

    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {leftIcon && (
          <span
            className={cn(
              "flex items-center justify-center transition-transform duration-200",
              !isIconOnly && children && "group-hover:scale-110",
            )}
          >
            {leftIcon}
          </span>
        )}
        {children && !isIconOnly && <span className="flex items-center justify-center">{children}</span>}
        {isIconOnly && children}
        {rightIcon && (
          <span
            className={cn(
              "flex items-center justify-center transition-transform duration-200",
              !isIconOnly && children && "group-hover:translate-x-1",
            )}
          >
            {rightIcon}
          </span>
        )}
      </button>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
