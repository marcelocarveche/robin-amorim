import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {
  color?: string
  size?: string
} & React.HTMLAttributes<HTMLOrSVGElement>

export const SketchingIcon: React.FC<Props> = ({
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
        <g filter="url(#filter0_d_170_2038)">
          <rect
            x="1.25"
            y="5.25"
            width="37.5"
            height="5.53922"
            rx="0.75"
            fill="#FF7A02"
            stroke="#171717"
            stroke-width="0.5"
          />
          <rect
            x="1.25"
            y="14.7402"
            width="37.5"
            height="10.7157"
            rx="0.75"
            fill="#FF7A02"
            stroke="#171717"
            stroke-width="0.5"
          />
          <rect
            x="1.25"
            y="29.4067"
            width="37.5"
            height="10.7157"
            rx="0.75"
            fill="#FF7A02"
            stroke="#171717"
            stroke-width="0.5"
          />
          <rect
            x="1.25"
            y="44.0732"
            width="37.5"
            height="4.67647"
            rx="2.33824"
            fill="#FF7A02"
            stroke="#171717"
            stroke-width="0.5"
          />
          <line
            x1="2.72729"
            y1="18.3037"
            x2="37.2728"
            y2="18.3037"
            stroke="#171717"
          />
          <line
            x1="2.72729"
            y1="20.8926"
            x2="37.2728"
            y2="20.8926"
            stroke="#171717"
          />
          <line
            x1="2.72729"
            y1="32.9707"
            x2="37.2728"
            y2="32.9707"
            stroke="#171717"
          />
          <line
            x1="2.72729"
            y1="35.5591"
            x2="37.2728"
            y2="35.5591"
            stroke="#171717"
          />
          <line
            x1="6.18188"
            y1="45.9116"
            x2="33.8182"
            y2="45.9116"
            stroke="#171717"
          />
          <line
            x1="2.72729"
            y1="7.95117"
            x2="37.2728"
            y2="7.95117"
            stroke="#171717"
          />
          <rect
            x="21"
            y="13"
            width="38"
            height="6.03922"
            rx="1"
            fill="#E2E2E2"
          />
          <rect
            x="21"
            y="22.4902"
            width="38"
            height="11.2157"
            rx="1"
            fill="#E2E2E2"
          />
          <rect
            x="21"
            y="37.1567"
            width="38"
            height="11.2157"
            rx="1"
            fill="#E2E2E2"
          />
          <rect
            x="21"
            y="51.8232"
            width="38"
            height="5.17647"
            rx="2.58824"
            fill="#E2E2E2"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_170_2038"
            x="1"
            y="5"
            width="59"
            height="52.9995"
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
              result="effect1_dropShadow_170_2038"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_170_2038"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
