import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const EfficientInterationIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 70 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="70" height="54" fill="white" />
      <rect width="19" height="54" fill="#FFE69E" />
      <path
        d="M31.6811 30.7237V28.8828L40.4254 24.843V27.1122L34.2124 29.7777L34.2827 29.6562V29.9503L34.2124 29.8288L40.4254 32.4943V34.7635L31.6811 30.7237ZM48.644 21.2955L44.4252 36.9688H42.399L46.6177 21.2955H48.644ZM59.3571 30.7237L50.6127 34.7635V32.4943L56.8258 29.8288L56.7555 29.9503V29.6562L56.8258 29.7777L50.6127 27.1122V24.843L59.3571 28.8828V30.7237Z"
        fill="#171717"
      />
    </svg>
  )
}
