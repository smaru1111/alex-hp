'use client'
import { useScrollFixed } from '@/hooks/useScrollFixed'
import { css } from '@kuma-ui/core'
import Link from 'next/link'
import { FadeInMotion } from './motion/FadeInMotion'

export const Header = () => {
  const scrolled = useScrollFixed()

  return (
    <div className={headerContainer}>
      <FadeInMotion offscreenVariant={{ y: '-100%' }} onscreenVariant={{ y: '0' }}>
        <header className={scrolled ? headerScrolled : header}>
          <Link href='/' className={title}>
            Alex
          </Link>
          <div className={nav}>
            <Link href={'/#Vision'}>Vision</Link>
            <Link href={'/#Service'}>Service</Link>
            <Link href={'/#About'}>About</Link>
            <Link href={'/#Contact'}>Contact</Link>
          </div>
        </header>
      </FadeInMotion>
    </div>
  )
}

const headerContainer = css`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
`

const header = css`
  padding: 5px 30px;
  display: flex;
  justify-content: space-between;
`
const headerScrolled = css`
  padding: 5px 40px;
  display: flex;
  justify-content: space-between;
  transition: all 0.5s ease-in-out;

  background-color: white;
  box-shadow: 0 0 15px rgb(0 0 0 / 20%);
  & > a,
  & > div > a {
    color: black;
  }
  @media (max-width: md) {
    padding: 5px 20px;
  }
`

const title = css`
  color: white;
  font-size: 32px;
  font-weight: normal;
  text-decoration: none;
  &:hover {
    opacity: 0.5;
    transition: all 0.4s ease-in-out;
  }
  @media (max-width: xl) {
    font-size: 28px;
  }
  @media (max-width: md) {
    font-size: 20px;
  }
`

const nav = css`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  & > * {
    margin-left: 30px;
    display: flex;
    align-items: center;
    text-decoration: none;
    &:hover {
      opacity: 0.5;
      transition: all 0.4s ease-in-out;
    }
  }
  @media (max-width: md) {
    font-size: 12px;
    & > * {
      margin-left: 15px;
    }
  }
`
