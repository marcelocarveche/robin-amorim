import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const EasySharingIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="23.5" cy="34.502" r="17.5" fill="#171717" />
      <circle cx="22.5" cy="33.5" r="17.5" fill="#6779FF" />
      <circle
        cx="41.5"
        cy="14.5"
        r="4.25"
        fill="white"
        stroke="black"
        stroke-width="1.5"
      />
      <circle
        cx="45.5"
        cy="38.5"
        r="4.25"
        fill="white"
        stroke="black"
        stroke-width="1.5"
      />
      <circle
        cx="22.5"
        cy="30.5"
        r="4.25"
        fill="white"
        stroke="black"
        stroke-width="1.5"
      />
      <path d="M25 28L39 17" stroke="black" />
      <path d="M26 32L41.5 37.5" stroke="black" />
    </svg>
  )
}
