import Image from 'next/image'
import { css } from '@kuma-ui/core'
import { FadeInMotion } from './motion/FadeInMotion'
import {
  SectionTitleCotainer,
  SectionTitle,
  SectionSubTitle,
  target,
} from '@/style/section'
export const About = () => {
  return (
    <section className={Diaglonal}>
      <div className={target} id='About'></div>
      <FadeInMotion className={AboutContainer}>
        <div className={AboutInner}>
          <div className={SectionTitleCotainer}>
            <p className={SectionTitle}>About</p>
            <p className={SectionSubTitle}>組織概要</p>
          </div>

          <div className={AboutGrid}>
            <div className={AboutGridItem}>
              <p>団体名</p>
              <p>活動場所</p>
              <p>設立日</p>
              <p>事業内容</p>
              <p>代表者</p>
              <p>メンバー</p>
            </div>
            <div className={AboutGridItem}>
              <p>AleX</p>
              <p>佐賀大学</p>
              <p>2023年11月8日</p>
              <p>フリマ事業</p>
              <p>福光 希望</p>
              <p>マネジメントチーム　４名</p>
              <p>エンジニアチーム　３名</p>
              <p>特例メンバー　３名</p>
            </div>
          </div>
        </div>
        <Image
          className={AboutImage}
          src='/service.png'
          alt='background image'
          width={600}
          height={800}
          quality={100}
          style={{ objectFit: 'cover', width: '50%', height: 'auto', maxHeight: '70vh' }}
        />
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
  background: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -19;
  @media (max-width: md) {
    height: auto;
  }
`
const AboutContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 80px 50px;

  @media (max-width: xl) {
    justify-content: space-between;
    height: auto;
    width: 90%;
    padding: 10vh 0;
  }
`

const AboutInner = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  color: #000;
  text-align: left;
  margin-right: 50px;
  @media (max-width: lg) {
    width: 60%;
    margin-left: 0;
    width: auto;
    margin: 0 auto;
  }
`

const AboutGrid = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 80px;
  @media (max-width: md) {
    margin-top: 40px;
  }
`

const AboutGridItem = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  line-height: 1.8;
  & > *:first-child {
    margin-right: 50px;
  }
  & > * {
    font-size: 1.2rem;
    text-align: center;
    @media (max-width: xl) {
      font-size: 1rem;
    }
    @media (max-width: md) {
      font-size: 0.8rem;
    }
  }
`

const AboutImage = css`
  width: 40%;
  height: auto;
  max-height: 60vh;
  @media (max-width: md) {
    display: none;
  }
`
