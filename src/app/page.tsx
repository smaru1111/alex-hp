'use client'
import Image from 'next/image'
import { css } from '@kuma-ui/core'
import { Header } from '@/components/Header'
import bgImage from '../../public/bg.png'
import { Index } from '@/components/Index'
import { Mission } from '@/components/Mission'
import { Service } from '@/components/Service'
import { Alex } from '@/components/Alex'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
export default function Home() {
  const style = css`
    /* noto sans jp */
    font-family: 'Noto Sans JP', sans-serif;
  `
  const bg = css`
    position: fixed;
    z-index: -50;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  `
  const bgimage = css`
    object-fit: cover;
    -webkit-animation: zoom 5s 1;
    animation: zoom 5s 1;
    animation-fill-mode: forwards;

    @keyframes zoom {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(1.1);
      }
    }
  `

  const container = css`
    overflow-x: hidden;
  `

  return (
    <main className={style}>
      <Header />
      <div className={container}>
        <Index />
        <Mission />
        <Service />
        <Alex />
        <About />
        <Contact />
        <Footer />
      </div>
      <div className={bg}>
        <Image
          src={bgImage}
          alt='background image'
          fill
          quality={100}
          className={bgimage}
        />
      </div>
    </main>
  )
}
