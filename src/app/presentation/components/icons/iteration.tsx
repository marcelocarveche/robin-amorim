import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {
  color?: string
  size?: string
} & React.HTMLAttributes<HTMLOrSVGElement>

export const IterationIcon: React.FC<Props> = ({
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
        <path
          d="M16.5076 33.02C16.5187 32.7441 16.3039 32.5114 16.028 32.5004C15.7521 32.4894 15.5195 32.7041 15.5084 32.98L16.5076 33.02ZM29.008 45.5L24.4075 42.0116L23.6867 47.7399L29.008 45.5ZM16.008 33L15.5084 32.98C15.3631 36.6141 17.0796 43.3938 24.4111 45.4203L24.5443 44.9383L24.6776 44.4564C17.9821 42.6058 16.3717 36.4184 16.5076 33.02L16.008 33Z"
          fill="white"
        />
        <g filter="url(#filter0_d_170_2093)">
          <rect
            x="2"
            y="2"
            width="17.0784"
            height="3.94118"
            rx="1"
            fill="#6779FF"
          />
          <rect
            x="5.2843"
            y="7.91162"
            width="21.6765"
            height="7.88235"
            rx="1"
            fill="white"
          />
          <rect
            x="2"
            y="17.7646"
            width="22.9902"
            height="7.22549"
            rx="1"
            fill="white"
          />
          <rect
            x="2"
            y="27.5015"
            width="24.9608"
            height="3.40023"
            rx="1.70012"
            fill="#0E20A2"
          />
        </g>
        <g filter="url(#filter1_d_170_2093)">
          <rect
            x="33"
            y="28"
            width="24.9608"
            height="3.94118"
            rx="1"
            fill="#6779FF"
          />
          <rect
            x="33"
            y="33.9116"
            width="24.9608"
            height="7.88235"
            rx="1"
            fill="white"
          />
          <rect
            x="33"
            y="43.7646"
            width="24.9608"
            height="7.22549"
            rx="1"
            fill="white"
          />
          <rect
            x="33"
            y="53.5015"
            width="24.9608"
            height="3.40023"
            rx="1.70012"
            fill="#0E20A2"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_170_2093"
            x="2"
            y="2"
            width="25.9608"
            height="29.9019"
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
              result="effect1_dropShadow_170_2093"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_170_2093"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_170_2093"
            x="33"
            y="28"
            width="25.9608"
            height="29.9019"
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
              result="effect1_dropShadow_170_2093"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_170_2093"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}
