import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {
  color?: string
  size?: string
} & React.HTMLAttributes<HTMLOrSVGElement>

export const MicrofoneIcon: React.FC<Props> = ({
  color = colors.orangeDefault,
  size,
  ...props
}) => {
  return (
    <svg
      width="103"
      height="54"
      viewBox="0 0 103 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="6.5" width="20" height="39" rx="10" fill="#DD6900" />
      <path
        d="M31.5 27.5C32.3284 27.5 33 28.1716 33 29C33 32.12 32.4885 36.2432 30.0986 39.6172C28.019 42.553 24.6561 44.7303 19.5 45.332V50H21.5C22.0523 50 22.5 50.4477 22.5 51V53C22.5 53.5523 22.0523 54 21.5 54H11.5C10.9477 54 10.5 53.5523 10.5 53V51C10.5 50.4477 10.9477 50 11.5 50H13.5V45.332C8.34389 44.7303 4.981 42.553 2.90137 39.6172C0.51146 36.2432 0 32.12 0 29C0 28.1716 0.671573 27.5 1.5 27.5C2.32843 27.5 3 28.1716 3 29C3 31.8799 3.48871 35.2568 5.34863 37.8828C7.14011 40.412 10.3884 42.5 16.5 42.5C22.6116 42.5 25.8599 40.412 27.6514 37.8828C29.5113 35.2568 30 31.8799 30 29C30 28.1716 30.6716 27.5 31.5 27.5Z"
        fill="#DD6900"
      />
      <path
        d="M52 9H97"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M52 25H88"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
        d="M52 41H101"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
    </svg>
  )
}
