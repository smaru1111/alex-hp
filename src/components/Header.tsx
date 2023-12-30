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

  const header = css`
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;
  `
  const headerScrolled = css`
    box-shadow: 0 4px 2px -2px gray;
    border-bottom: 1px solid #ccc;
  `

  const title = css`
    font-size: 32px;
    font-weight: normal;
    text-decoration: none;
    color: white;
    &:hover {
      transition: all 0.2s ease-in-out;
      opacity: 0.8;
    }
  `

  const nav = css`
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 24px;
    & > * {
      margin-left: 15px;
      display: flex;
      align-items: center;
      text-decoration: none;
      &:hover {
        opacity: 0.7;
        transition: all 0.2s ease-in-out;
      }
    }
  `

  return (
    <header className={scrolled ? [headerScrolled, header].join() : header}>
      <Link href='/' className={title}>
        Header
      </Link>
      <div className={nav}>
        <Link href={'/#Mission'}>Mission</Link>
        <Link href={'/#Services'}>Services</Link>
        <Link href={'/#About'}>About</Link>
        <Link href={'/#Contact'}>Contact</Link>
      </div>
    </header>
  )
}
