import { motion, Variants, Transition } from 'framer-motion'
import { ReactNode, useMemo } from 'react'

type divProps = any

type FadeInMotionProps = {
  delay?: number
  children: ReactNode
  offscreenVariant?: Variants
  onscreenVariant?: Variants
  transition?: Transition
} & divProps

export const FadeInMotion: React.FC<FadeInMotionProps> = ({
  delay = 0.5,
  children,
  offscreenVariant = {
    y: 100,
    opacity: 0,
  },
  onscreenVariant = {
    y: 0,
    opacity: 1,
  },
  transition = {
    duration: 1.5,
  },
  ...props
}: FadeInMotionProps) => {
  const memoizedVariants = useMemo(
    () => ({
      offscreen: offscreenVariant,
      onscreen: {
        ...onscreenVariant,
        transition: {
          ...transition,
          delay,
        },
      },
    }),
    [offscreenVariant, onscreenVariant, transition, delay],
  )

  return (
    <motion.div
      {...props}
      variants={memoizedVariants}
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </motion.div>
  )
}
