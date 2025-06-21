import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const DesignTransferIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 77 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="37" height="47" fill="#F196EA" />
      <rect x="7" y="7" width="24" height="9" fill="white" />
      <rect x="7" y="19" width="9" height="9" fill="white" />
      <rect x="22" y="19" width="9" height="9" fill="white" />
      <rect x="7" y="31" width="24" height="9" fill="white" />
      <rect x="40" y="7" width="37" height="47" fill="#FFDEFD" />
      <rect x="47" y="14" width="24" height="9" fill="white" />
      <rect x="47" y="26" width="9" height="9" fill="white" />
      <rect x="62" y="26" width="9" height="9" fill="white" />
      <rect x="47" y="38" width="24" height="9" fill="white" />
      <path
        d="M58.8559 16.2654C59.2783 16.6211 59.9092 16.5671 60.2649 16.1446L66.0621 9.26042C66.4179 8.83797 66.3638 8.20712 65.9414 7.85137C65.5189 7.49563 64.8881 7.5497 64.5323 7.97215L59.3792 14.0914L53.2599 8.93832C52.8375 8.58258 52.2066 8.63665 51.8509 9.0591C51.4952 9.48154 51.5492 10.1124 51.9717 10.4681L58.8559 16.2654ZM20.5 7.50047L21.0692 8.32266C27.3705 3.96015 36.5018 1.64721 44.1952 2.55585C48.0312 3.0089 51.4381 4.25398 53.959 6.36804C56.4582 8.46392 58.1505 11.4651 58.5037 15.5859L59.5 15.5005L60.4963 15.4151C60.0995 10.7856 58.1668 7.28665 55.2441 4.8356C52.3431 2.40272 48.5312 1.05405 44.4298 0.569652C36.2482 -0.396627 26.6295 2.04067 19.9308 6.67828L20.5 7.50047Z"
        fill="#171717"
      />
    </svg>
  )
}
