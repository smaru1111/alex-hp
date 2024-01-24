import { Link, css } from '@kuma-ui/core'
import { FadeInMotion } from './motion/FadeInMotion'

export const Index = () => {
  return (
    <section className={index}>
      <div className={titleContainer}>
        <FadeInMotion>
          <p className={title}>
            挑戦したい人が<br></br>
            挑戦できる世界をつくる
          </p>
        </FadeInMotion>
        <FadeInMotion delay={1}>
          <p className={subTitle}>自らのActionによって、自らの未来を開拓するアーティスト集団</p>
        </FadeInMotion>
      </div>
      <div className={ScrollContainer}>
        <div className={type}>
          <Link href='/#Vision'>Scroll</Link>
        </div>
      </div>
    </section>
  )
}

const index = css`
  position: relative;
  height: 100vh;
  width: 100vw;
`

const titleContainer = css`
  position: absolute;
  top: 35%;
  left: 7%;
`

const title = css`
  font-size: 4rem;
  font-weight: bold;
  text-decoration: none;
  text-align: left;
  color: white;
  @media (max-width: xl) {
    font-size: 6vw;
  }
`

const subTitle = css`
  font-size: 2rem;
  font-weight: normal;
  text-decoration: none;
  color: white;
  @media (max-width: xl) {
    font-size: 3vw;
  }
`

const ScrollContainer = css`
  position: absolute;
  right: 40px;
  bottom: 20px;
  z-index: 2;
  padding: 10px 10px 60px;
  color: #fff;
  font-family: 'Josefin Sans', sans-serif;
  line-height: 0.5;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-decoration: none;
  writing-mode: vertical-lr;
  transition: 0.2s;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 1px;
    height: 50px;
    background: #fff;
    animation: sdl01 2s cubic-bezier(1, 0, 0, 1) infinite;
    @keyframes sdl01 {
      0% {
        transform: scale(1, 0);
        transform-origin: 0 0;
      }
      50% {
        transform: scale(1, 1);
        transform-origin: 0 0;
      }
      50.1% {
        transform: scale(1, 1);
        transform-origin: 0 100%;
      }
      100% {
        transform: scale(1, 0);
        transform-origin: 0 100%;
      }
    }
  }
  &:hover {
    opacity: 0.5;
  }
  @media (max-width: md) {
    bottom: 40px;
  }
`

const type = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    margin: 0;
  }
  & > a {
    margin-top: 30px;
    font-size: 0.5rem;
    text-decoration: none;
    color: white;
  }
`
