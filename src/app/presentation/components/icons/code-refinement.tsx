import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const CodeRefinementIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_756_3580)">
        <rect
          y="7.91162"
          width="59"
          height="42.8039"
          rx="0.928979"
          fill="white"
        />
      </g>
      <path
        d="M3.81534 21.3977V20.375L12.0483 16.1818V17.8182L5.73295 20.8608L5.78409 20.7585V21.0142L5.73295 20.9119L12.0483 23.9545V25.5909L3.81534 21.3977ZM19.8738 12.2955L15.655 27.9688H14.2743L18.4931 12.2955H19.8738ZM30.3295 21.3977L22.0966 25.5909V23.9545L28.4119 20.9119L28.3608 21.0142V20.7585L28.4119 20.8608L22.0966 17.8182V16.1818L30.3295 20.375V21.3977Z"
        fill="#171717"
      />
      <defs>
        <filter
          id="filter0_d_756_3580"
          x="0"
          y="7.91162"
          width="60"
          height="43.8037"
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
            result="effect1_dropShadow_756_3580"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_756_3580"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
