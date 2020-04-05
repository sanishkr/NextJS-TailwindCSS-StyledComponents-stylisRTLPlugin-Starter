import React from 'react'
import { css } from 'styled-components/macro'
import tw from 'twin.macro'
import { Button, Logo } from './../components'

const IndexPage = () => {
  const lang = typeof window === 'object' ? localStorage.getItem('lang') : null
  const newLang = lang === 'ar' ? 'en' : 'ar'
  return (
    <div
      css={[
        tw`h-screen flex flex-col items-center`,
        // Combine regular css and Tailwind styles within backticks
        css`
          background: linear-gradient(#db00ff, #0047ff);
          * {
            ${tw`mt-6`}
          }
        `
      ]}
    >
      <div tw="flex flex-col justify-center h-screen">
        <Button isPrimary>Primary</Button>
        <Button isSecondary>Secondary</Button>
        <Button
          isSmall
          onClick={() => {
            localStorage.setItem('lang', newLang)
            setTimeout(() => window.location.reload(), 1000)
          }}
        >
          Change Language to ({newLang})
        </Button>
      </div>
      <span tw="text-green-400 text-xs">
        Note: Look at `border width (left/right)` in primary and secondary
        buttons
      </span>
      <Logo />
    </div>
  )
}

export default IndexPage
