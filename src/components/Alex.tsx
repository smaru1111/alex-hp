'use client'
import { useOffsetTop } from '@/hooks/useOffsetTop'
import { css } from '@kuma-ui/core'
import { useRef } from 'react'

export const Alex = () => {
  const alexRef = useRef<HTMLDivElement>(null)
  const { isViewportThrough, TransitionEffect } = useOffsetTop(alexRef)

  const alex = css`
    position: relative;
    height: 100vh;
    width: 100vw;
    padding: 0 100px;
    display: flex;
    justify-content: left;
    align-items: center;
    color: white;
    & > div {
      width: 100%;
    }
  `

  const title = css`
    font-size: 6.5em;
    font-weight: bold;
    text-decoration: none;
    text-align: left;
    color: white;
    @media (max-width: xl) {
      font-size: 7vw;
    }
  `

  const subTitle = css`
    font-size: 1.8rem;
    margin-top: 30px;
    font-weight: normal;
    text-decoration: none;
    color: white;
    @media (max-width: xl) {
      font-size: 3vw;
    }
  `

  return (
    <section className={alex} ref={alexRef}>
      {isViewportThrough ? (
        <div className={TransitionEffect}>
          <p className={title}>What is Alex?</p>
          <p className={subTitle}>
            私たちが目指す最終的なサービスがAlexです挑戦したい人が行動したいと思った瞬間に行動するための
            <br></br>
            全て（資金、人脈、知識など）を兼ね備えた総合プラットフォーム
            <br></br>
            誰でも無料で使えるオープンソース型のプラットフォーム<br></br>
            Web3、ブロックチェーンを駆使した自立分散型のプラットフォーム<br></br>
          </p>
        </div>
      ) : null}
    </section>
  )
}
