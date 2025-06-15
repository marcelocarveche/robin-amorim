import React from 'react'
import { colors } from '@/app/presentation/styles'

type Props = {} & React.HTMLAttributes<HTMLOrSVGElement>

export const UpsellIcon: React.FC<Props> = ({ ...props }) => {
  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_625_5017)">
        <path
          d="M29.6338 2.49987C30.0187 1.83332 30.9803 1.83343 31.3653 2.49987L50.8516 36.2499C51.2363 36.9165 50.7551 37.7498 49.9854 37.7499H38V57.9999C38 58.5521 37.5522 58.9997 37 58.9999H23C22.4477 58.9999 22 58.5522 22 57.9999V37.7499H11.0137C10.2442 37.7495 9.76363 36.9164 10.1485 36.2499L29.6338 2.49987Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_625_5017"
          x="10.0129"
          y="2"
          width="42.974"
          height="58"
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
          <feOffset dx="2" dy="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_625_5017"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_625_5017"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
}
