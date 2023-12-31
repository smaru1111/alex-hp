'use client'
import { css } from '@kuma-ui/core'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > window.innerHeight
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled)
      }
    }

    document.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      // cleanup
      document.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  const headerContainer = css`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
  `

  const header = css`
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
  `
  const headerScrolled = css`
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    transition: all 0.5s ease-in-out;

    background-color: white;
    box-shadow: 0 0 15px rgb(0 0 0 / 20%);
    & > a,
    & > div > a {
      color: black;
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
  `

  const nav = css`
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    & > * {
      margin-left: 35px;
      display: flex;
      align-items: center;
      text-decoration: none;
      &:hover {
        opacity: 0.5;
        transition: all 0.4s ease-in-out;
      }
    }
  `

  return (
    <div className={headerContainer}>
      <header className={scrolled ? headerScrolled : header}>
        <Link href='/' className={title}>
          Alex
        </Link>
        <div className={nav}>
          <Link href={'/#Mission'}>Mission</Link>
          <Link href={'/#Services'}>Services</Link>
          <Link href={'/#About'}>About</Link>
          <Link href={'/#Contact'}>Contact</Link>
        </div>
      </header>
    </div>
  )
}
