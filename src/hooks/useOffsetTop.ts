import React, { useEffect, useState, useCallback } from 'react'
import { useThrottle } from './useThrottle'
import { css } from '@kuma-ui/core'

export function useOffsetTop(ref?: React.RefObject<HTMLElement>) {
  const [viewportTop, setViewportTop] = useState<number | undefined>(undefined)
  const [pageOffsetTop, setPageOffsetTop] = useState<number | undefined>(undefined)
  const [isViewportThrough, setIsViewportThrough] = useState(false)

  const handler = useThrottle(() => {
    if (!ref?.current) return

    const clientRect = ref.current.getBoundingClientRect()
    setViewportTop(clientRect.top)
    const newPageOffsetTop = clientRect.top + window.pageYOffset
    setPageOffsetTop(newPageOffsetTop)
    const windowHeight = window.innerHeight
    setIsViewportThrough(clientRect.top <= windowHeight)
  }, 100) // 100msに一度実行

  useEffect(() => {
    if (!ref?.current) return

    // マウント時にも実行
    handler()
    window.addEventListener('scroll', handler)

    // アンマウント時にイベントリスナーを解除
    return () => window.removeEventListener('scroll', handler)
  }, [handler, ref])

  const TransitionEffect = css`
    transition: all 0.5s ease-in-out;
    animation: fadeInUpOffset 1.5s ease-in-out;
    animation-fill-mode: backwards;

    @keyframes fadeInUpOffset {
      0% {
        opacity: 0;
        transform: translateY(20%);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `

  return { viewportTop, pageOffsetTop, isViewportThrough, TransitionEffect }
}
