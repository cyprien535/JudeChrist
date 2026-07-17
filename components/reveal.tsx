"use client"

import type { ReactNode } from "react"
import { motion, type Variants } from "motion/react"

type Direction = "up" | "down" | "left" | "right" | "none"

const OFFSET = 28

function getVariants(direction: Direction): Variants {
  const hidden: Record<string, number> = { opacity: 0 }
  if (direction === "up") hidden.y = OFFSET
  if (direction === "down") hidden.y = -OFFSET
  if (direction === "left") hidden.x = OFFSET
  if (direction === "right") hidden.x = -OFFSET

  return {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
  as?: "div" | "section" | "li" | "article" | "figure"
}) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={getVariants(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Wraps a group of children so each direct child animates in with a stagger.
 * Children must be wrapped in <RevealItem /> to inherit the stagger timing.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  as = "div",
}: {
  children: ReactNode
  className?: string
  stagger?: number
  as?: "div" | "ol" | "ul"
}) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </MotionTag>
  )
}

export function RevealItem({
  children,
  className,
  direction = "up",
  as = "div",
}: {
  children: ReactNode
  className?: string
  direction?: Direction
  as?: "div" | "li" | "article" | "figure"
}) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={getVariants(direction)}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
