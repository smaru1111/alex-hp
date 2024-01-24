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

export const Vision = () => {
  return (
    <section className={Diaglonal}>
      <div className={target} id='Vision'></div>
      <FadeInMotion className={visionInner}>
        <div className={SectionTitleCotainer}>
          <p className={SectionTitle}>Vision</p>
          <p className={SectionSubTitle}>ビジョン</p>
        </div>
        <p className={ContentTitle}>すべての人が本気なれる世界をつくる</p>
        <p className={ContentText}>
          つまらない日常。つまらない人生。何か、本気になれるものが欲しい。打ち込める何かが欲しい。
          あの日、あの頃のように、打ち込んでいる日常が欲しい。AleXはその本気になれることを「挑戦」と呼ぶ。
          AleXはすべての挑戦したい人がそういう挑戦、本気になれるものに打ち込んでいる世界をつくりたいと思っている。
          だから、そのために全力で動く。そのためにできることはなんでもする。そしてAleXは君たちに提供する。
          挑戦を、本気で打ち込めるものを
        </p>
        <p className={Catch}>
          Make Your Chance, AleX
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

const visionInner = css`
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

const Catch = css`
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 50px;
  @media (max-width: xl) {
    font-size: 1.2rem;
  }
  @media (max-width: md) {
    font-size: 1rem;
  }
  @media (max-width: sm) {
    font-size: 0.8rem;
  }
`