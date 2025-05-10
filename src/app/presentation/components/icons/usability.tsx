import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {
  color?: string
  size?: string
} & React.HTMLAttributes<HTMLOrSVGElement>

export const UsabilityIcon: React.FC<Props> = ({
  color = colors.orangeDefault,
  size,
  ...props
}) => {
  return (
    <div {...props}>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_170_2160)">
          <g filter="url(#filter0_d_170_2160)">
            <rect
              x="5.5"
              y="5.5"
              width="49"
              height="45"
              fill="#BBC3FE"
              stroke="#171717"
            />
            <rect
              x="11"
              y="11"
              width="38"
              height="6.03922"
              rx="1"
              fill="#6779FF"
            />
            <rect x="11" y="20" width="38" height="14" rx="1" fill="white" />
            <rect
              x="11"
              y="39.8232"
              width="38"
              height="5.17647"
              rx="2.58824"
              fill="#0E20A2"
            />
            <line
              x1="12.7273"
              y1="24.3037"
              x2="47.2728"
              y2="24.3037"
              stroke="#171717"
            />
            <line
              x1="12.7273"
              y1="26.8926"
              x2="47.2728"
              y2="26.8926"
              stroke="#171717"
            />
            <line
              x1="12.7273"
              y1="29.8926"
              x2="47.2728"
              y2="29.8926"
              stroke="#171717"
            />
            <line
              x1="16.1819"
              y1="42.9116"
              x2="43.8182"
              y2="42.9116"
              stroke="white"
            />
            <line
              x1="12.7273"
              y1="13.9512"
              x2="47.2728"
              y2="13.9512"
              stroke="#171717"
            />
          </g>
          <path
            d="M47 45L51.202 55.7553L58.4154 46.7386L47 45ZM54.0278 50.6223L53.4031 51.4031L59.1816 56.0259L59.8062 55.245L60.4309 54.4641L54.6525 49.8414L54.0278 50.6223Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_170_2160"
            x="5"
            y="5"
            width="51"
            height="47"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="1" dy="1" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_170_2160"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_170_2160"
              result="shape"
            />
          </filter>
          <clipPath id="clip0_170_2160">
            <rect width="60" height="60" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
