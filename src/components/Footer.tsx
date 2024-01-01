import { Link, css } from '@kuma-ui/core'

export const Footer = () => {
  return (
    <footer className={footer}>
      <div className={footerInner}>
        <div className={FooterTitleCotainer}>
          <p className={FooterTitle}>Alex</p>
          <p className={FooterSubTitle}>
            挑戦したい人が<br></br>挑戦できる世界をつくる
          </p>
        </div>
        <div className={footerRight}>
          <Link href={'/#Mission'}>Mission</Link>
          <Link href={'/#Service'}>Service</Link>
          <Link href={'/#About'}>About</Link>
          <Link href={'/#Contact'}>Contact</Link>
        </div>
      </div>
      <div className={copyLight}>
        <p>© 2021 Alex</p>
      </div>
    </footer>
  )
}

const footer = css`
  width: 100%;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`

const footerInner = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 800px;
  padding: 50px 0 100px 0;
  @media (max-width: xl) {
    height: auto;
    width: 90%;
    padding: 10vh 0;
  }
  @media (max-width: sm) {
    padding: 5vh 15px;
  }
`

const FooterTitleCotainer = css`
  display: flex;
  flex-direction: column;
  width: fit-content;
`

const FooterTitle = css`
  font-size: 2rem;
  text-align: left;
  line-height: 1;
  @media (max-width: xl) {
    font-size: 1.8rem;
  }
  @media (max-width: md) {
    font-size: 1.5rem;
  }
  @media (max-width: sm) {
    font-size: 1.2rem;
  }
`

const FooterSubTitle = css`
  font-size: 0.8rem;
  text-align: left;
  @media (max-width: md) {
    font-size: 0.6rem;
  }
`

const footerRight = css`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 15px;
  & > * {
    margin-left: 30px;
    display: flex;
    align-items: flex-start;
    text-decoration: none;
    color: white;
    &:hover {
      opacity: 0.5;
      transition: all 0.4s ease-in-out;
    }
  }
  & > * > a {
    color: white;
    text-decoration: none;
  }
  @media (max-width: md) {
    font-size: 0.8rem;
    & > * {
      margin-left: 20px;
    }
  }
  @media (max-width: sm) {
    flex-direction: column;
  }
`

const copyLight = css`
  width: 100%;
  max-width: 800px;
  margin-top: 30px;
  text-align: center;
  font-size: 0.8rem;
  color: #fff;
  @media (max-width: md) {
    font-size: 0.6rem;
  }
`
