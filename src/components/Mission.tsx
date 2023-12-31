'use client'

import { useOffsetTop } from '@/hooks/useOffsetTop'
import { css } from '@kuma-ui/core'
import { useRef } from 'react'

export const Mission = () => {
  const missionRef = useRef<HTMLDivElement>(null)
  const { isViewportThrough, TransitionEffect } = useOffsetTop(missionRef)

  return (
    <section ref={missionRef} className={mission}>
      <div className={before}>
        <div></div>
      </div>
      <div className={missionInner}>
        {isViewportThrough ? (
          <div className={TransitionEffect}>
            <div className={SectionTitleCotainer}>
              <p className={SectionTitle}>Mission</p>
              <p className={SectionSubTitle}>ミッション</p>
            </div>
            <p className={ContentTitle}>自分たちがしたい・やりたいを実現する</p>
            <p className={ContentText}>
              ビジョンを実現するためには、まずAlexのメンバーが挑戦者にならなければならない。なぜなら、挑戦者の気持ちは挑戦者しかわからないし、したいことややりたいことができる環境がどういうものかっていうのはしたいことややりたいことをやっている本人しかわからないと思うから。そして、何よりもこのミッションを掲げている理由は、メンバー１人１人にAlexの活動を心の底から楽しんでほしいから。
            </p>
          </div>
        ) : null}
      </div>
    </section>
  )
}

const ContentTitle = css`
  margin: 60px 0;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1;
`

const ContentText = css`
  font-size: 1.5rem;
  text-align: left;
`

const mission = css`
  position: relative;
  overflow: hidden;
`

const before = css`
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 120%;
    height: 100%;
    margin: 3% -10% 0;
    background: #fff;
    transform: skewY(2deg);
    z-index: -20;
  }
`

const missionInner = css`
  box-sizing: boder-box;
  width: 100%;
  max-width: 1500px;
  height: 100vh;
  margin: 20px auto;
  padding: 33vh 100px 20vh 100px;
  color: #000;
  text-align: left;
  @media (max-width: lg) {
    height: auto;
    padding: 10vh 100px;
  }
`
const SectionTitleCotainer = css`
  display: flex;
  flex-direction: column;
  width: fit-content;
`

const SectionTitle = css`
  font-size: 2.5rem;
  text-align: left;
  line-height: 1;
`

const SectionSubTitle = css`
  font-size: 1.2rem;
  text-align: center;
`
