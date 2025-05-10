import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {
  color?: string
  size?: string
} & React.HTMLAttributes<HTMLOrSVGElement>

export const HeartUserIcon: React.FC<Props> = ({
  color = colors.orangeDefault,
  size,
  ...props
}) => {
  return (
    <svg
      width="73"
      height="52"
      viewBox="0 0 73 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="27" cy="18" r="18" fill="#F196EA" />
      <path
        d="M0 44C0 39.5817 3.58172 36 8 36H46C50.4183 36 54 39.5817 54 44V52H0V44Z"
        fill="#F196EA"
      />
      <path
        d="M63.7705 25.0088C64.6296 25.0511 65.4762 25.2413 66.2725 25.5713C67.1822 25.9483 68.0088 26.5008 68.7051 27.1973L68.96 27.4648C69.5376 28.1021 70.0021 28.8346 70.332 29.6309L70.4648 29.9756C70.7545 30.7854 70.9033 31.64 70.9033 32.502C70.9033 33.3639 70.7546 34.2185 70.4648 35.0283L70.332 35.373C69.9549 36.2831 69.4018 37.1102 68.7051 37.8066L68.7041 37.8057L67.6455 38.8662L59.8652 46.6465C59.0842 47.4271 57.8181 47.4272 57.0371 46.6465L49.2568 38.8662L48.1973 37.8057C46.7906 36.3989 46 34.4913 46 32.502C46 30.5125 46.7905 28.604 48.1973 27.1973L48.4668 26.9414C49.8428 25.6955 51.6359 25.0011 53.501 25.001C55.3288 25.001 57.0864 25.6697 58.4512 26.8691C59.0682 26.3267 59.7693 25.8866 60.5303 25.5713C61.4404 25.1942 62.4162 25 63.4014 25L63.7705 25.0088Z"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
