import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const InteractionEffectsIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_755_11226)">
        <rect
          x="2"
          y="28"
          width="56"
          height="20.8135"
          rx="10.4067"
          fill="#FF7A02"
        />
      </g>
      <circle cx="12" cy="38" r="8" fill="white" />
      <path
        d="M50 4L52.7009 11.2991L60 14L52.7009 16.7009L50 24L47.2991 16.7009L40 14L47.2991 11.2991L50 4Z"
        fill="white"
      />
      <path
        d="M36 19L36.8103 21.1897L39 22L36.8103 22.8103L36 25L35.1897 22.8103L33 22L35.1897 21.1897L36 19Z"
        fill="white"
      />
      <path
        d="M42 2L42.8103 4.18973L45 5L42.8103 5.81027L42 8L41.1897 5.81027L39 5L41.1897 4.18973L42 2Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_755_11226"
          x="2"
          y="28"
          width="57"
          height="21.8135"
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
            result="effect1_dropShadow_755_11226"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_755_11226"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
