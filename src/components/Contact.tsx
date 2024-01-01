import Link from 'next/link'
import { css } from '@kuma-ui/core'
import {
  SectionTitleCotainer,
  SectionTitle,
  SectionSubTitle,
  target,
} from '@/style/section'

export const Contact = () => {
  return (
    <section className={contact}>
      <div className={target} id='Contact'></div>
      <div className={ContactInner}>
        <div className={SectionTitleCotainer}>
          <p className={SectionTitle}>Contact</p>
          <p className={SectionSubTitle}>コンタクト</p>
        </div>
        <div className={contactButton}>
          <Link href={'/#Contact'}>お問い合わせはこちらから</Link>
        </div>
      </div>
    </section>
  )
}

const contact = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`

const ContactInner = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  color: #fff;
  padding: 10vh 0;
  @media (max-width: xl) {
    height: auto;
    width: 90%;
  }
  @media (max-width: md) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5vh 0;
  }
`

const contactButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 30px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  transition: 0.3s;
  font-size: 0.8rem;
  & > * {
    text-decoration: none;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
  @media (max-width: md) {
    margin-top: 20px;
    padding: 10px 20px;
  }
`
