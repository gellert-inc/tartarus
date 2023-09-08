import tw, { styled, css, theme } from 'twin.macro'

const Button = styled.button(({ variant, md, xl }) => [
  // The common button styles added with the tw import
  tw`rounded focus:outline-none transform duration-75`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hover:(shadow-lg)`,

  // Use props to conditionally style your components
  variant === 'primary' && tw`bg-teal-accent-700 text-white font-medium`,

  // Combine regular css with tailwind classes within backticks
  variant === 'primary' && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.15);
    `,
    tw`border-none`
  ],

  // Conditional props can be used
  md && tw`text-base px-6 py-2`,
  xl && tw`text-xl px-12 py-4`,

  // The theme import can supply values from your tailwind.config.js
  css`
    color: ${theme`colors.white`};
  `
])

export default Button
