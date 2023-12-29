import { css } from '@kuma-ui/core'

export default function Home() {
  // kuma ui components
  const style = css`
      color: red;
      `;

  return (
    <main>
     <h1 className={style}>Home</h1>
    </main>
  )
}
