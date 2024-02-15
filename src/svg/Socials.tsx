import { ComponentProps } from 'react'

export const FacebookLogo = (props: ComponentProps<'svg'>) => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.9558 13.4779C26.9558 6.03407 20.9218 0 13.4779 0C6.03407 0 0 6.03407 0 13.4779C0 20.2048 4.92888 25.7806 11.3727 26.7914V17.3744H7.94928V13.4779H11.3727V10.5087C11.3727 7.13117 13.3836 5.26582 16.4633 5.26582C17.9378 5.26582 19.4796 5.52864 19.4796 5.52864V8.84421H17.7814C16.1061 8.84421 15.5845 9.88336 15.5845 10.9495V13.4779H19.3219L18.7249 17.373H15.5845V26.7914C22.027 25.7806 26.9558 20.2048 26.9558 13.4779Z"
        fill="currentColor"
      />
    </svg>
  )
}