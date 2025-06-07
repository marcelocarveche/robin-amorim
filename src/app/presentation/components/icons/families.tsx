import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const FamiliesIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 67 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="27" cy="18" r="18" fill="#6779FF" />
      <path
        d="M0 44C0 39.5817 3.58172 36 8 36H46C50.4183 36 54 39.5817 54 44V52H0V44Z"
        fill="#6779FF"
      />
      <circle cx="45.0001" cy="30.2286" r="12.2286" fill="#BBC3FE" />
      <path
        d="M27 48.5233C27 45.4305 29.5072 42.9233 32.6 42.9233H57.4C60.4928 42.9233 63 45.4305 63 48.5233V54.0003H27V48.5233Z"
        fill="#BBC3FE"
      />
      <path
        d="M47 10.375L52.7447 16L65 4"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
