import Image from 'next/image'
import { css } from '@kuma-ui/core'
import { FadeInMotion } from './motion/FadeInMotion'
import {
  ContentText,
  ContentTitle,
  SectionSubTitle,
  SectionTitle,
  SectionTitleCotainer,
  target,
} from '@/style/section'

export const Service = () => {
  return (
    <section className={Diaglonal}>
      <div className={target} id='Service'></div>
      <FadeInMotion className={ServiceContainer}>
        <Image
          className={ServiceImage}
          src={'/service.png'}
          alt='background image'
          width={600}
          height={800}
          quality={100}
          style={{ objectFit: 'cover', width: '50%', height: 'auto', maxHeight: '70vh' }}
        />
        <div className={ServiceInner}>
          <div className={SectionTitleCotainer}>
            <p className={SectionTitle}>Service</p>
            <p className={SectionSubTitle}>サービス</p>
          </div>
          <p className={ContentTitle}>テナント事業</p>
          <p className={ContentText}>
            飲食店が経営したい学生と飲食店経営者がタッグを組んで画期的なメニューを考え販売するための場を提供する事業
            <br></br>
            もっとテキスト欲しいなもっとテキスト欲しいなもっとテキスト欲しいなもっとテキスト欲しいなもっとテキスト欲しいな
          </p>
        </div>
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
  transform: skewY(2deg);
  background-image: url('/bg-service-sub.png');
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -19;
  @media (max-width: xl) {
    height: 80vh;
  }
  @media (max-width: md) {
    height: auto;
  }
`
const ServiceContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  max-width: 1200px;
  padding: 80px 50px;
  @media (max-width: xl) {
    height: auto;
    width: 90%;
    padding: 10vh 0;
  }
  & > * {
    transform: skewY(-2deg);
  }
`
const ServiceImage = css`
  width: 40%;
  height: auto;
  max-height: 60vh;
  @media (max-width: lg) {
    display: none;
  }
`

const ServiceInner = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%;
  height: 100%;
  color: #fff;
  text-align: left;
  margin-left: 50px;
  @media (max-width: lg) {
    margin-left: 0;
    width: 100%;
  }
`
