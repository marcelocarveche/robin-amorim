import React from 'react'

type Props = {
  color?: string
} & React.HTMLAttributes<HTMLOrSVGElement>

export const LongCloudForm: React.FC<Props> = ({
  color = '#BBC3FE',
  ...props
}) => {
  return (
    <svg
      width="300"
      height="211"
      viewBox="0 0 300 211"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M-50 72C-50 32.2355 -17.7645 0 22 0C61.7645 0 94 32.2355 94 72V216H-50V72Z"
        fill={color}
      />
      <path
        d="M53 136C53 96.2355 85.2355 64 125 64C164.765 64 197 96.2355 197 136V280H53V136Z"
        fill={color}
      />
      <path
        d="M156 200C156 160.235 188.236 128 228 128C267.765 128 300 160.236 300 200V344H156V200Z"
        fill={color}
      />
    </svg>
  )
}
