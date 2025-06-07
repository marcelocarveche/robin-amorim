import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const RevenueIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 64 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="33" width="18" height="21" rx="1" fill="#FFC314" />
      <rect x="23" y="15" width="18" height="39" rx="1" fill="#FFC314" />
      <rect x="46" width="18" height="54" rx="1" fill="#FFC314" />
      <path
        d="M56.7041 10.0107C57.7128 10.113 58.5 10.9643 58.5 12V18.5C58.5 19.6046 57.6046 20.5 56.5 20.5C55.3955 20.5 54.5 19.6045 54.5 18.5V16.7275L44.3028 26.5742C42.7332 28.0893 40.239 28.067 38.6963 26.5244L33.9707 21.7988L23.3838 31.9443C22.5863 32.7084 21.3199 32.6812 20.5557 31.8838C19.7917 31.0863 19.8189 29.8199 20.6163 29.0557L31.2022 18.9111L31.3526 18.7744C32.9282 17.4085 35.3082 17.4801 36.7989 18.9707L41.5245 23.6963L51.5674 14H50C48.8955 14 48 13.1045 48 12C48 10.8955 48.8955 10 50 10H56.5L56.7041 10.0107Z"
        fill="black"
      />
    </svg>
  )
}
