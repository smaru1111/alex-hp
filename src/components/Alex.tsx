'use client'
import { css } from '@kuma-ui/core'
import { FadeInMotion } from './motion/FadeInMotion'

export const Alex = () => {
  return (
    <section className={alex}>
      <FadeInMotion className={alexContainer}>
        <p className={title}>What is Alex?</p>
        <p className={text}>
          私たちが目指す最終的なサービスがAlexです挑戦したい人が行動したいと思った瞬間に行動するための全て（資金、人脈、知識など）を兼ね備えた総合プラットフォーム
          <br></br>
          誰でも無料で使えるオープンソース型のプラットフォーム<br></br>
          Web3、ブロックチェーンを駆使した自立分散型のプラットフォーム<br></br>
        </p>
      </FadeInMotion>
    </section>
  )
}

const alex = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

const alexContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
  padding: 0 50px;
  max-width: 1200px;
  @media (max-width: xl) {
    width: 90%;
  }
`

const title = css`
  font-size: 4rem;
  font-weight: bold;
  text-decoration: none;
  text-align: left;
  color: white;
  @media (max-width: xl) {
    font-size: 7vw;
  }
`

const text = css`
  font-size: 1.5rem;
  margin-top: 30px;
  font-weight: normal;
  text-decoration: none;
  color: white;
  @media (max-width: xl) {
    font-size: 2vw;
  }
  @media (max-width: md) {
    font-size: 1rem;
  }
`
