import tw, { styled, css, theme } from 'twin.macro'
import 'styled-components/macro'

const Button = styled.button(({ variant, md, xl, px, py }) => [
  // The common button styles added with the tw import
  tw`inline-flex items-center justify-center rounded transform duration-75 font-semibold tracking-widest transition duration-200 shadow-md md:w-auto w-full`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hover:(shadow-lg) focus:shadow-outline focus:outline-none `,

  // Use props to conditionally style your components
  variant === 'primary' && tw`bg-teal-accent-700 text-white font-medium hover:bg-teal-700`,

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
  px && css`px-${px}`,
  py && css`py-${py}`,

  // The theme import can supply values from your tailwind.config.js
  css`
    color: ${theme`colors.white`};
  `
])

export default Button
