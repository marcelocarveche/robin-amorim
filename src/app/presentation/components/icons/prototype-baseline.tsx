import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const PrototypeBaselineIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 70 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="70" height="54" fill="#E2E2E2" />
      <rect width="70" height="7" fill="#FFC314" />
      <rect
        x="11"
        y="15"
        width="48"
        height="22"
        fill="white"
        stroke="#171717"
        stroke-width="2"
      />
      <rect x="25" y="44" width="19" height="6" rx="3" fill="#FFC314" />
    </svg>
  )
}
