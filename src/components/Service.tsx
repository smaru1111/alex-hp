'use client'

import Image from 'next/image'
import { useOffsetTop } from '@/hooks/useOffsetTop'
import { css } from '@kuma-ui/core'
import { useRef } from 'react'

export const Service = () => {
  const serviceRef = useRef<HTMLDivElement>(null)
  const { isViewportThrough, TransitionEffect } = useOffsetTop(serviceRef)

  return (
    <section ref={serviceRef} className={service}>
      <div className={before}>
        <div></div>
      </div>
      <div className={ServiceContainer}>
        <Image
          src={'/service.png'}
          alt='background image'
          width={600}
          height={800}
          quality={100}
          style={{ objectFit: 'cover', width: '50%', height: 'auto', maxHeight: '80vh' }}
        />
        <div className={ServiceInner}>
          {isViewportThrough ? (
            <div className={TransitionEffect}>
              <div className={SectionTitleCotainer}>
                <p className={SectionTitle}>service</p>
                <p className={SectionSubTitle}>サービス</p>
              </div>
              <p className={ContentTitle}>テナント事業</p>
              <p className={ContentText}>
                飲食店が経営したい学生と飲食店経営者がタッグを組んで画期的なメニューを考え販売するための場を提供する事業
                <br></br>
                もっとテキスト欲しいなもっとテキスト欲しいなもっとテキスト欲しいなもっとテキスト欲しいなもっとテキスト欲しいな
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}

const ServiceContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 20px 100px;
  @media (max-width: lg) {
    height: auto;
    padding: 0 100px;
  }
`

const ContentTitle = css`
  margin: 60px 0;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 1;
  @media (max-width: lg) {
    font-size: 2rem;
  }
`

const ContentText = css`
  font-size: 1.5rem;
  text-align: left;
  @media (max-width: lg) {
    font-size: 1rem;
  }
`

const before = css`
  ::before {
    content: '';
    position: absolute;
    top: -10%;
    left: 0;
    width: 120%;
    height: 100%;
    margin: 3% -10% 0;
    background-image: url('/bg-service.png');
    filter: brightness(0.5);
    transform: skewY(-2deg);
    z-index: -19;
  }
`

const service = css`
  position: relative;
  padding: 0 0 50px 0;
`

const ServiceInner = css`
  box-sizing: boder-box;
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  padding: 18vh 0 6vh 100px;
  color: #fff;
  text-align: left;
  @media (max-width: lg) {
    height: auto;
    padding: 5vh 0 5vh 50px;
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
  @media (max-width: lg) {
    font-size: 2rem;
  }
`

const SectionSubTitle = css`
  font-size: 1.2rem;
  text-align: center;
  @media (max-width: lg) {
    font-size: 1rem;
  }
`
