import React from 'react'
import tw from 'twin.macro'
import styled, { css } from 'styled-components/macro'

// for lang change eg: look at `border-l-4` in primary and secondary buttons
// similarly any bidirectional style changes automatically based on language
const StyledButton = styled.button(
  ({ isPrimary, isSecondary, isSmall, theme }) => [
    // The base button styles added with the tw macro
    tw`text-lg px-8 py-2 rounded
    transform hocus:scale-105 transition-transform duration-75
    hocus:text-yellow-400 focus:outline-none`,

    // Use props to conditionally style your components
    isPrimary && tw`bg-black text-white border-l-4 border-white`,

    // Combine regular css with Tailwind classes within backticks
    isSecondary &&
      css`
        box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
        ${tw`border border-l-4 border-yellow-600`}
      `,

    // Conditional props can be added
    isSmall ? tw`text-sm` : tw`text-lg`,

    // Your tailwind.config.js styles are added by <Theme> in pages/_app.js
    css`
      color: ${theme.colors.white};
    `
  ]
)

const Button = props => <StyledButton {...props} />

export default Button
