import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {
  color?: string
  size?: string
} & React.HTMLAttributes<HTMLOrSVGElement>

export const PrototypingIcon: React.FC<Props> = ({
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
        <g filter="url(#filter0_d_170_2132)">
          <rect width="37.125" height="5.86164" rx="1" fill="#6779FF" />
          <rect
            y="8.73535"
            width="37.125"
            height="5.82358"
            rx="1"
            fill="white"
          />
          <rect
            y="27.9756"
            width="37.125"
            height="5.02426"
            rx="2.51213"
            fill="#BBC3FE"
          />
          <line
            x1="5.0625"
            y1="30.9585"
            x2="32.0625"
            y2="30.9585"
            stroke="#171717"
          />
          <line
            x1="1.6875"
            y1="2.84961"
            x2="35.4375"
            y2="2.84961"
            stroke="#171717"
          />
        </g>
        <g filter="url(#filter1_d_170_2132)">
          <rect
            x="21"
            y="24"
            width="38"
            height="6.03922"
            rx="1"
            fill="#6779FF"
          />
          <rect x="21" y="33" width="38" height="14" rx="1" fill="white" />
          <rect
            x="21"
            y="52.8232"
            width="38"
            height="5.17647"
            rx="2.58824"
            fill="#0E20A2"
          />
          <line
            x1="22.7273"
            y1="37.3037"
            x2="57.2728"
            y2="37.3037"
            stroke="#171717"
          />
          <line
            x1="22.7273"
            y1="39.8926"
            x2="57.2728"
            y2="39.8926"
            stroke="#171717"
          />
          <line
            x1="22.7273"
            y1="42.8926"
            x2="57.2728"
            y2="42.8926"
            stroke="#171717"
          />
          <line
            x1="26.1819"
            y1="55.9116"
            x2="53.8182"
            y2="55.9116"
            stroke="white"
          />
          <line
            x1="22.7273"
            y1="26.9512"
            x2="57.2728"
            y2="26.9512"
            stroke="#171717"
          />
        </g>
        <path
          d="M38 10C37.7239 10 37.5 10.2239 37.5 10.5C37.5 10.7761 37.7239 11 38 11V10ZM51 10.5H51.5C51.5 10.2239 51.2761 10 51 10V10.5ZM50.6464 23.8536C50.8417 24.0488 51.1583 24.0488 51.3536 23.8536L54.5355 20.6716C54.7308 20.4763 54.7308 20.1597 54.5355 19.9645C54.3403 19.7692 54.0237 19.7692 53.8284 19.9645L51 22.7929L48.1716 19.9645C47.9763 19.7692 47.6597 19.7692 47.4645 19.9645C47.2692 20.1597 47.2692 20.4763 47.4645 20.6716L50.6464 23.8536ZM38 10.5V11H51V10.5V10H38V10.5ZM51 10.5H50.5V23.5H51H51.5V10.5H51Z"
          fill="#0EACE5"
        />
        <circle
          cx="36.5"
          cy="10.5"
          r="1.25"
          fill="white"
          stroke="#0EACE5"
          stroke-width="0.5"
        />
        <defs>
          <filter
            id="filter0_d_170_2132"
            x="0"
            y="0"
            width="38.125"
            height="34"
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
              result="effect1_dropShadow_170_2132"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_170_2132"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_170_2132"
            x="21"
            y="24"
            width="39"
            height="34.9995"
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
              result="effect1_dropShadow_170_2132"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_170_2132"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
