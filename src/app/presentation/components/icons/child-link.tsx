import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const ChildLinkIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24.5" cy="24.5015" r="17.5" fill="#171717" />
      <circle cx="23.5" cy="23.4995" r="17.5" fill="#FFB674" />
      <path
        d="M30 34.5008C24.5 33.5008 13.6 34.1008 14 44.5008C14.4 54.9008 24.8333 55.1669 30 54"
        stroke="#171717"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M38 34.5008C43.5 33.5008 54.4 34.1008 54 44.5008C53.6 54.9008 43.1667 55.1669 38 54"
        stroke="#171717"
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M26 43.5H42"
        stroke="#171717"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  )
}
