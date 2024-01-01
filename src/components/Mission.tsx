import { css } from '@kuma-ui/core'
import { FadeInMotion } from './motion/FadeInMotion'
import {
  SectionTitleCotainer,
  SectionTitle,
  SectionSubTitle,
  ContentTitle,
  ContentText,
  target,
} from '@/style/section'

export const Mission = () => {
  return (
    <section className={Diaglonal}>
      <div className={target} id='Mission'></div>
      <FadeInMotion className={missionInner}>
        <div className={SectionTitleCotainer}>
          <p className={SectionTitle}>Mission</p>
          <p className={SectionSubTitle}>ミッション</p>
        </div>
        <p className={ContentTitle}>自分たちがしたい・やりたいを実現する</p>
        <p className={ContentText}>
          ビジョンを実現するためには、まずAlexのメンバーが挑戦者にならなければならない。なぜなら、挑戦者の気持ちは挑戦者しかわからないし、したいことややりたいことができる環境がどういうものかっていうのはしたいことややりたいことをやっている本人しかわからないと思うから。そして、何よりもこのミッションを掲げている理由は、メンバー１人１人にAlexの活動を心の底から楽しんでほしいから。
        </p>
      </FadeInMotion>
    </section>
  )
}

const Diaglonal = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin-top: 70px;
  background: #fff;
  transform: skewY(2deg);
  @media (max-width: xl) {
    height: 80vh;
  }
  @media (max-width: md) {
    height: auto;
  }
`

const missionInner = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  padding: 80px 50px;
  color: #000;
  text-align: left;
  @media (max-width: xl) {
    height: auto;
    width: 90%;
    padding: 10vh 0;
  }
  & > * {
    transform: skewY(-2deg);
  }
`
