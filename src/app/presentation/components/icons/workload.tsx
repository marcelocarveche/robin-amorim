import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {
  color?: string
  size?: string
} & React.HTMLAttributes<HTMLOrSVGElement>

export const WorkloadIcon: React.FC<Props> = ({
  color = colors.orangeDefault,
  size,
  ...props
}) => {
  return (
    <svg
      width="68"
      height="54"
      viewBox="0 0 68 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="25.5" cy="28.5" r="25.5" fill="#BBC3FE" />
      <path
        d="M56.1141 6.54598C59.3721 7.53273 62.1047 9.77276 63.7114 12.7733L63.8585 13.0556C65.3389 15.9929 65.6365 19.3908 64.681 22.5462C63.6948 25.8023 61.4545 28.5324 58.4544 30.1376L58.4551 30.1388L43.2755 38.2838C42.8073 38.535 42.2583 38.59 41.7498 38.436L27.0648 33.9884C26.0077 33.6682 25.4103 32.5517 25.7304 31.4945L30.1754 16.8179C30.3292 16.3103 30.6784 15.8846 31.1461 15.6344L46.3374 7.51134L46.6207 7.36448C49.5589 5.88589 52.9579 5.59006 56.1141 6.54598Z"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M52.5978 18.7229L16 38.3056"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M45.1487 31.8114L34.2957 28.5244"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
