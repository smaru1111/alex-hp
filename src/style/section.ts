import { css } from '@kuma-ui/core'

export const SectionTitleCotainer = css`
  display: flex;
  flex-direction: column;
  width: fit-content;
`

export const SectionTitle = css`
  font-size: 1.8rem;
  text-align: left;
  line-height: 1;
  @media (max-width: xl) {
    font-size: 1.6rem;
  }
  @media (max-width: md) {
    font-size: 1.4rem;
  }
`

export const SectionSubTitle = css`
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.2;
  @media (max-width: xl) {
    font-size: 0.6rem;
  }
  /* @media (max-width: md) {
    font-size: 0.6rem;
  } */
`

export const ContentTitle = css`
  margin: 40px 0;
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1;
  @media (max-width: xl) {
    margin: 30px 0;
    font-size: 1.6rem;
  }
  @media (max-width: md) {
    margin: 20px 0;
    font-size: 1.5rem;
  }
`

export const ContentText = css`
  font-size: 1rem;
  text-align: left;
  @media (max-width: md) {
    font-size: 0.8rem;
  }
`

export const target = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50vh);
`
