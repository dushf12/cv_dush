'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { motion } from 'framer-motion'

export type BadgeProps = React.HTMLAttributes<HTMLDivElement>

export function Section({ className, ...props }: BadgeProps) {
	return <section className={cn('flex min-h-0 flex-col gap-y-3', className)} {...props} />
}

export const SectionMotion = motion(Section)
