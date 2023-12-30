import Image from 'next/image'
import { css } from '@kuma-ui/core'
import { Header } from '@/components/Header'
import bgImage from '../../public/bg.png'
export default function Home() {
  const style = css`
    /* noto sans jp */
    font-family: 'Noto Sans JP', sans-serif;
    height: 100vh;
    width: 100vw;
  `
  const bg = css`
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  `
  const bgimage = css`
    object-fit: cover;
  `

  return (
    <main className={style}>
      <Header />
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
