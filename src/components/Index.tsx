import { css } from '@kuma-ui/core'
import { motion } from 'framer-motion'

export const Index = () => {
  const index = css`
    position: relative;
    height: 100vh;
    width: 100vw;
  `

  const titleContainer = css`
    position: absolute;
    top: 37%;
    left: 7%;
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
    font-size: 2.5em;
    font-weight: normal;
    text-decoration: none;
    color: white;
    @media (max-width: xl) {
      font-size: 3vw;
    }
  `

  return (
    <section className={index}>
      <motion.div
        className={titleContainer}
        variants={{
          offscreen: {
            // 画面外の場合のスタイル
            y: 100,
            opacity: 0,
          },
          onscreen: {
            // 画面内の場合のスタイル
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          },
        }}
        initial='offscreen' // 初期表示はoffscreen
        whileInView='onscreen' // 画面内に入ったらonscreen
        viewport={{ once: false, amount: 0 }}
      >
        <p className={title}>
          挑戦したい人が<br></br>
          挑戦できる世界をつくる
        </p>
        <p className={subTitle}>新しい技術を創り出し、産業を越境するAIベンチャー</p>
      </motion.div>
    </section>
  )
}
