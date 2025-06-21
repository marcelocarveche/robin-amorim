import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const AICopilotIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_754_3765)">
        <rect
          x="4"
          y="9.19385"
          width="52"
          height="23.6364"
          rx="11.8182"
          fill="#6779FF"
        />
      </g>
      <g filter="url(#filter1_d_754_3765)">
        <path
          d="M4 49.0344C4 41.6081 10.0202 35.5879 17.4465 35.5879H42.5535C49.9798 35.5879 56 41.6081 56 49.0344C56 49.9626 55.2475 50.7152 54.3192 50.7152H5.68081C4.75252 50.7152 4 49.9626 4 49.0344Z"
          fill="#6779FF"
        />
      </g>
      <path
        d="M18.1819 23.3756C18.1819 21.2869 19.8751 19.5938 21.9637 19.5938C24.0523 19.5938 25.7455 21.2869 25.7455 23.3756V23.7958C25.7455 24.0859 25.5104 24.321 25.2203 24.321H18.7071C18.417 24.321 18.1819 24.0859 18.1819 23.7958V23.3756Z"
        fill="#171717"
      />
      <path
        d="M35.2 23.3756C35.2 21.2869 36.8931 19.5938 38.9818 19.5938C41.0704 19.5938 42.7636 21.2869 42.7636 23.3756V23.7958C42.7636 24.0859 42.5284 24.321 42.2383 24.321H35.7252C35.4351 24.321 35.2 24.0859 35.2 23.7958V23.3756Z"
        fill="#171717"
      />
      <defs>
        <filter
          id="filter0_d_754_3765"
          x="4"
          y="9.19385"
          width="53"
          height="24.6362"
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
            result="effect1_dropShadow_754_3765"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_754_3765"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_754_3765"
          x="4"
          y="35.5879"
          width="53"
          height="16.1274"
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
            result="effect1_dropShadow_754_3765"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_754_3765"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
