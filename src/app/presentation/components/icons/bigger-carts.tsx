import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const BiggerCartsIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 61 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 9.5H7L17 30.5L12.8692 39.1371C12.2343 40.4646 13.202 42 14.6735 42H42.5"
        stroke="#DD6900"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="39.5" cy="51" r="4.5" fill="#DD6900" stroke="#DD6900" />
      <circle cx="15.5" cy="51" r="4.5" fill="#DD6900" stroke="#DD6900" />
      <path
        d="M47 14H10L17.5 32.5H37.5L47 14Z"
        fill="#DD6900"
        stroke="#DD6900"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M51.5 2V16"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M44.5 9H58.5"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
